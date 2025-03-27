<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <RekaSwitchRoot
      v-model="isDark"
      class="border data-[state=unchecked]:bg-stone-300 w-[32px] data-[state=checked]:bg-stone-500"
    >
      <RekaSwitchThumb
        class="block w-3.5 my-auto transition-transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-full"
      >
        <Icon :name="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" />
      </RekaSwitchThumb>
    </RekaSwitchRoot>
  </ClientOnly>
</template>
