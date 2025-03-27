<script setup lang="ts">
const colorMode = useColorMode();

const toggleState = ref(false);

const themes = {
  system: {
    name: "solar:monitor-linear",
    color: "",
    label: "System",
  },
  light: {
    name: "solar:sun-2-line-duotone",
    color: "text-yellow-500",
    label: "Light",
  },
  dark: {
    name: "solar:moon-linear",
    color: "text-blue-500",
    label: "Dark",
  },
} as const;

const currentMode = computed(
  () => themes[colorMode.preference as keyof typeof themes],
);
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <RekaDropdownMenuRoot v-model:open="toggleState">
      <RekaDropdownMenuTrigger class="block ml-auto mr-0">
        <Icon :name="currentMode.name" :class="currentMode.color" size="24" />
      </RekaDropdownMenuTrigger>
      <RekaDropdownMenuPortal>
        <RekaDropdownMenuContent class="outline-none bg-white p-2">
          <RekaDropdownMenuItem
            v-for="(theme, key) in themes"
            :key="key"
            :value="theme"
            as="button"
            class="flex items-center gap-2"
            @click="colorMode.preference = key"
          >
            <Icon :class="theme.color" :name="theme.name" aria-hidden="true" />
            {{ theme.label }}
          </RekaDropdownMenuItem>
        </RekaDropdownMenuContent>
      </RekaDropdownMenuPortal>
    </RekaDropdownMenuRoot>
  </ClientOnly>
</template>
