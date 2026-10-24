<template>
  <section class="fade-up">
    <h1 class="font-mono text-3xl tracking-tight sm:text-4xl">Contact</h1>
    <p class="mt-4 max-w-xl leading-relaxed text-muted">
      I’m open to new opportunities, collaborations and conversations. If you have a question or just want to say
      hello, the best way to reach me is by email.
    </p>

    <a :href="'mailto:' + profile.email"
      class="mt-10 inline-block break-all text-2xl font-medium tracking-tight underline decoration-line underline-offset-8 transition-colors hover:decoration-fg sm:text-3xl">
      {{ profile.email }}
    </a>
  </section>

  <section class="fade-up delay-1 mt-20">
    <h2 class="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">Elsewhere</h2>
    <ul class="mt-6 divide-y divide-line border-y border-line">
      <li>
        <a :href="profile.github" target="_blank" rel="noreferrer" class="group flex items-center justify-between py-5">
          <span class="font-medium">GitHub</span>
          <span class="text-muted transition-colors group-hover:text-fg">↗</span>
        </a>
      </li>
      <li>
        <a :href="profile.linkedin" target="_blank" rel="noreferrer" class="group flex items-center justify-between py-5">
          <span class="font-medium">LinkedIn</span>
          <span class="text-muted transition-colors group-hover:text-fg">↗</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { profile } from '../data/profile'

export default {
  data() {
    return { profile }
  }
}
</script>
