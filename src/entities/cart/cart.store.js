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
            cartItems.value.push(item);
        }
    };

    const removeFromCart = (item) => {
        cartItems.value = cartItems.value.filter(cartItem => cartItem.id !== item.id);
    };

    return {
        cartItems,
        totalPrice,
        isAdded,
        addToCart,
        removeFromCart,
    };
});