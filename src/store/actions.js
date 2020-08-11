export const actions = {
    addColor: (state, payload) => {
        const id = state.maxID + 1;
        const item = { ...payload, id };

        return { data: [...state.data, item], maxID: id };
    },
    selectItem: (state, payload) => {
        return { selectIdItem: payload };
    },
    setItemName: (state, { name, id }) => {
        const newData = [...state.data]
            .map((item) => {
                if (item.id === id) {
                    return { ...item, name }
                }
                return item;
            });

        return { data: newData };
    },
    setItemType: (state, { type, id }) => {
        const newData = [...state.data]
            .map((item) => {
                if (item.id === id) {
                    return { ...item, type }
                }
                return item;
            });

        return { data: newData };
    },
    updateItem: (state, { item: newItem, id }) => {
        const newData = [...state.data]
            .map((item) => {
                if (item.id === id) {
                    return newItem
                }
                return item;
            });

        return { data: newData };
    },
    deleteItem: (state, id) => {
        let currentIndex;
        const dataLength = state.data.length;
        const newData = state.data.filter((item, index) => {
            if(item.id !== id) {
                currentIndex = index;
                return true;
            }
        });

        currentIndex = Math.min(currentIndex, dataLength - 1);

        return {
            data: newData,
            selectIdItem: state.data[currentIndex].id
        }
    },
    updateData: (state, payload) => {
        return { data: payload };
    }
};