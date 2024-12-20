<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar/>
  <div class="main-content">
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.main-content {
  margin-top: 5em;
  max-width: 50rem;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
