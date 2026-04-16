<template>
  <PageHeader>All sneakers</PageHeader>
  <CardList :items="sortedItems" @add-to-favorite="toggleFavorite"
            @add-to-cart="toggleCart"/>
</template>

<script setup>
import CardList from "../components/CardList.vue";
import {computed, onMounted, onUnmounted, watch} from "vue";
import PageHeader from "../components/PageHeader.vue";
import {useItemsStore} from "../stores/items.store.js";
import {storeToRefs} from "pinia";
import {useFavoritesStore} from "../stores/favourite.store.js";
import {useCartStore} from "../stores/cart.store.js";
import debounce from 'lodash.debounce';
import {useFiltersStore} from "../stores/filters.store.js";


const store = useItemsStore();
const { items } = storeToRefs(store);
const { fetchItems } = store;

const favStore = useFavoritesStore();
const { fetchFavorites, toggleFavorite } = useFavoritesStore();

const cartStore = useCartStore();
const { toggleCart } = cartStore;

const filters = useFiltersStore();

const sortedItems = computed(() => {
  return items.value.map(item => {
    return {
      ...item,
      isFavourite: favStore.isFavourite(item.id),
      isAdded: cartStore.isAdded(item.id)
    }
  });
})

const debouncedFetch = debounce(fetchItems, 500);

watch(() => filters.searchQuery, debouncedFetch);
watch(() => filters.sortBy, fetchItems);

onMounted(async () => {
  await fetchItems();
  await fetchFavorites();
});

onUnmounted(() => {
  debouncedFetch.cancel();
});
</script>

