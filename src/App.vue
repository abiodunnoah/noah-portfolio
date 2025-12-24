<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <SkillsSection />
    <ProjectSection />
    <AboutSection />
    <ContactSection />
  </main>
</template>

<style scoped>
/* Scoped styles if any specific to App.vue container */
</style>
