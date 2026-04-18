<script setup>
import CartItem from "./CartItem.vue";

defineProps({
  items: Array
});

defineEmits(['remove'])
</script>

<template>
  <div class="flex flex-col gap-5 flex-1 min-h-0 overflow-y-auto" v-auto-animate>
    <CartItem v-for="item in items"
              :key="item.id"
              :price="item.price"
              :image-url="item.imageUrl"
              :id="item.id"
              :title="item.title"
              @delete-from-cart="() => $emit('remove', item)"
    />
  </div>
</template>