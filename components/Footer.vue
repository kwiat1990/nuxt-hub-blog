<script setup lang="ts">
const year = new Date().getUTCFullYear();
const copyrightPeriod = computed(() =>
  year === 2025 ? year : `2025 - ${year}`,
);
</script>

<template>
  <footer class="container text-center py-5">
    &copy; {{ copyrightPeriod }} Mateusz Kwiatkowski
  </footer>
</template>

<style scoped></style>
