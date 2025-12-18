<template>
  <section class="contact">
    <h2 class="section-title">Contact</h2>

    <p>Interested in working together or have a project in mind? Feel free to reach out.</p>

    <div class="contact-links">
      <a href="mailto:ajaoolasco@gmail.com" class="btn primary">Email Me</a>
      <a href="https://github.com/abiodunnoah" target="_blank" class="btn secondary">GitHub</a>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 4rem 2rem;
  max-width: 900px;
  margin: auto;
  text-align: center;
}

.contact-links {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

p {
  color: var(--muted-text);
  max-width: 600px;
  margin: auto;
}
</style>
