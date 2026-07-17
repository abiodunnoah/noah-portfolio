<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import { useRevealOnScroll } from './composables/useRevealOnScroll'

useRevealOnScroll()

const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > window.innerHeight * 0.6
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <hr class="section-divider" />
    <SkillsSection />
    <hr class="section-divider" />
    <ProjectSection />
    <hr class="section-divider" />
    <AboutSection />
    <hr class="section-divider" />
    <ContactSection />
  </main>
  <FooterSection />

  <button v-if="showBackToTop" class="back-to-top" @click="scrollToTop" aria-label="Back to top">
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  </button>
</template>

<style>
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
  transition:
    background 0.3s ease,
    transform 0.3s ease,
    opacity 0.3s ease;
  z-index: 999;
  animation: backIn 0.35s ease-out;
}

.back-to-top:hover {
  background: var(--primary-hover);
  transform: translateY(-3px);
}

@keyframes backIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .back-to-top {
    bottom: 1rem;
    right: 1rem;
    width: 38px;
    height: 38px;
  }
}
</style>
