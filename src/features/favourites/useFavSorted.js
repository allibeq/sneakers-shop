import {useItemsStore} from "@/entities/item/items.store.js";
import {useFavoritesStore} from "@/entities/favourite/favourite.store.js";
import {useCartStore} from "@/entities/cart/cart.store.js";
import {computed} from "vue";

export function useFavSorted() {
    const itemsStore = useItemsStore();
    const favoritesStore = useFavoritesStore();
    const cartStore = useCartStore();

    const favSorted = computed(() => {
        const favMap = new Map(
            favoritesStore.favorites.map(item => [item.item_id, item])
        );

        return itemsStore.items
            .filter(item => favMap.has(item.id))
            .map(item => ({
                ...item,
                isFavourite: true,
                isAdded: cartStore.isAdded(item.id)
            }));
    })

    return {
        favSorted,
    }
}