<template>
  <section class="fade-up">
    <h1 class="font-mono text-3xl tracking-tight sm:text-4xl">About</h1>
    <div class="mt-10 max-w-xl space-y-5 leading-relaxed text-fg/80">
      <p v-for="(paragraph, i) in profile.bio" :key="i">{{ paragraph }}</p>
    </div>
  </section>

  <section class="fade-up delay-1 mt-24">
    <h2 class="border-b border-line pb-6 font-mono text-sm text-muted">Stack</h2>
    <StackList class="mt-8" />
  </section>

  <section class="fade-up delay-2 mt-24">
    <h2 class="border-b border-line pb-6 font-mono text-sm text-muted">Experience</h2>
    <ExperienceList detailed class="ml-1 mt-8" />
  </section>
</template>

<script>
import StackList from '../components/StackList.vue'
import ExperienceList from '../components/ExperienceList.vue'
import { profile } from '../data/profile'

export default {
  components: { StackList, ExperienceList },
  data() {
    return { profile }
  }
}
</script>
