<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})

definePageMeta({
  layout: false,
});
</script>

<template>
  <AppHero />
</template>