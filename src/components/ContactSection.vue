<script setup>
import { ref } from 'vue'

const submitted = ref(false)
const error = ref('')

const handleSubmit = async (e) => {
  error.value = ''
  const form = e.target
  const data = new FormData(form)

  try {
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
    if (res.ok) {
      submitted.value = true
    } else {
      error.value = 'Something went wrong. Try again later.'
    }
  } catch {
    error.value = 'Something went wrong. Try again later.'
  }
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="contact-content">
        <h2 class="section-title reveal">Get In Touch</h2>

        <p class="contact-message reveal reveal-delay-1">
          I'm currently open to new opportunities. Whether you have a question or just want to say
          hi, I'll try my best to get back to you!
        </p>

        <div class="contact-info reveal reveal-delay-2">
          <div class="contact-item">
            <div class="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div class="details">
              <h3>Email</h3>
              <a href="mailto:ajaoolasco@gmail.com">ajaoolasco@gmail.com</a>
            </div>
          </div>

          <div class="contact-item">
            <div class="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
            </div>
            <div class="details">
              <h3>Phone</h3>
              <a href="tel:+2349036013474">+234 903 601 3474</a>
            </div>
          </div>

          <div class="contact-item">
            <div class="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div class="details">
              <h3>Location</h3>
              <span>Ibadan, Nigeria</span>
            </div>
          </div>

          <div class="contact-item">
            <div class="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div class="details">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/abiodun-ajao-14644326a" target="_blank"
                >View Profile</a
              >
            </div>
          </div>
        </div>

        <!-- Netlify contact form -->
        <form
          v-if="!submitted"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="contact-form reveal reveal-delay-3"
          @submit.prevent="handleSubmit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
          </p>

          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" name="name" type="text" required placeholder="Your name" />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="What's on your mind?"
            ></textarea>
          </div>

          <button type="submit" class="btn primary submit-btn">Send Message</button>
          <p v-if="error" class="form-error">{{ error }}</p>
        </form>

        <p v-else class="thanks reveal">Thanks for reaching out! I'll get back to you soon.</p>

        <div class="contact-links reveal">
          <a href="mailto:ajaoolasco@gmail.com" class="btn primary">Send an Email</a>
          <a href="https://github.com/abiodunnoah" target="_blank" class="btn secondary"
            >GitHub Profile</a
          >
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
  max-width: 800px;
  margin: 0 auto;
}

.contact-message {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 6rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* ─── Contact Info Grid ─── */
.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  text-align: left;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
}

.icon-box {
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  padding: 0.8rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.details h3 {
  font-family: var(--font-heading);
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.details a,
.details span {
  color: var(--text-primary);
  font-weight: 500;
  font-size: 1rem;
}

.details a:hover {
  color: var(--primary);
}

/* ─── Contact Form ─── */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 3rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.form-group input,
.form-group textarea {
  padding: 0.8rem 1rem;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--primary);
  outline: none;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-secondary);
  opacity: 0.6;
}

.form-error {
  color: #f87171;
  font-size: 0.9rem;
}

.thanks {
  font-size: 1.3rem;
  color: var(--text-accent);
  margin: 3rem 0;
}

.submit-btn {
  align-self: flex-start;
}

/* ─── Bottom links ─── */
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

@media (max-width: 768px) {
  .contact-info {
    grid-template-columns: 1fr;
  }

  .contact-links {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .submit-btn {
    align-self: stretch;
    text-align: center;
  }
}
</style>
