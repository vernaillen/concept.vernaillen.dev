<script setup lang="ts">
const img = useImage()
export interface Props {
    src: string
    alt: string
    width: number
    height: number
}
const props = defineProps<Props>()
const imgUrl = img(props.src, { width: 2 * props.width, height: 2 * props.height, fit: 'cover' })
const wrapperClass = computed(() => {
    return 'w-[' + props.width + 'px] h-[' + props.height + 'px]'
})
</script>

<template>
    <div :class="wrapperClass">
        <img 
            :src="imgUrl" 
            :alt="alt"
            class="object-cover rounded" />
    </div>
</template> 