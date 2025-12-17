<script setup>
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectSection from './components/ProjectSection.vue'
</script>

<template>
  <main>
    <HeroSection />
    <SkillsSection />
    <ProjectSection />
  </main>
</template>

<style scoped>
body {
  margin: 0;
  font-family:
    Avenir,
    Helvetica,
    Arial,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
