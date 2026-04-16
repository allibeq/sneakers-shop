<script setup>
import DrawerHead from "./DrawerHead.vue";
import CartList from "./CartList.vue";
import InfoBlock from "./InfoBlock.vue";
import DrawerBottom from "./DrawerBottom.vue";
import { ref } from "vue";
import {useCartStore} from "../stores/cart.store.js";
import {storeToRefs} from "pinia";

defineProps({
  onClose: Function,
});

const cartStore = useCartStore();
const { cartItems, totalPrice } = storeToRefs(cartStore);

const isCreatingOrder = ref(false);

const createOrder = async () => {
  const obj = {
    items: cartItems.value,
    totalPrice: totalPrice.value,
  }

  try {
    isCreatingOrder.value = true;
    const data = await fetch("https://4c91f87c72e0e424.mokky.dev/orders", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)}
    )

    cartItems.value = [];
  } catch (e) {
    console.log(e);
  } finally {
    isCreatingOrder.value = false;
  }
}
</script>

<template>
  <div @click="onClose" class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-50"></div>
  <div class="bg-white w-110 h-full fixed right-0 top-0 z-20 p-10 m flex flex-col">
    <DrawerHead @on-close="onClose"/>
    <InfoBlock v-if="!totalPrice" title="Cart is empty" description="Check out new sneakers" imageUrl="/package-icon.png"/>

    <CartList v-if="totalPrice"/>
    <DrawerBottom @create-order="createOrder" v-if="totalPrice" :isCreatingOrder="isCreatingOrder"/>
  </div>
</template>