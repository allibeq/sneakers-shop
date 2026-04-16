import {defineStore} from "pinia";
import {ref} from "vue";

export const useFiltersStore = defineStore('filters', () => {
    const sortBy = ref('name');
    const searchQuery = ref('');

    return {
        sortBy,
        searchQuery
    };
});