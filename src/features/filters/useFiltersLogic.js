import debounce from 'lodash.debounce';
import { reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export function useFiltersLogic(fetchItems) {

    const route = useRoute();
    const router = useRouter();

    const filters = reactive({
        sortBy: route.query.sortBy || 'name',
        searchQuery: route.query.searchQuery || ''
    });

    const debouncedFetch = debounce(() => {
        fetchItems(filters);
    }, 500);

    const onSortChange = () => {
        fetchItems(filters);
    };

    const onSearchChange = () => {
        debouncedFetch();
    };

    watch(
        () => filters.sortBy,
        (sortBy) => {
            router.replace({
                query: {
                    ...route.query,
                    sortBy: sortBy || undefined
                }
            });

            onSortChange(filters);
        },
        { immediate: true }
    );

    watch(
        () => filters.searchQuery,
        (searchQuery) => {
            router.replace({
                query: {
                    ...route.query,
                    searchQuery: searchQuery || undefined
                }
            });

            onSearchChange(filters);
        }
    );

    return {
        filters
    };
}