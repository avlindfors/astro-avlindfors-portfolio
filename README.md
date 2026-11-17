# astro-avlindfors-portfolio

Personal portfolio and resume site built with [Astro](https://astro.build), React, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start local dev server   |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run check`   | Format and lint          |

## Deployment

The site is fully static and hosted on [GitHub Pages](https://pages.github.com) at [avlindfors.com](https://avlindfors.com).

Every push to `main` runs [`.github/workflows/pages.yml`](.github/workflows/pages.yml), which builds the site and publishes `dist/` to Pages. It can also be run manually from the Actions tab.

- **Custom domain** is set in the repo under Settings → Pages.
- **DNS** (Cloudflare, DNS only / not proxied): the apex `A` records point to GitHub Pages' IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`), and `www` is a `CNAME` to `avlindfors.github.io`.
- **HTTPS** certificates are issued and renewed by GitHub automatically.
- **The resume PDF** lives in `public/` and is served as-is at `/Alexander_Lindfors_Fullstack_Developer_Resume.pdf`.
