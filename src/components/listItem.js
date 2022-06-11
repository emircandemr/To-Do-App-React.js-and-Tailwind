import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../store/actions/todoActions";


const ListItem = (props) => {

    const dispatch = useDispatch()
    
    return (

        <div className="flex justify-between py-6 px-6">
            <div className={`flex justify-between items-center ${props.className}`}>

                {!props.item.complete &&  <input type="checkbox" className="cursor-pointer" 
                    checked={props.item.complete}
                    onChange={ () => {
                        dispatch(updateTodo(props.item.id,!props.item.complete))
                    }} />}
               
                <div className="px-3 text-base text-gray-300">{props.item.text}</div>

            </div>
            <div>  

                {!props.item.complete && <div className="text-red-500 text-sm hover:text-red-700 hover:text-base cursor-pointer"
                onClick={ () => {
                    dispatch(deleteTodo(props.item.id))
                }}> DELETE</div>}
                

            </div>

        </div>

    )
}


export default ListItem