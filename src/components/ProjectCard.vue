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
    <img :src="image" :alt="title" />

    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>

      <ul class="tech-list">
        <li v-for="item in tech" :key="item">{{ item }}</li>
      </ul>

      <div class="links">
        <a :href="liveLink" target="_blank" class="btn primary">Live Demo</a>
        <a :href="codeLink" target="_blank" class="btn secondary">View Code</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.project-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.content {
  padding: 1.5rem;
}

h3 {
  margin-bottom: 0.5rem;
}

p {
  color: var(--muted-text);
  font-size: 0.95rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
  padding: 0;
  list-style: none;
}

.tech-list li {
  border: 1px solid var(--border-color);
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.75rem;
}

.links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.85rem;
}

.primary {
  background: var(--accent);
  color: white;
}

.secondary {
  border: 1px solid var(--accent);
  color: var(--accent);
}
</style>
