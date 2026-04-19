import { useFavoritesStore } from '@/entities/favourite/favourite.store.js';
import { favoritesApi } from '@/shared/api/favouritesApi';

export function useFavorites() {
    const store = useFavoritesStore();

    const fetchFavorites = async () => {
        try {
            const data = await favoritesApi.getAll();
            store.setFavorites(data);
        } catch (e) {
            console.log(e);
        }
    };

    const toggleFavorite = async (item) => {
        const existing = store.favorites.find(fav => fav.item_id === item.id);

        console.log(item);
        if (!existing) {
            const temp = { item_id: item.id };
            store.favorites.push(temp);

            try {
                const data = await favoritesApi.add(temp);
                debugger
                const index = store.favorites.indexOf(temp);
                if (index !== -1) {
                    store.favorites[index] = data;
                }
                debugger
            } catch (e) {
                console.log(e);
                store.favorites = store.favorites.filter(item => item !== temp);
            }

        } else {
            store.favorites = store.favorites.filter(item => item.id !== existing.id);

            try {
                await favoritesApi.remove(existing.id);
            } catch (e) {
                console.log(e);
                store.favorites.push(existing);
            }
        }
    };

    return {
        fetchFavorites,
        toggleFavorite,
    };
}