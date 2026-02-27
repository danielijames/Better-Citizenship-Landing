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

## Hero Video

The hero uses a free stock video from [Mixkit](https://mixkit.co/free-stock-video/people-walking-in-airport-tunnel-6752/) (people walking in airport tunnel). For fully commercial use, consider downloading a video from [Pexels](https://www.pexels.com/search/videos/travel/) (CC0 license) and placing it in `public/` as `hero-video.mp4`, then updating the `<source>` in `App.jsx`.

## App Store Links

Replace the placeholder `#` hrefs in `src/App.jsx` with your actual App Store and Google Play URLs when the apps are live:

- `Download on iOS` → App Store link
- `Download on Android` → Google Play link
