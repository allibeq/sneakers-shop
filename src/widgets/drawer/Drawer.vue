<script setup>
import DrawerHead from "./DrawerHead.vue";
import CartList from "../../entities/cart/CartList.vue";
import InfoBlock from "../../shared/InfoBlock.vue";
import DrawerBottom from "./DrawerBottom.vue";
import {useCartStore} from "@/entities/cart/cart.store.js";
import {storeToRefs} from "pinia";
import {useOrders} from "@/features/orders/useOrders.js";
import {useOrdersStore} from "@/entities/orders/orders.store.js";

defineProps({
  onClose: Function,
});

const cartStore = useCartStore();
const { cartItems, totalPrice } = storeToRefs(cartStore);
const { removeFromCart } = cartStore;

const { isCreatingOrder } = useOrdersStore();
const { createOrder } = useOrders(cartItems, totalPrice);
</script>

<template>
  <div @click="onClose" class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-50"></div>
  <div class="bg-white w-110 h-full fixed right-0 top-0 z-20 p-10 m flex flex-col">
    <DrawerHead @on-close="onClose"/>
    <InfoBlock v-if="!totalPrice" title="Cart is empty" description="Check out new sneakers" imageUrl="/package-icon.png"/>

    <CartList :items="cartItems" v-if="totalPrice" @remove="removeFromCart"/>
    <DrawerBottom @create-order="createOrder" v-if="totalPrice" :isCreatingOrder="isCreatingOrder"/>
  </div>
</template>