export const actions = {
    addColor: (state, payload) => {
        return {data: [...state.data, payload]};
    },
    selectItem: (state, payload) => {
        return {currentIndexItem: payload};
    }, 
    setItemName: (state, {name, index}) => {
        const newData = [...state.data];
        newData[index].name = name;

        return {data: newData};
    },
    setItemType: (state, {type, index}) => {
        const newData = [...state.data];
        newData[index].type = type;

        return {data: newData};
    },
    updateItem: (state, {item, index}) => {
        const newData = [...state.data];
        newData[index] = item;

        return {data: newData};
    },
    deleteItem: (state, index) => {
        const dataLength = state.data.length;

        return {
            data: state.data.filter((_, i) => i !== index), 
            currentIndexItem: Math.min(dataLength - 2, state.currentIndexItem)
        }
    },
    updateData: (state, payload) => {
        return {data: payload};
    }
};