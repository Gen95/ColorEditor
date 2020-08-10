import { data } from 'stub';
import { getStorage } from 'storage';
import React, { createContext, useContext, useCallback } from 'react';

export const initialState = getStorage("state") || {
    data,
    currentIndexItem: 0
};

export const Context = createContext({state: initialState});

export const useStore = () => {
    const {state, dispatch} = useContext(Context);
    const addColor = useCallback((payload) => dispatch({type: "addColor", payload}), [dispatch]);
    const selectItem = useCallback((payload) => dispatch({type: "selectItem", payload}), [dispatch]);
    const setItemName = useCallback((payload) => dispatch({type: "setItemName", payload}), [dispatch]);
    const setItemType = useCallback((payload) => dispatch({type: "setItemType", payload}), [dispatch]);
    const updateItem = useCallback((payload) => dispatch({type: "updateItem", payload}), [dispatch]);
    const deleteItem = useCallback((payload) => dispatch({type: "deleteItem", payload}), [dispatch]);
    const updateData = useCallback((payload) => dispatch({type: "updateData", payload}), [dispatch]);

    return {state, addColor, selectItem, setItemName, setItemType, updateItem, deleteItem, updateData};
};