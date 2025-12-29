<script setup></script>

<template>
  <section id="hero" class="hero">
    <div class="hero-content">
      <h1>Hi, I'm <span class="gradient-text">Noah</span> 👋</h1>
      <h2>Frontend Developer</h2>

      <p>
        I build fast, modern, and user-friendly web applications using Vue 3, Pinia, and Firebase.
        Crafting digital experiences with pixel-perfect precision.
      </p>

      <div class="buttons">
        <a href="#projects" class="btn primary">View Projects</a>
        <a href="/Ajao Abiodun N. - Resume.pdf" class="btn secondary" target="_blank"
          >Download CV</a
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 4rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  animation: fadeIn 1.5s ease-out;
}

h1 {
  font-family: var(--font-heading);
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.gradient-text {
  background: var(--primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

h2 {
  font-family: var(--font-body);
  font-size: 1.5rem;
  color: var(--text-accent);
  margin-bottom: 2rem;
  font-weight: 500;
}

p {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 3rem;
}

.buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.btn.primary {
  background: var(--primary);
  color: white;
  box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.4);
}

.btn.primary:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.5);
}

.btn.secondary {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}

.btn.secondary:hover {
  background: rgba(99, 102, 241, 0.1);
  transform: translateY(-2px);
}

@keyframes fadeIn {
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
  h1 {
    font-size: 2.5rem;
  }

  .buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  .btn {
    width: 100%;
    max-width: 300px;
    text-align: center;
  }
}
</style>
