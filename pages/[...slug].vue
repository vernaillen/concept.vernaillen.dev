<script setup lang="ts">
useRouteCache((helper) => {
  helper.setCacheable().setMaxAge(9000)
})
</script>

<template>
  <div class="flex flex-col">
    <main class="flex-grow">
      <RenderCacheable cache-key="header">
        <HeaderComponent />
      </RenderCacheable>
      <div class="w-full container mx-auto px-6 py-4">
        <div class="prose prose-primary dark:prose-invert">
          <h1><span class="text-vernaillen">Vernaillen.dev</span> concept site</h1>
          <ContentDoc />
        </div>
      </div>
      <RenderCacheable cache-key="footer">
        <FooterComponent />
      </RenderCacheable>
    </main>
  </div>
</template>
