<script setup>
  import { useDark, useToggle } from '@vueuse/core'

  const darkMode = useDark({ disableTransition: false });
  const toggleDarkMode = useToggle(darkMode);

</script>

<template>
  <!-- Preload svgs so they don't pop in -->
  <link rel="preload" href="/sun.svg" as="image"/>
  <link rel="preload" href="/moon.svg" as="image"/>
  <img v-if="!darkMode" draggable=false @click="toggleDarkMode()" src="/sun.svg" />
  <img v-if="darkMode"  draggable=false @click="toggleDarkMode()" src="/moon.svg" />
</template>

<style scoped>
  img {
    cursor: pointer;
    user-select: none;
  }
</style>