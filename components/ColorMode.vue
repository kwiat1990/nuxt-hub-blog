<script setup lang="ts">
const colorMode = useColorMode();

interface Theme {
  icon: string;
  color: string;
  label: string;
  value: string;
}

const themes: Theme[] = [
  {
    icon: "solar:monitor-linear",
    color: "",
    label: "System",
    value: "system",
  },
  {
    icon: "solar:sun-2-linear",
    color: "text-yellow-500",
    label: "Light",
    value: "light",
  },
  {
    icon: "solar:moon-linear",
    color: "text-blue-500",
    label: "Dark",
    value: "dark",
  },
] as const;

const currentMode = computed(() => {
  return (
    themes.find((theme) => colorMode.preference === theme.value) ?? themes[0]
  );
});

function setPreference(preference: Theme) {
  colorMode.preference = preference.value;
}
</script>

<template>
  <ColorScheme placeholder="..." tag="div">
    <Dropdown :items="themes" @select="setPreference" v-bind="$attrs">
      <template #trigger>
        <Icon
          v-if="currentMode"
          :aria-label="currentMode.label"
          :class="currentMode.color"
          :name="currentMode.icon"
          class="block!"
          size="24"
        />
      </template>
      <template #item="{ item }">
        <button class="flex items-center gap-2 p-2">
          <Icon
            :class="item.color"
            :name="item.icon"
            aria-hidden="true"
            size="24"
          />
          {{ item.label }}
        </button>
      </template>
    </Dropdown>
  </ColorScheme>
</template>
