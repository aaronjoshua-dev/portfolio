<template>
  <section class="fade-up grid items-center gap-10 sm:grid-cols-[17rem_1fr]">
    <!-- Smooth monotone in dark mode, natural colour in light mode -->
    <img :src="profile.avatar" :alt="profile.name"
      class="aspect-square w-full max-w-[17rem] rounded-lg object-cover transition-[filter] duration-300 dark:brightness-90 dark:grayscale" />

    <div>
      <h1 class="font-mono text-4xl leading-tight tracking-tight">{{ profile.name }}</h1>
      <div class="mt-6 space-y-5 leading-relaxed text-fg/80">
        <p v-for="(paragraph, i) in profile.intro" :key="i">{{ paragraph }}</p>
      </div>
      <ul class="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs">
        <li v-for="link in socials" :key="link.label">
          <a :href="link.href" target="_blank" rel="noreferrer" class="text-muted transition-colors hover:text-fg">
            {{ link.label }} <span class="text-[10px]">↗</span>
          </a>
        </li>
      </ul>
    </div>
  </section>

  <section class="fade-up delay-1 mt-24">
    <h2 class="border-b border-line pb-6 font-mono text-sm text-muted">Stack</h2>
    <StackList class="mt-8" />
  </section>

  <section class="fade-up delay-2 mt-24">
    <div class="flex items-baseline justify-between border-b border-line pb-6">
      <h2 class="font-mono text-sm text-muted">Experience</h2>
      <router-link to="/about"
        class="font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-fg">
        More about me →
      </router-link>
    </div>
    <ExperienceList class="ml-1 mt-8" />
  </section>

  <section class="fade-up delay-2 mt-24">
    <div class="flex items-baseline justify-between border-b border-line pb-6">
      <h2 class="font-mono text-sm text-muted">Work</h2>
      <router-link to="/portfolio"
        class="font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-fg">
        All projects →
      </router-link>
    </div>

    <ul class="divide-y divide-line">
      <li v-for="project in projects" :key="project.name">
        <a :href="project.demo" target="_blank" rel="noreferrer" class="group flex items-baseline justify-between gap-4 py-5">
          <span class="font-medium transition-colors group-hover:text-fg/70">{{ project.name }}</span>
          <span class="shrink-0 font-mono text-xs text-muted">{{ project.tech.join(' · ') }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import StackList from '../components/StackList.vue'
import ExperienceList from '../components/ExperienceList.vue'
import { profile, socials, projects } from '../data/profile'

export default {
  components: { StackList, ExperienceList },
  data() {
    return { profile, socials, projects }
  }
}
</script>
