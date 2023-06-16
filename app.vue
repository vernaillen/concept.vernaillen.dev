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
    }
  ]
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
