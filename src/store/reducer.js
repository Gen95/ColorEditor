import { initialState } from 'store';
import { setStorage } from 'storage';
import { actions } from 'store/actions';

export const reducer = (state = initialState, action) => {
    const act = actions[action.type];
    const update = act(state, action.payload);
    const newState = {...state, ...update};
    setStorage("state", newState);
    return newState;
}