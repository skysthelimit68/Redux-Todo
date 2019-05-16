export const ADD_TODO = "ADD_TODO";

export const DELETE_TODO = "DELETE_TODO";

export const COMPLETE_TODO = "COMPLETE_TODO";

//new todo object
export const addTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

//delete individual item
export const deleteTodo =  (itemId)=> {
    return {
        type: DELETE_TODO,
        payload: itemId
    }
}

//toggle status true or false
export const completeTodo = (itemId) => {
    return {
        type: COMPLETE_TODO,
        payload: itemId
    }
}