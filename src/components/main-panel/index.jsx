import React, { useReducer } from 'react';
import { ColorPickerPanel, ColorList } from 'components';
import { Context, initialState } from 'store';
import { reducer } from 'store/reducer';

import './styles.scss'

export const MainPanel = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{dispatch, state}}>
            <div class="main-panel">
                <div className="main-panel__col">
                    <ColorPickerPanel />
                </div>
                <div className="main-panel__col">
                    <ColorList />
                </div>
            </div>
        </Context.Provider>
    )
}