<template>
  <ol class="relative space-y-10 border-l border-line pl-6">
    <li v-for="job in experience" :key="job.company + job.period" class="relative">
      <!-- Filled dot for the current role, hollow for past ones -->
      <span class="absolute -left-[calc(1.5rem+5.5px)] top-1.5 h-2.5 w-2.5 rounded-full border border-fg"
        :class="job.current ? 'bg-fg' : 'bg-canvas'" aria-hidden="true"></span>

      <p class="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">{{ job.period }}</p>
      <h3 class="mt-2 font-medium">{{ job.title }}</h3>
      <p class="mt-1 font-mono text-xs text-muted">{{ job.company }} · {{ job.location }}</p>
      <p class="mt-3 leading-relaxed text-fg/80">{{ job.summary }}</p>

      <ul v-if="detailed && job.highlights" class="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-fg/80 marker:text-muted">
        <li v-for="item in job.highlights" :key="item">{{ item }}</li>
      </ul>

      <ul class="mt-4 flex flex-wrap gap-2">
        <li v-for="item in job.tech" :key="item" class="rounded border border-line px-2 py-1 font-mono text-[11px] text-muted">
          {{ item }}
        </li>
      </ul>
    </li>
  </ol>
</template>

<script>
import { experience } from '../data/profile'

export default {
  props: {
    // Show the full list of highlights (About page) instead of just the summary
    detailed: { type: Boolean, default: false }
  },
  data() {
    return { experience }
  }
}
</script>
