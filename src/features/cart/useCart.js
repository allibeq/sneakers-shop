import { useCartStore } from '@/entities/cart/cart.store.js';

export function useCart() {
    const store = useCartStore();

    const toggleCart = (item) => {
        if (store.isAdded(item.id)) {
            store.removeFromCart(item.id);
        } else {
            store.addToCart(item);
        }
    };

    return {
        toggleCart
    };
}