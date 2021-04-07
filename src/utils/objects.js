export const createStore = () => {
    const store = [];

    return {
        addItem: (item) => store.push(item),
        getStore: () => store,
        getById: (id) => store.filter( item => item.id === id)[0]
    }
}