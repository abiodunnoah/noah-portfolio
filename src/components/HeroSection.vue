<script setup></script>

<template>
  <section class="hero">
    <h1>Hi, I'm Noah 👋</h1>
    <h2>Frontend Developer (Vue.js & Firebase)</h2>

    <p>
      I build fast, modern, and user-friendly web applications. using Vue 3, Pinia and Firebase.
    </p>

    <div class="buttons">
      <a href="#projects" class="btn primary">View Projects</a>
      <a href="/cv.pdf" class="btn secondary" target="_blank">Downloaad CV</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.5rem;
  color: var(--accent);
  margin-bottom: 1.5rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
}

.buttons {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
}

.primary {
  background: #3b82f6;
  color: white;
}

.secondary {
  border: 2px solid #3b82f6;
  color: #3b82f6;
}
</style>
