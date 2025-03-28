<script setup lang="ts" generic="T">
defineProps<{
  items: T[];
}>();

const emit = defineEmits<{
  (e: "select", item: T): void;
}>();

function onSelect(item: T) {
  emit("select", item);
}
</script>

<template>
  <RekaDropdownMenuRoot :default-open="false">
    <RekaDropdownMenuTrigger v-bind="$attrs">
      <slot name="trigger" />
    </RekaDropdownMenuTrigger>
    <RekaDropdownMenuPortal>
      <RekaDropdownMenuContent class="outline-none bg-white">
        <RekaDropdownMenuItem
          v-for="(item, index) in items"
          :key="index"
          @select="onSelect(item)"
        >
          <slot name="item" :item="item" />
        </RekaDropdownMenuItem>
      </RekaDropdownMenuContent>
    </RekaDropdownMenuPortal>
  </RekaDropdownMenuRoot>
</template>
