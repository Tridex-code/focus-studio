# Focus Studio

Focus Studio is a static Next.js site with no database and no backend API.

## What this project is

- Static export only
- No server-side data fetching
- No database
- No API routes
- Ready for static hosting such as Netlify, Vercel Static, GitHub Pages, or Cloudflare Pages

## Local preview

You can preview the site locally in two ways:

### Development mode

```bash
npm run dev
```

Open http://localhost:3000

### Static preview

```bash
npm run build
npx serve out -l 4173
```

Open http://localhost:4173

## Deploying as a static site

After building, upload the contents of the `out` folder to your static host.

## Edit the site

The homepage lives in `src/app/page.tsx` and the shared site settings live in `src/lib/siteConfig.ts`.

## Notes

- There is no database in this project.
- There are no server routes to configure.
- If you only want the live static files, use the `out` folder.
