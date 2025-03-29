<script setup lang="ts"></script>

<template>
  <header>
    <div class="flex items-center justify-between">
      <nav class="flex gap-4 uppercase">
        <NuxtLink to="/" active-class="font-bold">Home</NuxtLink>
        <NuxtLink to="/blog" active-class="font-bold">Blog</NuxtLink>
        <NuxtLink to="/about" active-class="font-bold">About</NuxtLink>
      </nav>
      <div class="flex items-center gap-8 text-black">
        <Button class="button button--secondary py-1 px-1.5">
          <Icon aria-hidden="true" name="solar:magnifer-linear" size="24" />
        </Button>
        <ColorMode class="button button--secondary py-1 px-1.5" />
      </div>
    </div>
  </header>
</template>
