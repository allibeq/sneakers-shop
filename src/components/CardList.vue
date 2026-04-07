<template>
  <div class="grid grid-cols-4 gap-3">
    <Card
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :price="item.price"
        :img-url="item.imageUrl"
        :is-added="false"
        :isFavorite="false"
        onClickAdd="onClickAdd"/>
  </div>
</template>

<script setup>
import Card from "./Card.vue";

defineProps({
  items: Array,
})
</script>