<script setup>
import DrawerHead from "./DrawerHead.vue";
import CartList from "./CartList.vue";

defineProps({
  onClose: Function
});
</script>

<template>
  <div @click="onClose" class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-50"></div>
  <div class="bg-white w-110 h-full fixed right-0 top-0 z-20 p-10 m flex flex-col">
    <DrawerHead @on-close="onClose"/>
    <CartList/>
    <div class="mt-4 bg-white">
      <div class="flex gap-2 mb-5">
        <span>Total:</span>
        <div class="flex-1 border-b border-dashed "></div>
        <b>1300</b>
      </div>
      <button class="bg-lime-500 w-full rounded-xl py-3 text-white font-bold hover:bg-lime-600 transition cursor-pointer disabled:bg-slate-400">
        Finish order
      </button>
    </div>
  </div>
</template>