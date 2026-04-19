import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
    const favorites = ref([]);

    const isFavourite = (itemId) => {
        return favorites.value.some(item => item.item_id === itemId);
    };

    const setFavorites = (data) => {
        favorites.value = data;
    };

    return {
        favorites,
        isFavourite,
        setFavorites,
    };
});