export const ordersApi = {
    getAll: async () => fetch(
        "https://4c91f87c72e0e424.mokky.dev/orders")
        .then(res => res.json()),

    add: async (item) => fetch(
        "https://4c91f87c72e0e424.mokky.dev/orders", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }
    ).then(res => res.json()),
}