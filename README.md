# Kalash Bijukchhe - Platform Lab Portfolio

Portfolio for Kalash Bijukchhe, an aspiring Junior DevOps / Cloud / Platform Engineer based in Sydney, Australia.

Live site target: `https://kalashbijukchhe.com`

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

## Local Development

```bash
npm install
npm run dev
```

## Verification

Run the same checks before deploying:

```bash
npm run typecheck
npm run lint
npm run build
```

No environment variables are required.

## Vercel Deployment

Recommended settings:

- Framework preset: Next.js
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: leave as Vercel default
- Node.js version: 20 or newer

## Netlify Deployment

`netlify.toml` is included for a Next.js build:

- Build command: `npm run build`
- Publish directory: `.next`
- Node.js version: 20
- Next.js runtime plugin: `@netlify/plugin-nextjs`

## Content

Project and skill content lives in `data/projects.ts` and `data/skills.ts`.
