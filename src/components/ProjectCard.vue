<script setup>
defineProps({
  title: String,
  description: String,
  tech: Array,
  liveLink: String,
  codeLink: String,
  image: String,
})
</script>

<template>
  <div class="project-card">
    <div class="image-wrapper">
      <img :src="image" :alt="title" loading="lazy" />
      <div class="overlay">
        <div class="links">
          <a :href="liveLink" target="_blank" class="btn primary" v-if="liveLink">Live Demo</a>
          <a :href="codeLink" target="_blank" class="btn secondary" v-if="codeLink">View Code</a>
        </div>
      </div>
    </div>

    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>

      <div class="tech-list">
        <span v-for="item in tech" :key="item" class="tech-tag">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  border-color: var(--primary);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  height: 220px;
}

.project-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .overlay {
  opacity: 1;
}

.content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

p {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-accent);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: var(--font-body);
}

.links {
  display: flex;
  gap: 1rem;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.project-card:hover .links {
  transform: translateY(0);
}

.btn.primary {
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
}

.btn.secondary {
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  background: white;
  color: var(--bg-color);
  border: none;
}

.btn.secondary:hover {
  background: var(--text-secondary);
}
</style>
