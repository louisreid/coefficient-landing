# Coefficient landing page

Enterprise-credible landing page for Coefficient — a real-time AI copilot for verifying physical work (HVAC maintenance, digital infrastructure, safety-critical physical work).

Styling and branding are based on the reference site: [panicky-emerald-dormouse.host.loki.build](https://panicky-emerald-dormouse.host.loki.build/).

## Run locally

No build step. Open the site with any static server or by opening the HTML file:

- **Option A:** Open `index.html` directly in a browser (some features may behave differently without a server).
- **Option B:** From the project root, run a simple HTTP server:
  - Python 3: `python3 -m http.server 8000` then visit http://localhost:8000
  - Node (npx): `npx serve .` then visit the URL shown
  - VS Code: use the “Live Server” extension and “Open with Live Server” on `index.html`

## Deploy

The project is static (HTML, CSS, JS). Deploy the repo as-is to any static host:

- **Netlify:** Drag the folder to [app.netlify.com/drop](https://app.netlify.com/drop), or connect the repo and use build command blank, publish directory `.`
- **Vercel:** Connect the repo; set “Output Directory” to `.` or leave default if it detects a static site
- **Cloudflare Pages:** Connect the repo; build command none, build output directory `.`

## Primary CTA

All “Register your interest” buttons and links point to: [https://tally.so/r/WO5oMk](https://tally.so/r/WO5oMk).

## Structure

- `index.html` — Single-page structure: hero, how it works, why this matters, positioning, coming soon, trust, final CTA, footer
- `styles.css` — Design tokens (CSS variables), layout, and component styles
- `script.js` — Minimal behaviour (smooth scroll for in-page anchors)
