import {defineStore} from "pinia";
import {ref} from "vue";

export const useOrdersStore = defineStore('orders', () => {

    const orders = ref([]);
    const isCreatingOrder = ref(false);

    const setOrders = (data) => {
        orders.value = data;
    };

    const setCreatingOrder = (data) => {
        isCreatingOrder.value = data;
    };

    return {
        orders,
        setOrders,
        setCreatingOrder
    }
})