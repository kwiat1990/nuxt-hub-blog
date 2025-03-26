<script setup lang="ts">
const year = new Date().getUTCFullYear();
const label = computed(() => (year === 2025 ? year : `2025 - ${year}`));
</script>

<template>
  <footer>Mateusz Kwiatkowski &copy; {{ label }}</footer>
</template>

<style scoped></style>
