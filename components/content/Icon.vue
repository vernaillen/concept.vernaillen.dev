<script setup lang="ts">
export interface Props {
    name: string
}
defineProps<Props>()
</script>

<template>
    <div
        :class="name" 
        class="text-vernaillen btn h-5 w-5 inline-flex'">
    </div>
</template>