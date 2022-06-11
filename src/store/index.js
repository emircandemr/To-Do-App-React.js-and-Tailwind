import todoReducer from "./reducers/todoReducer";

import { combineReducers } from "redux";

import { configureStore } from '@reduxjs/toolkit'


const reducer = combineReducers( {

    todo: todoReducer

} )

export const store = configureStore({reducer:reducer})

