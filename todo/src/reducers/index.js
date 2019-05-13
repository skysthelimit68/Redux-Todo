import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../actions';

const initialState = {
    items : []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            console.log(action);
            return {
               items: [...state.items, action.payload]

            }
        case DELETE_TODO:
        case COMPLETE_TODO:
            console.log(action);
            return {
                
            }
        default:
            return state;
    }
}


