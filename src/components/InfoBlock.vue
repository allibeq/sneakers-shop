<template>
  <div class="flex flex-col flex-1 items-center justify-center ">
    <img height="100" width="100" :src="imageUrl" alt="Info image">
    <h2 class="mt-4 text-2xl font-medium">{{title}}</h2>
    <p class="text-gray-400">{{description}}</p>
  </div>

</template>

<script setup>
defineProps({
  imageUrl: String,
  title: String,
  description: String,
})
</script>