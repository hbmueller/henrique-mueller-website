# hbmueller.dev

Personal site of Henrique Müller. The homepage is still a placeholder; for now the site is a home for small standalone subpages.

## Subpages

All subpages live under `src/p/<slug>/` and are served at `/p/<slug>/`.

| Page | URL | Notes |
|---|---|---|
| O Pato | [`/p/o-pato/`](https://hbmueller.dev/p/o-pato/) (pt-BR), [`/p/o-pato/en/`](https://hbmueller.dev/p/o-pato/en/) (en-US) | Landing page for the children's book. The URL is printed as a QR code in the book — **never change it**. |

## Development

```bash
pnpm install
pnpm dev     # live-reload server
pnpm build   # production build to docs/
```

## Deploy

Pushing to `main` triggers a GitHub Actions build that publishes `docs/` to the `gh-pages` branch, served by GitHub Pages at `hbmueller.dev`.
