import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
    const cartItems = ref([]);

    const totalPrice = computed(() =>
        cartItems.value.reduce((sum, item) => sum + item.price, 0)
    );

    const isAdded = (itemId) => {
        return cartItems.value.some(item => item.id === itemId);
    };

    const addToCart = (item) => {
        if (!isAdded(item.id)) {
            item.isAdded = true;
            cartItems.value.push(item);
        }
    };

    const removeFromCart = (item) => {
        item.isAdded = false;
        cartItems.value = cartItems.value.filter(i => i.id !== item.id);
    };

    const toggleCart = (item) => {
        if (isAdded(item.id)) {
            removeFromCart(item);
        } else {
            addToCart(item);
        }
    };

    return {
        cartItems,
        totalPrice,
        isAdded,
        addToCart,
        removeFromCart,
        toggleCart
    };
});