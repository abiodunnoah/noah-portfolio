<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="contact-content">
        <h2 class="section-title">Get In Touch</h2>
        <p>
          I'm currently open to new opportunities. Whether you have a question or just want to say
          hi, I'll try my best to get back to you!
        </p>

        <div class="contact-links">
          <a href="mailto:ajaoolasco@gmail.com" class="btn primary"> Say Hello </a>
          <a href="https://github.com/abiodunnoah" target="_blank" class="btn secondary">
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 8rem 0;
  text-align: center;
  background: var(--bg-color);
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
}

p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.btn.primary {
  background: var(--primary);
  color: white;
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

.btn.primary:hover {
  background: var(--primary-hover);
}

.btn.secondary {
  border: 1px solid var(--text-secondary);
  color: var(--text-primary);
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

.btn.secondary:hover {
  border-color: var(--primary);
  color: var(--primary);
}
</style>
