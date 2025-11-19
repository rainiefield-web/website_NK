# Standalone frontend repository

A dedicated frontend-only repository now lives at `../nasr-kabeer-frontend` (relative to this monorepo). It contains the React/Vite client, shared constants, build tooling, and a clean git history that you can push to `https://github.com/rainiefield-web/nasr-kabeer-frontend`.

## What was done
- copied `client/`, `shared/`, `components.json`, `tsconfig*.json`, `vite.config.ts`, `patches/`, and `pnpm-lock.yaml`
- trimmed `package.json` scripts and dependencies so only the frontend build remains
- added repo housekeeping files (`README.md`, `.gitignore`)
- initialized git, set the `origin` remote, and created the `main` branch with the initial commit `feat: bootstrap standalone frontend`

## Next steps
1. Inspect the new repository: `cd ../nasr-kabeer-frontend`
2. Update any environment variables in `client/index.html` or add a `.env` file as needed.
3. Push it to GitHub once you have credentials: `git push -u origin main`
4. Deploy the repo anywhere Vite static builds can be hosted.

## Previewing the deployed build locally

You can reproduce the production bundle and inspect it with Vite's preview server:

1. `pnpm install`
2. `pnpm approve-builds` &mdash; select `@tailwindcss/oxide` and `esbuild` so their postinstall steps run (pnpm 9+ requires explicit approval).
3. `pnpm run build`
4. `pnpm run preview -- --host 0.0.0.0 --port 4173`

Step 4 spins up `vite preview`, which serves the static `dist/` output exactly as it would look once deployed to any static host. Visit the printed URL (for example `http://localhost:4173`) to confirm UI and interactions before pushing to production.
