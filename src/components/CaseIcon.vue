<template>
  <div class="project-icon" :style="iconStyles">
    <img :src="imagePath" alt="Project Icon">
  </div>
</template>

<style scoped>
.project-icon {
  width: 100%;
  margin: 0 .5rem;
  aspect-ratio: 7 / 5;
  background-color: #666165;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-icon img {
  object-fit: cover;
  max-width: 90%;
  max-height: 90%
}
</style>

<script setup>
import { defineProps, computed} from 'vue';

const props = defineProps({
  imagePath: {
    type: String,
    required: true,
  },
  boxShadowColor: {
    type: String,
    default: 'var(--gold)',
  },
});

const iconStyles = computed(() => ({
  boxShadow: `0 -.3rem 0 ${props.boxShadowColor} inset`, 
}));

</script>
