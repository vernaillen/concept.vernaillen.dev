import { createSharedComposable } from '@vueuse/core'

const _isPageLoading = () => {
  const isPageStart = ref(false)
  const isPageFinished = ref(false)
  const isPageTransitionFinished = ref(false)
  const isAppMounted = ref(false)
  const isAppRendered = ref(false)

  return {
    isPageStart, isPageFinished, isPageTransitionFinished, isAppMounted, isAppRendered
  }
}
export const usePageHooks = createSharedComposable(_isPageLoading)
