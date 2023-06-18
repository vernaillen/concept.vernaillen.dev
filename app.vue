<script setup lang="ts">
useHead({
  titleTemplate: (title?: string) => `${title} - Wouter Vernaillen: Freelance Full Stack Java, Vue & Nuxt Developer`,
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'description', content: 'Vernaillen.dev concept site' }
  ],
  link: [
    {
      rel: 'icon',
      href: '/favicon.svg',
      type: 'image/svg+xml'
    },
    {
      href: 'https://fonts.googleapis.com',
      rel: 'preconnect'
    },
    {
      href: 'https://fonts.gstatic.com',
      rel: 'preconnect',
      crossorigin: ''
    }
  ]
})
</script>

<template>
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right,rgb(156 142 27/40%) 0%,rgb(156 142 27/60%) 80%,rgb(156 142 27/40%) 100%)" />
  <div>
    <NuxtPage />
  </div>
</template>

<style>
.nuxt-loading-indicator {
  opacity: 100% !important;
}
</style>
