<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-content">
        <h2 class="section-title reveal">About Me</h2>

        <p class="lead reveal reveal-delay-1">
          I'm Noah — a frontend developer based in Ibadan, Nigeria, with a thing for clean
          interfaces and Vue 3. I build stuff that actually works.
        </p>

        <p class="reveal reveal-delay-2">
          Before I got into development, I worked admin and remote support roles. Those taught me
          how to communicate clearly, pay attention to the small stuff, and stay organized when
          things get messy — skills that carry right over into writing components and wrangling
          Firebase.
        </p>

        <p class="reveal reveal-delay-3">
          Outside of coding, I'm probably reading about design systems, trying to improve my typing
          speed, or finding a new genre of music to fixate on for the month.
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
