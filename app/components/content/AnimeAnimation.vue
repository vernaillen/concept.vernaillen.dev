<script setup lang="ts">
import { ref, onMounted } from 'vue'
const letters = ref<HTMLElement>()
onMounted(() => {
  useAnime({ targets: '.title', translateX: 250, duration: 800 })
  if (letters.value) {
    const textResult = letters.value.innerHTML.replace(/\S/g, "<span class='letter'>$&</span>") || ''
    letters.value.innerHTML = textResult
  }
  useAnime.timeline({ loop: false })
    .add({
      targets: '.ml1 .letter',
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: 'easeOutExpo',
      duration: 100,
      delay: (_el, i) => 20 * (i + 1)
    }).add({
      targets: '.ml1 .line',
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: 'easeOutExpo',
      duration: 150,
      offset: '-=875',
      delay: (_el, i, l) => 5 * (l - i)
    })
    //Service background animation
let services = document.querySelectorAll('.service-wrapper');

services.forEach((service) => {
  service.addEventListener('mouseenter', (event) => {
    useAnime.remove(service.querySelector('.arrow'));
    useAnime.remove(service.querySelector('.arrow-small'));
    useAnime({
      targets: service.querySelector('.arrow'),
      easing: 'easeOutExpo',
      scale: 30,
      duration: 1000,
   })

   useAnime({
      targets: service.querySelector('.arrow-small'),
      easing: 'easeOutExpo',
      scale: 7,
      duration: 1300,
   })

   useAnime.timeline()
      .add({
         targets: service.querySelector('svg'),
         translateX: -25,
         translateY: 25,
         easing: 'easeOutExpo',
         duration: 400,
      })
      .add({
         targets: service.querySelector('svg'),
         translateX: 0,
         translateY: 0,
         easing: 'easeOutExpo',
         duration: 1700,
         offset: 100,
      })
  })

  service.addEventListener('mouseleave', (event) => {
    useAnime.remove(service.querySelector('.arrow'));
    useAnime.remove(service.querySelector('.arrow-small'));
    useAnime({
      targets: service.querySelector('.arrow'),
      easing: 'easeOutExpo',
      scale: 1,
      duration: 600,
   })

   useAnime({
      targets: service.querySelector('.arrow-small'),
      easing: 'easeOutExpo',
      scale: 1,
      duration: 900,
   })

   useAnime.timeline()
      .add({
         targets: service.querySelector('svg'),
         translateX: -25,
         translateY: 25,
         easing: 'easeOutExpo',
         duration: 400,
      })
      .add({
         targets: service.querySelector('svg'),
         translateX: 0,
         translateY: 0,
         easing: 'easeOutExpo',
         duration: 1700,
         offset: 100,
      })
  })
})
})
</script>

<template>
	<div class="wrapper mt-10">
	   <div class="service-wrapper">
	      <div>
	         <h3>Sell your device</h3>
	         <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
					  <text transform="rotate(135 6.68 7.16)" fill="#fff" fill-rule="evenodd" font-family="Ionicons" font-size="25" font-weight="400" letter-spacing=".744">
					    <tspan x="-2.319" y="16.66"></tspan>
					  </text>
					 </svg>
	         <div class="arrow" id="arrow-one"></div>
	         <div class="arrow-small" id="arrow-one-small"></div>
	      </div>
	      <p>
	         Get instant quote <br> and ship device for free.
	      </p>
	   </div>

	   <div class="service-wrapper">
	      <div>
	         <h3>Repair</h3>
	         <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
					  <text transform="rotate(135 6.68 7.16)" fill="#fff" fill-rule="evenodd" font-family="Ionicons" font-size="25" font-weight="400" letter-spacing=".744">
					    <tspan x="-2.319" y="16.66"></tspan>
					  </text>
					 </svg>
	         <div class="arrow" id="arrow-two"></div>
	         <div class="arrow-small" id="arrow-two-small"></div>
	      </div>
	      <p>
	         Give your device <br> a second chance.
	      </p>
	   </div>

	   <div class="service-wrapper">
	      <div>
	         <h3>Exchange</h3>
	         <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
					  <text transform="rotate(135 6.68 7.16)" fill="#fff" fill-rule="evenodd" font-family="Ionicons" font-size="25" font-weight="400" letter-spacing=".744">
					    <tspan x="-2.319" y="16.66"></tspan>
					  </text>
					 </svg>
	         <div class="arrow" id="arrow-three"></div>
	         <div class="arrow-small" id="arrow-three-small"></div>
	      </div>
	      <p>
	         Refurbished an <br> and ship device for free.
	      </p>
	   </div>
	</div>
</template>

<style scoped>
.ml1 {
  font-weight: 900;
  font-size: 2.5em;
}

.ml1 .letter {
  display: inline-block;
  line-height: 1em;
}

.ml1 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml1 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 2px;
  width: 110%;
  transform-origin: 0 0;
}

.ml1 .line1 { top: 0; }
.ml1 .line2 { bottom: 0; }




.wrapper {
  display: flex;
  flex-direction: row;
  height: 300px;
  width: 80%;
}

.service-wrapper {
  background: #F4F6F6;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 50px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s linear;
}
.service-wrapper:hover {
  color: #FFF;
}
.service-wrapper div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.service-wrapper div h3 {
  z-index: 1;
}
.service-wrapper p {
  line-height: 23px;
  z-index: 1;
}

.arrow {
  height: 40px;
  width: 40px;
  border-radius: 100px;
}

#arrow-one {
  background-color: #0311C6;
  position: absolute;
  right: 0;
}

#arrow-two {
  background-color: #00C569;
  position: absolute;
  right: 0;
}

#arrow-three {
  background-color: #FD7D01;
  position: absolute;
  right: 0;
}

.arrow-small {
  height: 40px;
  width: 40px;
  border-radius: 100px;
  z-index: 10;
}

#arrow-one-small {
  background-color: #172ACC;
}

#arrow-two-small {
  background-color: #15C976;
}

#arrow-three-small {
  background-color: #FD891C;
}

svg {
  position: absolute;
  z-index: 1000;
  right: 12px;
}
</style>
