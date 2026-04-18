# astro-avlindfors-portfolio

Personal portfolio and resume site built with [Astro](https://astro.build), React, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Script                 | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start local dev server           |
| `npm run build`        | Build for production             |
| `npm run preview`      | Preview production build         |
| `npm run check`        | Format and lint                  |
| `npm run docker:build` | Build Docker image               |
| `npm run docker:up`    | Build and run Docker container   |
| `npm run docker:down`  | Stop and remove Docker container |

## Server setup

### Nginx

The `nginx.conf` in the repo root is the reverse proxy config for the VPS. This is a one-time setup — run the following on the VPS:

```bash
sudo nano /etc/nginx/sites-available/avlindfors.com
# Paste the contents of nginx.conf from the repo root, then save and exit
sudo ln -s /etc/nginx/sites-available/avlindfors.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d avlindfors.com -d www.avlindfors.com
```

Certbot will issue the SSL certificate and update the config with the relevant paths. After this, the site is served at `https://avlindfors.com` and `https://www.avlindfors.com`, with HTTP traffic redirected to HTTPS automatically.

### Resume redirect

`nginx-resume-redirect.conf` redirects `resume.avlindfors.com` to `www.avlindfors.com/resume` to keep existing links alive:

```bash
sudo nano /etc/nginx/sites-available/resume.avlindfors.com
# Paste the contents of nginx-resume-redirect.conf from the repo root, then save and exit
sudo ln -s /etc/nginx/sites-available/resume.avlindfors.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```
