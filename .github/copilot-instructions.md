# Copilot Instructions for noah-portfolio

## Project Overview

This is a **Vue 3 + Vite portfolio application**. It's a minimal starter template for a personal portfolio website built with modern tooling. The project is early-stage with only root-level components (`App.vue`) currently implemented.

**Tech Stack:**

- **Vue 3** (via Composition API / `<script setup>` syntax)
- **Vite** as the build tool and dev server
- **ESLint + Prettier** for code quality and formatting
- **Node.js** 20.19.0+ or 22.12.0+

## Architecture & Key Files

### File Structure

```
src/
  ├── App.vue       # Root component (portfolio template)
  └── main.js       # Vue app initialization
index.html          # HTML entry point with #app mount target
vite.config.js      # Build and alias configuration (@: src)
```

### Core Concepts

- **Single Entry Point**: Vue app mounts to `<div id="app">` in `index.html`
- **Path Alias**: Use `@/` to reference `src/` directory (configured in `vite.config.js`)
- **Composition API**: Project uses `<script setup>` syntax (modern Vue 3 pattern)

## Development Workflows

### Local Development

```bash
npm install        # Install dependencies
npm run dev        # Start Vite dev server (hot reload enabled)
```

### Build & Deployment

```bash
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
```

### Code Quality

```bash
npm run lint       # ESLint with auto-fix and cache
npm run format     # Prettier formatting for src/
```

## Project Conventions & Patterns

### Vue Component Structure

- Use **SFC (Single File Component)** format (`.vue` files)
- Prefer `<script setup>` for component logic
- Place scoped styles in `<style scoped>` block
- Example from `App.vue`:
  ```vue
  <script setup></script>
  <template><!-- markup --></template>
  <style scoped></style>
  ```

### ESLint & Code Style

- **Flat config** (ESLint 9.x) in `eslint.config.js`
- Lints: `.js`, `.mjs`, `.jsx`, `.vue` files
- Ignores: `dist/`, `dist-ssr/`, `coverage/`
- **Prettier integration**: ESLint skips formatting checks (Prettier handles it)
- Run `npm run lint` before commits

### Naming & File Organization

- No established subdirectories yet (growth area)
- Keep components in `src/` root or create folders for features as portfolio grows

## Integration Points & Dependencies

### External Tools

- **Vue DevTools**: Install browser extension for debugging (Chromium or Firefox)
- **VS Code**: Recommended IDE; use "Vue (Official)" extension (not Vetur)

### Build Configuration

- **Vite Plugins**:
  - `@vitejs/plugin-vue`: Vue 3 SFC compilation
  - `vite-plugin-vue-devtools`: Vue debugging support
- **Module Type**: `"type": "module"` in `package.json` (ES modules)

## Common Tasks & Patterns

### Adding a New Component

1. Create `.vue` file in `src/` (or subdirectory)
2. Use `<script setup>` syntax
3. Apply path alias: `import Something from '@/components/...'`
4. Run `npm run lint` to validate

### Styling

- **Scoped styles only** (prevent global conflicts)
- No CSS framework currently; add via npm if needed

### Debugging

- Use **Vue DevTools** browser extension for component inspection
- Vite dev server logs to terminal; check for build errors

## Git & Environment

- **Node Version**: `^20.19.0 || >=22.12.0` (check with `node --version`)
- **Package Manager**: npm (lock file: `package-lock.json`)
- **.gitignore**: Standard (check if present; typically ignores `node_modules/`, `dist/`)

## Next Steps for Growth

- Consider organizing components into `src/components/` as portfolio grows
- Add layout/page components when multi-page routing is needed
- Establish shared utilities folder (`src/utils/`) for helper functions
- Configure environment variables if needed (`.env`, `.env.local`)
