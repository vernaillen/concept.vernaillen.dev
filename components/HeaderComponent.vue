<script>
export default {
  name: 'HeaderComponent'
}
</script>

<template>
  <div class="w-full h-16 container mx-auto px-6 pt-0">
    <div class="flex">
      <div class="w-[180px]">
        <NuxtLink to="/" class="mx-auto" aria-label="go to Home">
          <svg
            viewBox="0 0 754 276"
            width="100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" opacity="transparent">
              <path
                class="fill-black dark:fill-vernaillen"
                d="M0 0 H92 V184 H172 V0 H264 V184 H344 V0 H436 V276 H0 Z"
              />
              <path
                class="fill-vernaillen dark:fill-white"
                d="M490 0 H582 V184 H662 V0 H754 V276 H490 Z"
              />
            </g>
          </svg>
        </NuxtLink>
      </div>
      <nav
        class="flex px-4 justify-between items-center w-full"
        aria-label="nav"
      >
        <NavBar />
      </nav>
    </div>
  </div>
</template>
