<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('pages').path('/').first())

const { data: categories } = await useAsyncData('categories', () => queryCollection('categories')
    .order('name', 'DESC')
    .all());

const { data: articles } = await useAsyncData('articles', () => queryCollection('articles').all())

console.log(articles.value)
// useSeoMeta({
//   title: home.value?.title,
//   description: home.value?.description
// })


</script>

<template>
  <UContainer>
    <UBadge v-for="category in categories" :key="category.id">{{ category.name }}</UBadge>
    <ContentRenderer v-for="article in articles" :key="article.id" :value="article"/>
    <ContentRenderer v-if="home" :value="home"/>
    <div v-else>Home not found</div>
  </UContainer>
</template>

<style scoped>

</style>