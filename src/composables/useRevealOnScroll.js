import { ref, onMounted, onUnmounted } from 'vue'

export function useRevealOnScroll(threshold = 0.15) {
  const observer = ref(null)

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.value.unobserve(entry.target)
          }
        })
      },
      { threshold },
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.value.observe(el)
    })
  })

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })

  return { observer }
}
