<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const scrollToSection = (id) => {
  closeMenu()
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const onKeydown = (e) => {
  if (e.key === 'Escape' && isMenuOpen.value) closeMenu()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="container nav-content">
      <span class="logo-text">Ajao Noah</span>

      <button
        class="hamburger"
        :class="{ open: isMenuOpen }"
        @click="toggleMenu"
        aria-label="Toggle navigation"
        aria-expanded="isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-links" :class="{ open: isMenuOpen }">
        <li><a href="#hero" @click.prevent="scrollToSection('hero')">Home</a></li>
        <li><a href="#skills" @click.prevent="scrollToSection('skills')">Skills</a></li>
        <li><a href="#projects" @click.prevent="scrollToSection('projects')">Projects</a></li>
        <li><a href="#about" @click.prevent="scrollToSection('about')">About</a></li>
        <li><a href="#contact" @click.prevent="scrollToSection('contact')">Contact</a></li>
      </ul>
    </div>

    <div v-if="isMenuOpen" class="backdrop" @click="closeMenu" @keydown="closeMenu"></div>
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
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  cursor: default;
}

/* ─── Desktop nav ─── */
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

/* ─── Hamburger ─── */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
  padding: 0;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2.5px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
}

/* ─── Mobile menu ─── */
.backdrop {
  display: none;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    width: 260px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    background: var(--card-bg);
    border-left: 1px solid var(--card-border);
    transform: translateX(100%);
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 1050;
  }

  .nav-links.open {
    transform: translateX(0);
  }

  .nav-links a {
    font-size: 1.2rem;
  }

  .backdrop {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1040;
  }
}
</style>
