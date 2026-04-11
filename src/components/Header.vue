<script setup>
const emit = defineEmits(["openDrawer"]);

defineProps({
  totalPrice: Number,
})
</script>

<template>
  <header class="flex justify-between border-b border-gray-200 px-8 py-4">
    <div class="flex items-center gap-4">
      <img src="/logo.png" alt="Logo" class="w-10">
      <div class="">
        <h2 class="text-xl font-bold uppercase">Sneakers store</h2>
        <p class="text-slate-400">Buy your dream sneakers</p>
      </div>
    </div>
    <ul class="flex items-center gap-4">
      <li @click="() => emit('openDrawer')" class="flex items-center cursor-pointer gap-2 text-gray-500 hover:text-black">
        <img src="/cart.svg" alt="Cart">
        <b>{{totalPrice}} usd</b>
      </li>
      <li class="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-black">
        <img src="/heart.svg" alt="Saved">
        <span>Saved</span>
      </li>
      <li class="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-black">
        <img src="/profile.svg" alt="Profile">
        <span>Profile</span>
      </li>
    </ul>
  </header>
</template>

<!--<style scoped>-->
<!--//todo write classes-->
<!--</style>-->