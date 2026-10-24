<template>
  <section class="fade-up">
    <h1 class="font-mono text-3xl tracking-tight sm:text-4xl">Contact</h1>
    <p class="mt-4 max-w-xl leading-relaxed text-muted">
      I’m open to new opportunities, collaborations and conversations. If you have a question or just want to say
      hello, the best way to reach me is by email.
    </p>

    <div class="mt-10 flex flex-wrap items-baseline gap-x-5 gap-y-3">
      <a :href="'mailto:' + profile.email"
        class="break-all text-2xl font-medium tracking-tight underline decoration-line underline-offset-8 transition-colors hover:decoration-fg sm:text-3xl">
        {{ profile.email }}
      </a>
      <button type="button" @click="copyEmail"
        class="rounded border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:border-fg/60 hover:text-fg">
        {{ copied ? 'Copied' : 'Copy' }}
      </button>
    </div>

    <dl class="mt-14 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
      <div>
        <dt class="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">Location</dt>
        <dd class="mt-2">{{ profile.location }}</dd>
      </div>
      <div>
        <dt class="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">Local time</dt>
        <dd class="mt-2 tabular-nums">{{ localTime }} <span class="text-muted">· GMT+8</span></dd>
      </div>
      <div>
        <dt class="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">Status</dt>
        <dd class="mt-2 flex items-center gap-2">
          <span class="h-2 w-2 rounded-full bg-fg" aria-hidden="true"></span>
          Open to opportunities
        </dd>
      </div>
    </dl>
  </section>

  <section class="fade-up delay-1 mt-20">
    <h2 class="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">Reach out about</h2>
    <ul class="mt-6 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
      <li v-for="topic in topics" :key="topic.title" class="bg-canvas p-5">
        <h3 class="font-medium">{{ topic.title }}</h3>
        <p class="mt-1.5 text-sm leading-relaxed text-muted">{{ topic.text }}</p>
      </li>
    </ul>
  </section>

  <section class="fade-up delay-2 mt-20">
    <h2 class="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">Elsewhere</h2>
    <ul class="mt-6 divide-y divide-line border-y border-line">
      <li v-for="link in links" :key="link.label">
        <a :href="link.href" target="_blank" rel="noreferrer" class="group flex items-center justify-between gap-4 py-5">
          <span class="font-medium">{{ link.label }}</span>
          <span class="flex items-center gap-4">
            <span class="hidden font-mono text-xs text-muted sm:inline">{{ link.handle }}</span>
            <span class="text-muted transition-colors group-hover:text-fg">↗</span>
          </span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { profile } from '../data/profile'

const COPIED_RESET_MS = 2000
const CLOCK_TICK_MS = 30 * 1000

export default {
  data() {
    return {
      profile,
      copied: false,
      localTime: '',
      topics: [
        { title: 'Backend & APIs', text: 'Python services and APIs that fit cleanly with the frontend.' },
        { title: 'Workflow orchestration', text: 'Data pipelines and scheduled jobs on Apache Airflow and AWS MWAA.' },
        { title: 'Data ingestion', text: 'Mapping and loading large datasets into S3 and vector stores like Milvus.' },
        { title: 'LLM features', text: 'Prompt work and bringing AI features into real applications.' }
      ],
      links: [
        { label: 'GitHub', href: profile.github, handle: '@aaronjoshua-dev' },
        { label: 'LinkedIn', href: profile.linkedin, handle: 'in/aaron-maureal' }
      ]
    }
  },
  mounted() {
    this.updateTime()
    this.clock = setInterval(this.updateTime, CLOCK_TICK_MS)
  },
  beforeUnmount() {
    clearInterval(this.clock)
    clearTimeout(this.copiedTimer)
  },
  methods: {
    updateTime() {
      this.localTime = new Date().toLocaleTimeString('en-US', {
        timeZone: profile.timezone,
        hour: 'numeric',
        minute: '2-digit'
      })
    },
    async copyEmail() {
      try {
        await navigator.clipboard.writeText(profile.email)
      } catch {
        // Clipboard can be unavailable (e.g. non-HTTPS); fall back to opening the mail client
        window.location.href = 'mailto:' + profile.email
        return
      }
      this.copied = true
      clearTimeout(this.copiedTimer)
      this.copiedTimer = setTimeout(() => { this.copied = false }, COPIED_RESET_MS)
    }
  }
}
</script>
