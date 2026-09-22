#!/usr/bin/env node
// Regenerates public/prices.json from the live Google Play Console data.
//
// Requirements: the `playconsole-cli` tool must be installed and authenticated
// (see `playconsole-cli doctor`). Run with:
//
//   npm run prices

import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const PACKAGE_NAME = process.env.GPC_PACKAGE || 'eu.viglianisi.photobooth';

const PLANS = [
  { key: 'personal_monthly', productId: 'personal_monthly_photobooth', basePlanId: 'monthly' },
  { key: 'personal_yearly', productId: 'personal_yearly_photobooth', basePlanId: 'yearly' },
  { key: 'business_monthly', productId: 'business_monthly_photobooth', basePlanId: 'monthly' },
  { key: 'business_yearly', productId: 'business_yearly_photobooth', basePlanId: 'yearly' },
];

const here = dirname(fileURLToPath(import.meta.url));
const outputPath = join(here, '..', 'public', 'prices.json');

function amountOf(price) {
  const units = Number.parseInt(price.units || '0', 10);
  const nanos = Number(price.nanos || 0);
  return Number((units + nanos / 1e9).toFixed(2));
}

function fetchSubscription(productId) {
  const raw = execFileSync(
    'playconsole-cli',
    ['subscriptions', 'get', '--product-id', productId, '-o', 'json'],
    { env: { ...process.env, GPC_PACKAGE: PACKAGE_NAME }, encoding: 'utf8' }
  );
  return JSON.parse(raw);
}

function main() {
  const plans = {};

  for (const { key, productId, basePlanId } of PLANS) {
    const subscription = fetchSubscription(productId);
    const basePlans = subscription.basePlans || [];
    const basePlan =
      basePlans.find((plan) => plan.basePlanId === basePlanId) || basePlans[0];
    if (!basePlan) {
      throw new Error(`No base plan ${basePlanId} found for ${productId}`);
    }

    const regions = {};
    for (const region of basePlan.regionalConfigs || []) {
      if (region.newSubscriberAvailability === false) continue;
      const price = region.price;
      if (!price || !region.regionCode) continue;
      regions[region.regionCode] = {
        currency: price.currencyCode,
        amount: amountOf(price),
      };
    }

    const other = basePlan.otherRegionsConfig || {};
    const fallbackSource = other.usdPrice || other.eurPrice;
    if (!fallbackSource) {
      throw new Error(`No USD/EUR fallback price configured for ${productId}`);
    }

    plans[key] = {
      fallback: {
        currency: fallbackSource.currencyCode,
        amount: amountOf(fallbackSource),
      },
      regions,
    };
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    packageName: PACKAGE_NAME,
    plans,
  };

  writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(
    `Wrote ${Object.keys(plans).length} plans to ${outputPath} ` +
      `(${Object.keys(plans)
        .map((key) => `${key}: ${Object.keys(plans[key].regions).length} regions`)
        .join(', ')})`
  );
}

main();
