<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<template>
  <div class="grid grid-rows-[auto_1fr_auto] min-h-full">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
