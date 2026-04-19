import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useItemsStore = defineStore('items', () => {
    const items = ref([]);
    const isLoading = ref(false);

    const setItems = (data) => {
        items.value = data;
    };

    const setLoading = (value) => {
        isLoading.value = value;
    };

    return {
        items,
        isLoading,
        setItems,
        setLoading,
    };
});