const { isPageStart, isPageFinished, isPageTransitionFinished, isAppMounted, isAppRendered } = usePageHooks()

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    isPageStart.value = true
    isPageFinished.value = false
    isPageTransitionFinished.value = false
  })
  nuxtApp.hook('page:finish', () => {
    isPageStart.value = false
    isPageFinished.value = true
  })
  nuxtApp.hook('page:transition:finish', () => {
    isPageStart.value = false
    isPageTransitionFinished.value = true
  })
  nuxtApp.hook('app:mounted', () => {
    isAppMounted.value = true
  })
  nuxtApp.hook('app:rendered', () => {
    isAppRendered.value = true
  })
})
