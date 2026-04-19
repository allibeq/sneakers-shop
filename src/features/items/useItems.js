import { useItemsStore } from "@/entities/item/items.store.js";
import { itemsApi } from "@/shared/api/itemsApi.js";

export function useItems() {
    const store = useItemsStore();

    const fetchItems = async (filters) => {
        try {
            store.setLoading(true);

            const items = await itemsApi.getAll(filters);
            store.setItems(items);
        } catch (e) {
            console.log(e);
        } finally {
            store.setLoading(false);
        }
    }

    return {
        fetchItems,
    }
}