<script setup lang="ts">
const { data: home } = await useAsyncData(() =>
  queryCollection("pages").path("/").first(),
);

const { data: categories } = await useAsyncData("categories", () =>
  queryCollection("categories").order("name", "DESC").all(),
);

const { data: articles } = await useAsyncData("articles", () =>
  queryCollection("articles").all(),
);

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});
const open = ref(false);
</script>

<template>
  <div class="container">
    <div v-for="category in categories" :key="category.id">
      {{ category.name }}
    </div>
    <RekaCollapsibleRoot v-model="open">
      <RekaCollapsibleTrigger>¥</RekaCollapsibleTrigger>
      <RekaCollapsibleContent> Oko</RekaCollapsibleContent>
    </RekaCollapsibleRoot>
    <ContentRenderer
      v-for="article in articles"
      :key="article.id"
      :value="article"
    />
    <ContentRenderer v-if="home" :value="home" />
    <div v-else>Home not found</div>
  </div>
</template>

<style scoped></style>
