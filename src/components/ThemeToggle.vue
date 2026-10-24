<template>
  <button
    type="button"
    @click="toggle"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="isDark ? 'Light mode' : 'Dark mode'"
    class="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-fg">
    <!-- Sun -->
    <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
    </svg>
    <!-- Moon -->
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </button>
</template>

<script>
export default {
  data() {
    return {
      // The initial class is set by the inline script in public/index.html
      isDark: document.documentElement.classList.contains('dark')
    }
  },
  methods: {
    toggle() {
      this.isDark = !this.isDark
      document.documentElement.classList.toggle('dark', this.isDark)
      try {
        localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
      } catch (e) {
        // Storage unavailable (e.g. private mode) — the theme just won't persist
      }
    }
  }
}
</script>
