<template>
  <PageHeader v-model="filters">Saved items</PageHeader>
  <CardList :items="favSorted" @add-to-favorite="toggleFavorite"
            @add-to-cart="toggleCart"/>
</template>

<script setup>
import {computed, onMounted} from "vue";
import CardList from "../../../widgets/product-list/CardList.vue";
import {useItemsStore} from "../../../entities/item/items.store.js";
import {storeToRefs} from "pinia";
import {useFavoritesStore} from "../../../entities/favourite/favourite.store.js";
import {useCartStore} from "../../../entities/cart/cart.store.js";
import PageHeader from "../../../features/filters/PageHeader.vue";
import {useFiltersLogic} from "../../../features/filters/useFiltersLogic.js";

const cartStore = useCartStore();
const { toggleCart } = cartStore;

const store = useItemsStore();
const { items } = storeToRefs(store);
const { fetchItems } = store;

const favStore = useFavoritesStore();
const {favorites} = storeToRefs(favStore);
const { toggleFavorite, fetchFavorites } = useFavoritesStore();

const { filters } = useFiltersLogic(
    fetchItems
);

onMounted(async () => {
  await fetchFavorites();
})

const favSorted = computed(() => {
  const favMap = new Map(
      favorites.value.map(item => [item.item_id, item])
  );

  return items.value
      .filter(item => favMap.has(item.id))
      .map(item => ({
        ...item,
        isFavourite: true,
        isAdded: cartStore.isAdded(item.id)
      }));
})
</script>
