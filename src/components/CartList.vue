<script setup>
import CartItem from "./CartItem.vue";
import {inject} from "vue";

const { cartItems, deleteFromCart } = inject("cart");
</script>

<template>
  <div class="flex flex-col gap-5 flex-1 min-h-0 overflow-y-auto" v-auto-animate>
    <CartItem v-for="cartItem in cartItems"
              :key="cartItem.id"
              :price="cartItem.price"
              :image-url="cartItem.imageUrl"
              :id="cartItem.id"
              :title="cartItem.title"
              @delete-from-cart="() => deleteFromCart(cartItem)"
    />
  </div>
</template>