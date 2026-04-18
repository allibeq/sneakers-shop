import {defineStore} from "pinia";
import {ref} from "vue";

export const useOrdersStore = defineStore('orders', () => {

    const orders = ref([]);

    const fetchOrders = async () => {
        try {
            const res = await fetch("https://4c91f87c72e0e424.mokky.dev/orders");

            orders.value = await res.json();
        } catch (e) {
            console.error(e);
        }
    };

    return {
        orders,
        fetchOrders,
    }
})