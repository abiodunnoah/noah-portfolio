# Personal Portfolio Website

A modern, responsive personal portfolio website built with **Vue 3** and **pure CSS**, showcasing my skills, projects, and contact information.

## 🚀 Live Demo

👉 https://noahportfolioo.netlify.app/

## 🛠️ Built With

- Vue 3 (Composition API)
- Pure CSS (Dark Theme)
- Component-based architecture

## Features

- Clean and modern dark UI
- Reusable Vue components
- Projects displayed using data-driven `v-for` rendering
- Smooth scrolling navigation
- Fully responsive layout

## 🛠️ Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Script Setup + Composition API)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Custom CSS3 (Variables, Grid, Flexbox)
- **State Management**: Local component state (Ref/Reactive)

## 📂 Project Structure

```bash
src/
├── assets/          # Static assets (CSS, Images)
├── components/      # Vue components
│   ├── AboutSection.vue
│   ├── ContactSection.vue
│   ├── HeroSection.vue
│   ├── ProjectCard.vue
│   ├── ProjectSection.vue
│   └── SkillsSection.vue
├── App.vue          # Main application component
└── main.js          # Entry point
```

## 💻 Project Setup

1. **Install dependencies**:

   ```sh
   npm install
   ```

2. **Run development server**:

   ```sh
   npm run dev
   ```

3. **Build for production**:
   ```sh
   npm run build
   ```

## 📝 Customization

- **Projects**: Edit `src/components/ProjectSection.vue` to update the projects list.
- **Styles**: Global styles are in `src/assets/main.css`.
- **Images**: Place project images in the `public/images/` directory.

---

© 2025 Noah. All rights reserved.
