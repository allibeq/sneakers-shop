import { defineStore } from 'pinia';
import { ref } from 'vue';
import {useFiltersStore} from "./filters.store.js";

export const useItemsStore = defineStore('items', () => {
    const items = ref([]);
    const isLoading = ref(false);
    const error = ref(null);

    const filtersStore = useFiltersStore();

    const fetchItems = async () => {
        console.log(filtersStore.sortBy, filtersStore.searchQuery, 'AAAAAAA');
        try {
            isLoading.value = true;

            const params = new URLSearchParams();

            if (filtersStore.sortBy) {
                params.append('sortBy', filtersStore.sortBy);
            }

            if (filtersStore.searchQuery) {
                params.append('title', `*${filtersStore.searchQuery}*`);
            }

            const res = await fetch(
                `https://4c91f87c72e0e424.mokky.dev/items?${params}`
            );

            items.value = await res.json();
        } catch (e) {
            error.value = e;
        } finally {
            isLoading.value = false;
        }
    };

    return {
        items,
        isLoading,
        error,
        fetchItems
    };
});