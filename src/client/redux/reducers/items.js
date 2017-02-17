import { SHOW_ITEMS } from '../../actions';

const initialState = {
    list: []
};

export function showItems(state = initialState, action){
    
    switch(action.type){
        case SHOW_ITEMS:
            return Object.assign({}, state, {list: action.payload});
        default:
            return state;
    }
    
}