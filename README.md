# Personal Portfolio Website

A modern, responsive portfolio built with **Vue 3** and **pure CSS** — showcasing skills, projects, and contact info.

## Live Demo

👉 https://noahportfolioo.netlify.app/

## Built With

- Vue 3 (Composition API, `<script setup>`)
- Pure CSS (custom properties, dark theme, Grid/Flexbox)
- Intersection Observer for scroll-triggered reveals
- Netlify Forms for the contact form

## Features

- Clean dark UI with subtle grain texture
- Scroll-triggered reveal animations (no library)
- Data-driven project cards (`v-for`)
- Smooth-scroll navigation with underline hover
- Mobile hamburger menu with animated toggle
- Back-to-top button that appears on scroll
- Netlify contact form (name, email, message)
- Responsive at all breakpoints
- Semantic HTML with ARIA labels and focus-visible rings

## Project Structure

```
src/
├── assets/
│   └── main.css              # global styles, CSS custom properties
├── components/
│   ├── NavBar.vue             # fixed nav + mobile hamburger menu
│   ├── HeroSection.vue        # hero with CTA buttons
│   ├── SkillsSection.vue      # skills grid (3 categories)
│   ├── ProjectSection.vue     # data-driven project listing
│   ├── ProjectCard.vue        # reusable project card
│   ├── AboutSection.vue       # personal bio
│   ├── ContactSection.vue     # contact info + Netlify form
│   └── FooterSection.vue      # social links + copyright
├── composables/
│   └── useRevealOnScroll.js   # Intersection Observer wrapper
├── App.vue                    # root — wires sections, back-to-top
└── main.js                    # entry point
```

## Getting Started

```sh
npm install
npm run dev      # dev server (hot reload)
npm run build    # production build → dist/
npm run preview  # preview production build
npm run lint     # ESLint flat config (fix + cache)
npm run format   # Prettier on src/
```

## Customization

- **Projects**: edit the array in `src/components/ProjectSection.vue`
- **About text**: edit `src/components/AboutSection.vue` or `public/about.txt`
- **Styles**: global tokens in `src/assets/main.css`, scoped styles per component
- **Images**: place project screenshots in `public/images/`
- **Resume PDF**: replace `public/Ajao Abiodun N. - Resume.pdf`

---

&copy; 2026 Noah. All rights reserved.
