<template>
  <div class="mt-4 bg-white">
    <div class="flex gap-2 mb-5">
      <span>Total:</span>
      <div class="flex-1 border-b border-dashed "></div>
      <b>{{ totalPrice }} USD</b>
    </div>
    <button
        @click="createOrder"
        :disabled="isCreatingOrder"
        class="bg-lime-500 w-full rounded-xl py-3 text-white font-bold hover:bg-lime-600 transition cursor-pointer disabled:bg-slate-400">
      Finish order
    </button>
  </div>
</template>

<script setup>
import {inject} from "vue";

const {totalPrice, isCreatingOrder, createOrder} = inject("cart");
</script>

