<template>
  <section class="skills">
    <h2 class="section-title">Skills</h2>

    <div class="skills-grid">
      <div class="skills-card">
        <h3>Frontend</h3>

        <ul>
          <li>Vue 3 (Composition API)</li>
          <li>Pinia</li>
          <li>Vue Router</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML/CSS</li>
        </ul>
      </div>

      <div class="skill-card">
        <h3>Tools</h3>

        <ul>
          <li>Firebase Authentication</li>
          <li>firestore</li>
          <li>LocalStorage</li>
          <li>API Integration</li>
        </ul>
      </div>

      <div class="skill-card">
        <h3>workflow</h3>

        <ul>
          <li>Git & GitHub</li>
          <li>Responsive Design</li>
          <li>component Architecture</li>
          <li>Debugging</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 1.5rem;
}

.skill-card h3 {
  margin-bottom: 1rem;
  color: var(--accent);
}

.skill-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-card li {
  margin-bottom: 0.5rem;
  color: var(--muted-text);
}
</style>
