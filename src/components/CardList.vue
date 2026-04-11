<template>
  <div class="grid grid-cols-4 gap-3">
    <Card
        v-for="item in items"
        :id="item.id"
        :key="item.id"
        :title="item.title"
        :price="item.price"
        :img-url="item.imageUrl"
        :is-added="item.isAdded"
        :isFavourite="item.isFavourite"
        :onClickAdd="() => emit('addToCart', item)"
        :addToFavorite="() => emit('addToFavorite', item)"/>
  </div>
</template>

<script setup>
import Card from "./Card.vue";

defineProps({
  items: Array,
});

const emit = defineEmits(["addToFavorite", "addToCart"]);
</script>