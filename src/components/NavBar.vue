<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="container nav-content">
      <div class="logo">
        <span class="logo-text">Noah.dev</span>
      </div>

      <ul class="nav-links">
        <li><a href="#hero" @click.prevent="scrollToSection('hero')">Home</a></li>
        <li><a href="#skills" @click.prevent="scrollToSection('skills')">Skills</a></li>
        <li><a href="#projects" @click.prevent="scrollToSection('projects')">Projects</a></li>
        <li><a href="#contact" @click.prevent="scrollToSection('contact')">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  z-index: 1000;
  transition: all 0.3s ease;
  background: transparent;
  display: flex;
  align-items: center;
}

.navbar.scrolled {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  font-weight: 500;
  color: var(--text-secondary);
  font-size: 0.95rem;
  position: relative;
}

.nav-links a:hover {
  color: var(--text-primary);
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: var(--primary);
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .nav-links {
    display: none; /* Mobile menu implementation can be added later */
  }
}
</style>
