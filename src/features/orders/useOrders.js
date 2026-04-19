import { useOrdersStore } from "@/entities/orders/orders.store.js";
import { ordersApi } from "@/shared/api/ordersApi.js";

export function useOrders(cartItems, totalPrice) {
    const store = useOrdersStore();

    const fetchOrders = async () => {
        try {
            const data = await ordersApi.getAll();
            console.log(data);
            store.setOrders(data);
        } catch (e) {
            console.log(e);
        }
    }

    const createOrder = async () => {
        const obj = {
            items: cartItems.value,
            totalPrice: totalPrice.value,
            date: Date.now()
        }

        try {
            store.setCreatingOrder(true);

            const data = await ordersApi.add(obj);
            store.setOrders([...store.orders, data]);

            cartItems.value = [];
        } catch (e) {
            console.log(e);
        } finally {
            store.setCreatingOrder(false);
        }
    }

    return {
        fetchOrders,
        createOrder
    }
}