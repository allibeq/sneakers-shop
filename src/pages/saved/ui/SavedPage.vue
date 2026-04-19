<template>
  <PageHeader v-model="filters">Saved items</PageHeader>
  <CardList :items="favSorted" @add-to-favorite="toggleFavorite"
            @add-to-cart="toggleCart"/>
</template>

<script setup>
import { onMounted } from "vue";
import CardList from "../../../widgets/product-list/CardList.vue";
import {useCartStore} from "@/entities/cart/cart.store.js";
import PageHeader from "../../../features/filters/PageHeader.vue";
import {useFiltersLogic} from "@/features/filters/useFiltersLogic.js";
import {useFavorites} from "@/features/favourites/useFavourites.js";
import {useItems} from "@/features/items/useItems.js";
import {useFavSorted} from "@/features/favourites/useFavSorted.js";
import {useCart} from "@/features/cart/useCart.js";

const cartStore = useCartStore();
const { toggleCart } = useCart();

const { fetchItems } = useItems();

const { toggleFavorite, fetchFavorites } = useFavorites();
const { favSorted } = useFavSorted();

const { filters } = useFiltersLogic(
    fetchItems
);

onMounted(async () => {
  await fetchFavorites();
});
</script>
