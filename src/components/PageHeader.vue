<script setup>
const filters= defineModel();
</script>

<template>
  <div class="flex justify-between items-center mb-10">
    <h2 class="text-3xl font-bold"><slot></slot></h2>

    <div class="flex justify-between items-center gap-3">
      <select v-model="filters.sortBy" name="" id="" class="py-2 px-3 border border-gray-200 rounded-md outline-none">
        <option value="name">By name</option>
        <option value="price">By price - low price</option>
        <option value="-price">By price - high price</option>
      </select>
      <div class="relative">
        <img src="/search.svg" alt="Search" class="absolute left-3 top-3">
        <input
            v-model="filters.searchQuery"
            class="border border-gray-200 rounded-md py-2 pl-9 pr-4 outline-none focus:border-gray-400"
            placeholder="Search">
      </div>
    </div>
  </div>

</template>