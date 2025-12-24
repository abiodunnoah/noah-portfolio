<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="section-title">Skills & Tech</h2>

      <div class="skills-grid">
        <div class="skills-category">
          <h3>Frontend</h3>
          <div class="skill-tags">
            <span class="skill-tag">Vue 3</span>
            <span class="skill-tag">Pinia</span>
            <span class="skill-tag">Vue Router</span>
            <span class="skill-tag">JavaScript (ES6+)</span>
            <span class="skill-tag">HTML5 & CSS3</span>
            <span class="skill-tag">Tailwind CSS</span>
          </div>
        </div>

        <div class="skills-category">
          <h3>Backend & Tools</h3>
          <div class="skill-tags">
            <span class="skill-tag">Firebase Auth</span>
            <span class="skill-tag">Firestore</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">Git & GitHub</span>
            <span class="skill-tag">REST APIs</span>
          </div>
        </div>

        <div class="skills-category">
          <h3>Workflow</h3>
          <div class="skill-tags">
            <span class="skill-tag">Responsive Design</span>
            <span class="skill-tag">Component Architecture</span>
            <span class="skill-tag">Agile/Scrum</span>
            <span class="skill-tag">Debugging</span>
            <span class="skill-tag">VS Code</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 6rem 0;
  background: var(--bg-color);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skills-category {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 2rem;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}

.skills-category:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
}

.skills-category h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-accent);
  border-bottom: 2px solid var(--card-border);
  padding-bottom: 0.5rem;
  display: inline-block;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  background: rgba(99, 102, 241, 0.1);
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: var(--primary);
  color: white;
  transform: scale(1.05);
}
</style>
