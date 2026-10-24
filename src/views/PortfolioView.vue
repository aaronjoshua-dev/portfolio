<template>
  <section class="fade-up">
    <h1 class="font-mono text-3xl tracking-tight sm:text-4xl">Projects</h1>
    <p class="mt-4 max-w-xl leading-relaxed text-muted">
      A selection of things I’ve built while learning and experimenting.
    </p>
  </section>

  <div class="fade-up delay-1 mt-12 grid gap-12 sm:grid-cols-2 sm:gap-8">
    <article v-for="project in projects" :key="project.name" class="group">
      <a :href="project.demo" target="_blank" rel="noreferrer"
        class="block overflow-hidden rounded-xl border border-line bg-surface">
        <img :src="project.image" :alt="project.name + ' screenshot'" loading="lazy"
          class="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
      </a>

      <h2 class="mt-5 font-medium">{{ project.name }}</h2>
      <p class="mt-2 text-sm leading-relaxed text-muted">{{ project.description }}</p>

      <ul class="mt-4 flex flex-wrap gap-2">
        <li v-for="t in project.tech" :key="t" class="rounded-md bg-surface px-2 py-0.5 text-xs text-muted">{{ t }}</li>
      </ul>

      <div class="mt-4 flex gap-5 text-sm">
        <a v-if="project.demo" :href="project.demo" target="_blank" rel="noreferrer"
          class="underline decoration-line underline-offset-4 transition-colors hover:decoration-fg">Live demo ↗</a>
        <a v-if="project.github" :href="project.github" target="_blank" rel="noreferrer"
          class="underline decoration-line underline-offset-4 transition-colors hover:decoration-fg">Source ↗</a>
      </div>
    </article>
  </div>
</template>

<script>
import { projects } from '../data/profile'

export default {
  data() {
    return { projects }
  }
}
</script>
