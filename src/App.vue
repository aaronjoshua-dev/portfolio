<template>
  <div class="relative flex min-h-screen flex-col">
    <!-- Fixed to the viewport so the pattern stays put while scrolling -->
    <div class="dot-grid dot-grid-tr pointer-events-none fixed right-0 top-0 -z-10 h-[32rem] w-full max-w-3xl" aria-hidden="true"></div>
    <div class="dot-grid dot-grid-bl pointer-events-none fixed bottom-0 left-0 -z-10 h-[32rem] w-full max-w-3xl" aria-hidden="true"></div>

    <header class="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div class="mx-auto flex h-16 max-w-2xl items-center justify-between gap-4 px-4 sm:px-6">
        <router-link to="/" class="font-mono text-sm text-fg">{{ profile.shortName }}</router-link>

        <div class="flex items-center gap-2 sm:gap-4">
          <nav class="flex items-center gap-3 font-mono text-xs sm:gap-6">
            <router-link v-for="link in links" :key="link.to" :to="link.to" class="nav-link">
              {{ link.label }}
            </router-link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>

    <main class="relative mx-auto w-full max-w-2xl flex-1 px-4 py-16 sm:px-6 sm:py-24">
      <router-view />
    </main>

    <footer class="border-t border-line">
      <div class="mx-auto flex max-w-2xl flex-col gap-2 px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>&copy; {{ year }} {{ profile.name }}</p>
        <div class="flex gap-5">
          <a :href="profile.github" target="_blank" rel="noreferrer" class="transition-colors hover:text-fg">GitHub</a>
          <a :href="profile.linkedin" target="_blank" rel="noreferrer" class="transition-colors hover:text-fg">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import ThemeToggle from './components/ThemeToggle.vue'
import { profile } from './data/profile'

export default {
  components: { ThemeToggle },
  data() {
    return {
      profile,
      year: new Date().getFullYear(),
      links: [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/portfolio', label: 'Projects' },
        { to: '/contact', label: 'Contact' }
      ]
    }
  }
}
</script>

<style>
/* Theme tokens (RGB channels so Tailwind opacity modifiers work, e.g. bg-canvas/80) */
:root {
  --canvas: 255 255 255;
  --surface: 244 244 245;
  --fg: 24 24 27;
  --muted: 113 113 122;
  --line: 228 228 231;
  color-scheme: light;
}

.dark {
  --canvas: 10 10 11;
  --surface: 24 24 27;
  --fg: 244 244 245;
  --muted: 161 161 170;
  --line: 39 39 42;
  color-scheme: dark;
}

body {
  background-color: rgb(var(--canvas));
  color: rgb(var(--fg));
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color 0.2s ease, color 0.2s ease;
}

/* Faint dot pattern fading out from a corner (top-right and bottom-left) */
.dot-grid {
  background-image: radial-gradient(rgb(var(--fg) / 0.14) 1px, transparent 1px);
  background-size: 14px 14px;
}

.dot-grid-tr {
  -webkit-mask-image: radial-gradient(ellipse at top right, #000 0%, transparent 65%);
  mask-image: radial-gradient(ellipse at top right, #000 0%, transparent 65%);
}

.dot-grid-bl {
  -webkit-mask-image: radial-gradient(ellipse at bottom left, #000 0%, transparent 65%);
  mask-image: radial-gradient(ellipse at bottom left, #000 0%, transparent 65%);
}

::selection {
  background-color: rgb(var(--fg));
  color: rgb(var(--canvas));
}

.nav-link {
  color: rgb(var(--muted));
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: rgb(var(--fg));
}

/* Subtle entrance animation shared by the views */
.fade-up {
  opacity: 0;
  animation: fadeUp 0.6s ease-out forwards;
}

.delay-1 { animation-delay: 120ms; }
.delay-2 { animation-delay: 240ms; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .fade-up {
    opacity: 1;
    animation: none;
  }
}
</style>
