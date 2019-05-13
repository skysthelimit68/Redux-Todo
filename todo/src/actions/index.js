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

//new list with completed item excluded
export const deleteTodo = newList => {
    return {
        type: DELETE_TODO,
        payload: newList
    }
}

//toggle status true or false
export const completeTodo = status => {
    return {
        type: COMPLETE_TODO,
        payload: status
    }
}