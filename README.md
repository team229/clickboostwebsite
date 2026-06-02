# ClickBoost Media

AI-powered digital marketing website built with **React + Vite + Tailwind CSS v4**.

## Tech Stack

- **React 19** – UI framework
- **React Router 7** – client-side routing
- **Tailwind CSS v4** – utility-first CSS
- **Vite 6** – build tool
- **Netlify** – hosting & deployment

## Getting Started

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build to out/
npm run preview   # preview production build
```

## Project Structure

```
src/
├── components/
│   ├── Layout.jsx       # Navbar + Footer wrapper
│   ├── Navbar.jsx       # Navigation (mobile + desktop)
│   └── Footer.jsx       # Footer with links
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Services.jsx
│   ├── ServiceSEO.jsx
│   ├── ServiceLocalSEO.jsx
│   ├── ServicePPC.jsx
│   ├── ServiceSocialMedia.jsx
│   ├── ServiceContent.jsx
│   ├── ServiceEmail.jsx
│   └── ServiceWebDesign.jsx
├── App.jsx              # Route definitions
├── main.jsx             # Entry point
└── index.css            # Tailwind entry + theme

public/
└── _redirects           # Netlify SPA fallback rule

netlify.toml             # Netlify deploy config
vite.config.js           # Vite + Tailwind plugin
```

## Build

```bash
npm run build
```

Output goes to `out/`:
- `index.html` – single HTML entry (SPA)
- `assets/` – hashed JS & CSS bundles

## Deployment

**Netlify** (auto-deploy from GitHub):

1. Push to `main` branch
2. Connect repo on [Netlify](https://app.netlify.com)
3. Build: `npm run build`
4. Publish: `out/`

All routes fall back to `index.html` via `_redirects` (handled automatically by Netlify).
