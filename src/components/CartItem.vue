<script setup>
defineProps({
  id: Number,
  imageUrl: String,
  price: Number,
  title: String,
})

const emit = defineEmits(['deleteFromCart'])
</script>

<template>
  <div class="border border-slate-200 p-4 rounded-xl flex flex-row gap-4 items-center">

    <img :src="imageUrl" alt="Sneakers" class="w-16 h-16">

    <div class="flex flex-row gap-2 items-center justify-between">
      <div>
        <p>{{title}}</p>
        <b>{{price}}</b>
      </div>
      <img @click="emit('deleteFromCart')" src="/close.svg" alt="Delete" class="w-7 h-7 cursor-pointer" />
    </div>

  </div>
</template>