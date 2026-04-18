
<template>
  <div class="border-2 bg-white border-black-200 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 transition hover:shadow-xl">
    <img :src="imgUrl" alt="Sneaker">
    <p class="mt-2">{{title}}</p>
    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span>Price</span>
        <span>{{price}} USD</span>
      </div>
      <img @click="onClickAdd" :src="!isAdded ? 'plus.svg' : 'checked.svg'" alt="Add">
      <img @click="addToFavorite" :src="!isFavourite ? 'like-1.svg' : 'like-2.svg'" alt="Like">
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
  title: String,
  imgUrl: String,
  price: Number,
  isFavourite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  addToFavorite: Function,
});
</script>