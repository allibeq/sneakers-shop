export const favoritesApi = {
    getAll: () => fetch(
        'https://4c91f87c72e0e424.mokky.dev/favorites')
        .then(res => res.json()),
    add: (item) => fetch(
        'https://4c91f87c72e0e424.mokky.dev/favorites',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }
    ).then(res => res.json()),
    remove: (id) => fetch(
        `https://4c91f87c72e0e424.mokky.dev/favorites/${id}`,
        {
            method: 'DELETE'
        }
    ),
};