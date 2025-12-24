<template>
  <section class="about">
    <div class="container">
      <div class="about-content">
        <h2 class="section-title">About Me</h2>

        <p class="lead">
          I’m Noah, a frontend developer based in Nigeria with experience building modern web
          applications using Vue.js, Pinia, and Firebase.
        </p>

        <p>
          I enjoy turning ideas into clean, functional user interfaces and working on projects that
          solve real problems. Before transitioning fully into software development, I worked in
          administrative and remote support roles, which helped me develop strong attention to
          detail, communication skills, and a structured approach to work.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 6rem 0;
  background: var(--bg-color);
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.lead {
  font-size: 1.4rem;
  color: var(--text-primary);
  font-weight: 500;
  margin-bottom: 2rem;
}
</style>
