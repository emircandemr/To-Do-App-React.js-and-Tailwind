import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/todoActions";


const Input = () => {

    const [text,setText] = useState("")
    const dispatch = useDispatch()

    return (

        <div className="w-full sm:w-full mt-20 flex justify-center items-center">

            <input type="text" value={text} onChange= { (e) => {setText(e.target.value)}} onKeyPress={ (e) => {
                if(e.key==="Enter" && text.trim() !== ""){
                    dispatch(addTodo( {id:new Date().getTime() ,text,complete:false} ))
                    setText("")
                }
            } }
            autoFocus 
            className="w-4/5 md:w-2/3 lg:w-1/3 px-3 py-2 rounded-xl bg-slate-900 text-white border border-white cursor-pointer shadow-sm shadow-purple-50 focus:shadow-md focus:shadow-gray-800 placeholder:text-gray-400" 
            placeholder="Create New Todo" />

        </div>


    )
}

export default Input