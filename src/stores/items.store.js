import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useItemsStore = defineStore('items', () => {
    const items = ref([]);
    const isLoading = ref(false);
    const error = ref(null);

    const fetchItems = async (filters) => {
        try {
            isLoading.value = true;

            const params = new URLSearchParams();

            if (filters.sortBy) {
                params.append('sortBy', filters.sortBy);
            }

            if (filters.searchQuery) {
                params.append('title', `*${filters.searchQuery}*`);
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