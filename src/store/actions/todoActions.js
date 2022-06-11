import { ADD_TODO, SET_TODO_FILTER, DELETE_TODO,COMPLETE_TODO,DELETE_COMPLETED } from "../actionTypes/todoActionTypes";

export const addTodo = (todo) => {

    return {
        type:ADD_TODO,
        payload:todo
    }

}
export const deleteTodo = (id) => {

    return {
        type:DELETE_TODO,
        payload:id
    }
    
}
export const updateTodo = (id,complete) => {

    return {
        type:COMPLETE_TODO,
        payload:{id,complete}
    }
    
}
export const deleteCompleted = (filter) => {
    return {
        type:DELETE_COMPLETED,
        payload :filter
    }
}
export const setFilter = (filter) => {

    return {
        type:SET_TODO_FILTER,
        payload:filter
    }
    
}