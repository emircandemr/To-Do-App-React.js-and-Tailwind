import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter,deleteCompleted} from "../store/actions/todoActions";


const Footer = () => {

    const {todoList} = useSelector( (state) => state.todo)
    const dispatch = useDispatch()
    return (

        <div className="footer w-full flex justify-between items-center sm:px-6 px-3 py-4 h-8 ">
            <div className="cursor-pointer  sm:text-base text-sm text-gray-500 hover:text-blue-500">
                {todoList.filter( (x) => !x.complete).length} İtems Left
            </div>
            <div className="flex ">
                <div className="sm:pr-3 pr-2 sm:text-base text-sm cursor-pointer text-gray-500 hover:text-blue-500" onClick={ () => {
                    dispatch(setFilter("active"))
                }}>
                    Active
                </div>
                <div className="sm:pr-3 pr-2 cursor-pointer sm:text-base text-sm text-blue-500 hover:text-blue-600" onClick={ () => {
                    dispatch(setFilter("all"))
                }}>
                    ALL
                </div>
                <div className="cursor-pointer sm:text-base text-sm text-gray-500 hover:text-blue-500" onClick={ () => {
                    dispatch(setFilter("complete"))
                }}>
                    Completed
                </div>
            </div>
            <div className="cursor-pointer sm:text-base text-sm text-gray-500 hover:text-blue-500" onClick={() => {
                dispatch(deleteCompleted(false))
            }}>
                Clear Completed
            </div>
        </div>

    )
}

export default Footer