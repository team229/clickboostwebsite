# ClickBoost Media

AI-powered digital marketing website built with Tailwind CSS v4.

## Tech Stack

- **Tailwind CSS v4** – utility-first CSS framework
- **Vanilla HTML** – no JavaScript framework
- **Netlify** – deployment & hosting

## Getting Started

```bash
npm install
npm run dev       # watch mode for CSS
npm run build     # production build to out/
```

## Project Structure

```
├── index.html              # Home page
├── about.html              # About us
├── services.html           # Services overview
├── contact.html            # Contact page
├── service-*.html          # Individual service pages
├── input.css               # Tailwind CSS entry point
├── tailwind.config.js      # Theme configuration
├── netlify.toml            # Netlify deploy settings
└── out/                    # Build output (gitignored)
```

## Build

```bash
npm run build
```

Output goes to `out/`:
- Compiled & minified `styles.css`
- All HTML files copied

## Deployment

**Netlify** (auto-deploy from GitHub):

1. Push to `main` branch
2. Connect repo on [Netlify](https://app.netlify.com)
3. Build: `npm run build`
4. Publish: `out/`

**Manual** (any S3-compatible host):

```bash
./deploy.sh <bucket-name>
```
