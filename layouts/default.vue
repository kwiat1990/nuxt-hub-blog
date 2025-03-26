<script setup lang="ts">
import AppHeader from "~/components/app-header.vue";
</script>

<template>
  <div class="grid grid-rows-[auto_1fr_auto] min-h-full">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
