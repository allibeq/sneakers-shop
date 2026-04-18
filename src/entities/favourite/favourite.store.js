import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
    const favorites = ref([]);

    const isFavourite = (itemId) => {
        return favorites.value.some(item => item.item_id === itemId);
    };

    const fetchFavorites = async () => {
        const res = await fetch(
            'https://4c91f87c72e0e424.mokky.dev/favorites'
        );
        favorites.value = await res.json();
    };

    const toggleFavorite = async (item) => {

        const existing = favorites.value.find(i => i.item_id === item.id);
        console.log(existing, 'im here', item);
        if (!existing) {
            const obj = { item_id: item.id };
            favorites.value.push(obj);

            try {
                const res = await fetch(
                    'https://4c91f87c72e0e424.mokky.dev/favorites',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(obj)
                    }
                );

                const data = await res.json();

                const index = favorites.value.findIndex(fav => fav.id === obj.id);
                if (index !== -1) favorites.value[index] = data;

            } catch (e) {
                favorites.value = favorites.value.filter(item => item.id !== obj.id);
                console.log(e);
            }

        } else {
            console.log( 'im here');
            favorites.value = favorites.value.filter(item => item.id !== existing.id);

            try {
                await fetch(
                    `https://4c91f87c72e0e424.mokky.dev/favorites/${existing.id}`,
                    {
                            method: 'DELETE'
                        }
                );
            } catch (e) {
                favorites.value.push(existing);
                console.log(e);
            }
        }
    };

    return {
        favorites,
        isFavourite,
        fetchFavorites,
        toggleFavorite
    };
});