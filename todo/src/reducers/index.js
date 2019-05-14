import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../actions';

const localStorageItems = JSON.parse(window.localStorage.getItem("items"));
const localStorageCounter = JSON.parse(window.localStorage.getItem("counter"))

let initialState = {};

if(localStorage.length === 0 ) {
    initialState = {
        items : [],
        counter : 0
    }
} else {
    initialState = {
        items : localStorageItems,
        counter : localStorageCounter
    }
}

export const reducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_TODO:
            console.log(action);
            const newCounter = ++state.counter
            const newItems = [...state.items, {name:action.payload, completed:false, id:state.counter}]
            localStorage.setItem('items', JSON.stringify(newItems));
            localStorage.setItem('counter', newCounter)
            console.log(localStorage.getItem("items"));
            console.log(localStorage.getItem("counter"))

            return {
                ...state,
                items: newItems,
                counter : newCounter,
            }
        case DELETE_TODO:
            console.log(action);
            let reducedItems = state.items.filter(item => item.id !== action.payload)
            localStorage.setItem('items', JSON.stringify(reducedItems))
            return {
                ...state,
                items : reducedItems
            }
        case COMPLETE_TODO:
            console.log(action); 
            let crossedItems = state.items.map(item => item.id !== action.payload ? item : {name:item.name, completed:!item.completed, id:item.id})
            localStorage.setItem('items', JSON.stringify(crossedItems))
            return {
                ...state,
                items : crossedItems
            }
        default:
            return state;
    }

    
}


