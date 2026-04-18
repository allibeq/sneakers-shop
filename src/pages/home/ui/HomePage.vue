<template>
  <PageHeader v-model="filters">All sneakers</PageHeader>
  <CardList :items="sortedItems" @add-to-favorite="toggleFavorite"
            @add-to-cart="toggleCart"/>
</template>

<script setup>
import CardList from "../../../widgets/product-list/CardList.vue";
import {computed, onMounted} from "vue";
import PageHeader from "../../../features/filters/PageHeader.vue";
import {useItemsStore} from "../../../entities/item/items.store.js";
import {storeToRefs} from "pinia";
import {useFavoritesStore} from "../../../entities/favourite/favourite.store.js";
import {useCartStore} from "../../../entities/cart/cart.store.js";
import {useFiltersLogic} from "../../../features/filters/useFiltersLogic.js";

const store = useItemsStore();
const { items } = storeToRefs(store);
const { fetchItems } = store;

const favStore = useFavoritesStore();
const { fetchFavorites, toggleFavorite } = useFavoritesStore();

const cartStore = useCartStore();
const { toggleCart } = cartStore;

const { filters } = useFiltersLogic(
    fetchItems
);

const sortedItems = computed(() => {
  return items.value.map(item => {
    return {
      ...item,
      isFavourite: favStore.isFavourite(item.id),
      isAdded: cartStore.isAdded(item.id)
    }
  });
})

onMounted(async () => {
  await fetchFavorites();
});
</script>

