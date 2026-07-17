# noah-portfolio

Vue 3 + Vite single-page portfolio. No router, no store, no tests.

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Dev server (hot reload) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint flat config (auto-fix + cache) |
| `npm run format` | Prettier on `src/` (`--experimental-cli`) |

Run `lint` then `format` before committing.

## Architecture

`index.html` → `src/main.js` → `src/App.vue`

Components in `src/components/`: `NavBar`, `HeroSection`, `SkillsSection`, `ProjectSection` (+ `ProjectCard`), `AboutSection`, `ContactSection`

- `@/` alias → `src/` (configured in `vite.config.js` + `jsconfig.json`)
- Plain JS, no TypeScript
- Projects data-driven in `ProjectSection.vue` — edit the array to update
- Scoped CSS per component, CSS custom properties in `src/assets/main.css` (dark theme)
- No CI, no pre-commit hooks

## Conventions

- `<script setup>` syntax in `.vue` SFCs
- Scoped `<style scoped>`, kebab-case class names
- ESLint 9 flat config: lints `*.js`, `*.mjs`, `*.jsx`, `*.vue`; ignores `dist/`, `dist-ssr/`, `coverage/`
- Prettier: no semicolons, single quotes, printWidth 100, 2-space indent
- EditorConfig: LF line endings, UTF-8, trailing newline, trim trailing whitespace

## Public directory

`public/` contains favicons, webmanifest, CV PDF (`Ajao Abiodun N. - CV.pdf`), project images (`public/images/`), and `about.txt` (content source for AboutSection).

## Deploy

Netlify — see README for live URL.
