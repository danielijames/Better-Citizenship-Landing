# Better Citizenship — Landing Page

A marketing landing page for the Better Citizenship mobile app (iOS & Android).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

Output is in the `dist/` folder.

## Hosting

The built site is static and can be deployed to:

- **Vercel** — `npm i -g vercel && vercel`
- **Netlify** — Drag `dist/` to [netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages** — Push `dist/` to a `gh-pages` branch or use GitHub Actions
- **Any static host** — Upload the contents of `dist/`

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

Add a `netlify.toml` in the project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

## Hero App Preview

The hero displays an animated carousel of app store screenshots (Citizenship-2.png through Citizenship-10.png) from `public/`. Add or replace images in `public/` and update the array in `App.jsx` if needed.

## App Store Links

Replace the placeholder `#` hrefs in `src/App.jsx` with your actual App Store and Google Play URLs when the apps are live:

- `Download on iOS` → App Store link
- `Download on Android` → Google Play link


# Privacy Policy for Better Citizenship

**Last updated:** [DATE]

Better Citizenship ("we," "our," or "us") operates the Better Citizenship mobile application (the "App"). This Privacy Policy explains how we collect, use, and protect your information when you use our App.

## 1. Information We Collect

The Better Citizenship App stores the following information **locally on your device only**. We do not transmit this data to our servers or any third party.

### 1.1 Onboarding and Profile Data
- **Language preference** — The language you choose for the app (e.g., English, Spanish, French, Hindi, Chinese)
- **Quick language** — An optional second language you can swap to during quizzes (if you choose one)
- **Target country** — The citizenship test you are preparing for (e.g., United States, Canada, United Kingdom, Australia, France, Spain)
- **Profile photo** — An optional photo you select from your device to use as your profile picture. This is stored locally as a reference to the image on your device.

### 1.2 Study and Usage Data
- **Quiz history** — Dates on which you completed quizzes, scores earned, and total points possible. Used to display your stats (quizzes completed, days active, average score, streaks).
- **Study settings** — Your preference for "Early Grading" (whether you can end a quiz early and receive a grade for answered questions only).

## 2. How We Use Your Information

All data described above is used solely to:
- Personalize your study experience (language, country, study modes)
- Display your progress and statistics
- Remember your preferences between app sessions

## 3. Data Storage and Security

- All data is stored **on your device** using the device's local storage (AsyncStorage).
- We do **not** collect, transmit, or store your data on our servers.
- We do **not** use analytics, advertising, or third-party tracking SDKs.
- Your profile photo is stored as a local file reference; the image remains on your device.

## 4. Data Sharing

We do **not** sell, rent, or share your personal information with third parties. Your data stays on your device.

## 5. Data Retention and Deletion

- **Quiz history:** You can delete all quiz history at any time via the profile menu → "Delete All Quiz Data." This permanently removes all stored quiz history from your device.
- **Profile and settings:** To reset your profile (including language, country, and profile photo), use "Change test country" in the profile menu to re-enter onboarding. You can also clear app data via your device settings to remove all stored information.

## 6. Children's Privacy

The App is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will take steps to delete such information.

## 7. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.

## 8. Contact Us

If you have questions about this Privacy Policy or your data, please contact us:

- **Support URL:** [Your support page URL, e.g. https://bettercitizenship.app/support]
- **Email:** [Your support email, e.g. support@bettercitizenship.app]

---

*Better Citizenship is a study tool to help people prepare for citizenship tests. Study official documents from the country you wish to move to and immerse yourself in the local population. Translations are provided by a small team and may not be accurate; we plan to fund professional translation as usage grows.*
