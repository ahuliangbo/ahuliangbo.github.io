<template>
  <h2>Projects</h2>
  <div id = "rolling-window">
    <div id = "sider-pointer"></div>
    <div ref="scrollDiv" id = "marquee" :style="animationStyle">
      <CaseIcon
        class = "styled-case-icon"
        v-for="icon in shuffledIcons"
        :key="icon.id"
        :imagePath="icon.imagePath"
      />
    </div>
  </div>
</template>

<script setup>
import { ref , computed, onMounted, onUnmounted } from 'vue';
import CaseIcon from './CaseIcon.vue';




const projects = ref([
  { id: 1, imagePath: "/ProceduralTurtle.png" },
  { id: 2, imagePath: "/Boids.png" },
  { id: 3, imagePath: "/HackTx.png" },
  { id: 4, imagePath: "/TicTacToe.png" },
  { id: 5, imagePath: "/Bank.png" }
])

const numIcons = 6;
const scrollTime = ref(1);
const animationType = ref("infinite");
const icons = ref([
]);


const scrollDiv = ref(null);
const animationStyle = ref({});


function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}
const addRandom = (array1, array2) => {
  const newId = array1.value.length + 1;
  const randomIndex = Math.floor(Math.random() * array2.value.length);
  array1.value.push({
    id: newId,
    imagePath: array2.value[randomIndex].imagePath,
  });
};
const removeFirst = (array) => {
  array.value.shift();
};

for(let i= 0; i < numIcons; ++i){
  addRandom(icons, projects);
}

const keyframesName = "dynamicScroll";

const timer = ref(0); // Timer value
const isRunning = ref(false); // Tracks if the timer is running
let interval = null; // Holds the interval ID


const startRoll = () => {
  animationType.value = "forwards";
  interval = setInterval(() => {
        scrollTime.value += 1; // Increase the duration over time
        animationStyle.value = {
          animation: `${keyframesName} ${scrollTime.value}s linear ${animationType.value}`,
        };

        // Stop the animation after a threshold
        if (scrollTime.value >= 10) {
          clearInterval(interval); // Stop the interval
          animationStyle.value = {}; // Stop the animation
        }
      }, 100); // Adjust this interval for smoother slowdown
};


const shuffledIcons = computed(() => shuffleArray(icons.value));

onMounted(() => {
      const wantedWidth = scrollDiv.value.scrollWidth;
      const moveDistance = wantedWidth /numIcons;


      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(
        `@keyframes ${keyframesName} {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-${moveDistance}px);
          }
        }`,
        styleSheet.cssRules.length
      );

    });
onUnmounted(() => {
  clearInterval(interval);
});

startRoll();
</script>

<style scoped>
  #rolling-window {
    mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
    position: relative;
  }
  #marquee
  {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    /* animation: scroll 5s linear forwards; */
  }
  .styled-case-icon
  {
    flex: 0 0 20%;
  }
  @keyframes scroll {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-20%);
    }
  }
  #sider-pointer
  {
    position: absolute;
    left:50%;
    padding: 0 .05rem;
    height: 100%;
    background-color: #acb371;
    z-index: 1;
  }

</style>
