<script setup lang="ts">
export interface Props {
    src: string
    alt: string
    width: number
    height: number
}
const props = defineProps<Props>()
const wrapperClass = computed(() => {
    return 'w-[' + props.width + 'px] h-[' + props.height + 'px]'
})
</script>

<template>
    <div :class="wrapperClass">
        <NuxtImg 
            format="webp" 
            :alt="alt"
            :src="src" 
            :width="2 * width" 
            :height="2 * height" />
    </div>
</template> 