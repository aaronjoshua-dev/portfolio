<template>
  <div class="space-y-10">
    <div v-for="group in stack" :key="group.label">
      <h3 class="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">{{ group.label }}</h3>
      <ul class="mt-4 flex flex-wrap gap-2">
        <li v-for="item in group.items" :key="item"
          class="rounded border border-line px-3 py-1.5 font-mono text-[13px] transition-colors hover:border-fg/60">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { stack } from '../data/profile'

export default {
  data() {
    return { stack }
  }
}
</script>
