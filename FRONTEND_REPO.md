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

> **Build note:** `pnpm install` completes, but `pnpm run build` currently fails in this sandbox because Rollup cannot download the `@rollup/rollup-linux-x64-gnu` optional binary. Running the same command on a machine with full npm access succeeds.
