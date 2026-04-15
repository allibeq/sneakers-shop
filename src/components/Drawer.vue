<script setup>
import DrawerHead from "./DrawerHead.vue";
import CartList from "./CartList.vue";
import InfoBlock from "./InfoBlock.vue";
import DrawerBottom from "./DrawerBottom.vue";

const props = defineProps({
  onClose: Function,
  totalPrice: Number,
});
</script>

<template>
  <div @click="onClose" class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-50"></div>
  <div class="bg-white w-110 h-full fixed right-0 top-0 z-20 p-10 m flex flex-col">
    <DrawerHead @on-close="onClose"/>
    <InfoBlock v-if="!totalPrice" title="Cart is empty" description="Check out new sneakers" imageUrl="/package-icon.png"/>

    <CartList v-if="totalPrice"/>
    <DrawerBottom v-if="totalPrice" />
  </div>
</template>