import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../actions';

const initialState = {
    items : [],
    counter : 0
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            console.log(action);
            return {
               items: [...state.items, action.payload],
                counter : ++state.counter
            }
        case DELETE_TODO:
            console.log(action);
            let reducedItems = state.items.filter(item => item.id !== action.payload)
            return {
                items : reducedItems
            }
        case COMPLETE_TODO:
            console.log(action); 
            let newItems = state.items.map(item => item.id !== action.payload ? item : {name:item.name, completed:!item.completed, id:item.id})
            return {
                items : newItems
            }
        default:
            return state;
    }
}


