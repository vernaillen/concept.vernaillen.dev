<script setup lang="ts">
function linkClass(path: string) {
  const currentRoute = useRoute().path
  let classToAdd = ''
  if (
    (path !== '/' && currentRoute.startsWith(path))
    || (currentRoute === '/thanks' && path === '/contact')
  )
    classToAdd = 'router-link-active'
  return classToAdd
}
</script>

<template>
  <ul class="flex justify-center my-0">
    <li v-for="(item, index) in useNavItems()" :key="index" class="relative list-none group justify-center my-0">
      <NuxtLink
        :to="item.path"
        class="menu-scroll text-base text-dark dark:text-white group-hover:opacity-70
        text-center items-center justify-center no-underline
        inline-flex mt-0 pt-4 pb-6 px-2 mx-2
        border-[3px] border-transparent
        border-t border-l-0 border-r-0"
        :class="linkClass(item.path)"
      >
        {{ item.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
nav ul li a {
  border-top: 3px solid transparent;
}
nav ul li a.router-link-active {
  border-top: 3px solid #9C8E1B;
}
</style>
