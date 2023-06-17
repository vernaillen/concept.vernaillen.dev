<script setup>
import gsap from 'gsap';

const main = ref(),
    tl = ref(),
    ctx = ref();

const toggleTimeline = () => {
    setTimeout(() => {
        tl.value.reversed(!tl.value.reversed());
        toggleTimeline()
    }, 2000)
};

onMounted(() => {
    ctx.value = gsap.context((self) => {
        const boxes = self.selector('.box');
        tl.value = gsap
            .timeline()
            .to(boxes[0], { x: 120, rotation: 360 })
            .to(boxes[1], { x: -120, rotation: -360 }, '<')
            .to(boxes[2], { y: -166 })
            .reverse();
    }, main.value); // <- Scope!
    tl.value.reversed(!tl.value.reversed());
    toggleTimeline()
});

onUnmounted(() => {
    ctx.value.revert(); // <- Easy Cleanup!
});
</script>

<template>
    <section class="boxes-container" ref="main">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </section>
</template>


<style>
:root {
    --dark: #1d1d1d;
    --grey-dark: #414141;
    --light: #fff;
    --mid: #ededed;
    --grey: #989898;
    --gray: #989898;
    --green: #28a92b;
    --green-dark: #4e9815;
    --green-light: #6fb936;
    --blue: #2c7ad2;
    --purple: #8d3dae;
    --red: #c82736;
    --orange: #e77614;
    accent-color: var(--green);
}

.boxes-container {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}
.box {
    background-color: var(--green);
    width: 100px;
    height: 100px;
    border-radius: 10px;
    font-size: 24px;
    text-align: center;
    line-height: 100px;
}
</style>