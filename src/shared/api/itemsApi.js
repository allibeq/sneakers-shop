export const itemsApi = {
    getAll: async (filters) => {
        const params = new URLSearchParams();

        if (filters.sortBy) {
            params.append('sortBy', filters.sortBy);
        }

        if (filters.searchQuery) {
            params.append('title', `*${filters.searchQuery}*`);
        }

        const res = await fetch(
            `https://4c91f87c72e0e424.mokky.dev/items?${params}`
        );

        return res.json();
    }
}