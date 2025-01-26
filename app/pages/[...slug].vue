<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <div class="flex flex-col">
    <main class="flex-grow">
      <HeaderComponent />
      <div class="w-full container mx-auto px-6 py-4">
        <div class="prose prose-primary dark:prose-invert">
          <h1><span class="text-vernaillen">Vernaillen.dev</span> concept site</h1>
          <ContentRenderer v-if="page" :value="page" />
        </div>
      </div>
      <FooterComponent />
    </main>
  </div>
</template>
