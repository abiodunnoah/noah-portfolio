<script setup>
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <main>
    <HeroSection />
    <SkillsSection />
    <ProjectSection />
    <AboutSection />
    <ContactSection />
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
