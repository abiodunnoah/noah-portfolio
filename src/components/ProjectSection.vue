<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    title: 'Movie Discovery App',
    description:
      'A movie discovery app that allows users to browse movies, view details, and save favorites using Firebase authentication.',
    tech: ['Vue 3', 'Pinia', 'Firebase', 'API'],
    liveLink: 'https://moviesdiscoveryapp.netlify.app/',
    codeLink: 'https://github.com/abiodunnoah/movie-discovery-app',
    image: '/images/Movie Discovery.png',
  },
  {
    title: 'ShopCo E-commerce',
    description:
      'A modern e-commerce frontend with product listing, cart, checkout flow, and order history.',
    tech: ['Vue 3', 'LocalStorage', 'CSS', 'Pinia', 'Firebase'],
    liveLink: 'https://shopc0-app.netlify.app/',
    codeLink: 'https://github.com/abiodunnoah/Shop.co',
    image: '/images/ShopCo.png',
  },
  {
    title: 'Weather App',
    description:
      'A clean weather app that fetches real-time weather data using a public API with Vue Suspense and watchers.',
    tech: ['Vue 3', 'API', 'Suspense'],
    liveLink: 'https://weatherr-check-app.netlify.app/',
    codeLink: 'https://github.com/abiodunnoah/weather-app',
    image: '/images/Weather App.png',
  },
]
</script>

<template>
  <section class="projects" id="projects">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>

      <div class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 6rem 0;
  background: var(--bg-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}
</style>
