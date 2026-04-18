<script setup>
import {useCartStore} from "../../entities/cart/cart.store.js";
import {storeToRefs} from "pinia";

const emit = defineEmits(["openDrawer"]);

const cartStore = useCartStore();
const { totalPrice } = storeToRefs(cartStore);
</script>

<template>
  <header class="flex justify-between border-b border-gray-200 px-8 py-4">
    <router-link to="/">
    <div class="flex items-center gap-4">
      <img src="/logo.png" alt="Logo" class="w-10">
      <div class="">
        <h2 class="text-xl font-bold uppercase">Sneakers store</h2>
        <p class="text-slate-400">Buy your dream sneakers</p>
      </div>
    </div>
    </router-link>

    <ul class="flex items-center gap-4">
      <li @click="() => emit('openDrawer')" class="flex items-center cursor-pointer gap-2 text-gray-500 hover:text-black">
        <img src="/cart.svg" alt="Cart">
        <b>{{totalPrice}} usd</b>
      </li>

      <router-link to="/saved">
        <li class="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-black">
          <img src="/heart.svg" alt="Saved">
          <span>Saved</span>
        </li>
      </router-link>

      <router-link to="/profile">
        <li class="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-black">
          <img src="/profile.svg" alt="Profile">
          <span>Profile</span>
        </li>
      </router-link>
    </ul>
  </header>
</template>