import React, { useEffect, useState } from "react";
import Footer from "./footer"
import ListItem from "./listItem"
import { useSelector } from "react-redux";


const ListContent = () => {

    const {todoList,todoFilter}= useSelector( (state) => state.todo)
    const [list,setList] = useState([])

    useEffect ( () => {
        if(todoFilter==="all"){
            setList(todoList)
            return
        }
        else if(todoFilter==="active"){
            setList(todoList.filter( (x)=> x.complete !== true))
            return
        }
        setList(todoList.filter( (x) => x.complete))
    } , [todoList,todoFilter])


    return ( 

        <div className=" w-full flex justify-center items-center ">
            
            <div className="list-content divide-y divide-slate-700 w-4/5 md:w-2/3 lg:w-1/3 mt-10 rounded-xl border border-white bg-slate-900 flex flex-col text-white">
                
               <div className="list-wrapper  overflow-auto">
                    {list.length<1 && <div className="text-gray-300 tracking-widest text-base p-5 text-center"> To-Do List is Empty </div>}

                    {list.map( (x) => {
                        return (
                            <ListItem 
                            key={x.id}
                            item={x}
                            className = {x.complete ? "completed" : ""}
                            />
                        )
                    })}
                    
               </div>
               <Footer/>
            </div>

        </div>

    )


}


export default ListContent
