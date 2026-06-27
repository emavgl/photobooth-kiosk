# Privacy Policy

This privacy policy applies to the Photobooth Kiosk app for mobile devices, together with any related services operated by Emanuele Viglianisi (collectively, the "Application"). Emanuele Viglianisi is hereby referred to as the "Service Provider".

## Information Collection and Use

The Application does not collect, transmit, or store personal data (such as names, email addresses, or photos) on remote servers. All application settings and preferences are stored locally on your device using encrypted storage, and are never shared with the Service Provider or any third party.

The Application communicates over your local WiFi network solely to control a connected camera (Olympus camera API at the device address you configure). No data from this communication leaves your local network.

The Application uses Firebase Analytics (provided by Google) to collect anonymous usage data to help improve the app. See the "Analytics" section below for details.

## Analytics

The Application uses **Firebase Analytics** (Google LLC) to collect anonymous, aggregated usage events. No personally identifiable information is attached to these events. The events logged are:

- `photo_session_started` — a photo session began, including the camera type used (device camera or Olympus)
- `photo_taken` — a photo was captured
- `photo_saved` — a photo was successfully saved to the device
- `photo_save_failed` — a photo could not be saved
- `photo_shared` — the share action was triggered
- `photo_printed` — a photo was sent to print, including whether a custom print app or the system print dialog was used
- `retake_tapped` — the retake button was tapped
- `camera_error` — a camera error occurred, including a short error description (truncated to 100 characters)

Firebase Analytics may also automatically collect certain device and usage information as described in [Google's Privacy Policy](https://policies.google.com/privacy). The advertising identifier (AD_ID) permission is explicitly removed from this Application; Firebase Analytics operates without it.

Data collected by Firebase Analytics is processed by Google and subject to [Google's Privacy Policy](https://policies.google.com/privacy).

## Cookies and Tracking Technologies

The Application does not use cookies or advertising identifiers. Usage analytics are collected as described in the "Analytics" section above.

## Google Play Billing

The Application uses Google Play Billing to process in-app purchases and subscriptions. When you make a purchase, Google Play handles the transaction and may collect information in accordance with [Google's Privacy Policy](https://policies.google.com/privacy). The Service Provider does not receive or store your payment information.

## Third Party Access

The Service Provider does not sell, trade, or share your personal data with third parties.

The external communications from the Application are:

- **Firebase Analytics** — anonymous usage events sent to Google for analytics purposes (see "Analytics" section above)
- **Google Play Billing** — to verify and process in-app purchases, handled entirely by Google Play services
- **Local network camera control** — HTTP requests to your camera on your private local network

The Service Provider may disclose information only:

- As required by law, such as to comply with a subpoena or similar legal process
- When necessary in good faith to protect rights, safety, or to investigate fraud

## Children

The Application is not intended for children under 16 years of age. The Service Provider does not knowingly collect personally identifiable information from children. If you have reason to believe that a child has provided personal information through the Application, please contact the Service Provider at emavgl@gmail.com.

## Security

Application settings are stored locally using AES-256-GCM encrypted storage. Analytics data transmitted to Firebase is anonymous and contains no personal information. Since no personal data is transmitted to or stored on the Service Provider's servers, the risk of a remote data breach affecting your personal information is minimal.

## Changes

The Service Provider may update this Privacy Policy from time to time. The Service Provider will notify you of material changes by posting the updated Privacy Policy with an effective date.

Previous versions of this Privacy Policy will be maintained and made available upon request by contacting the Service Provider at emavgl@gmail.com.

This privacy policy is effective as of 2026-06-27.

## Contact Us

If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at emavgl@gmail.com.
