import React from "react";


const Header = ({title}) => {

    return (

        <div className="w-full sm:w-full md:w-full mt-20 flex justify-center items-center">

            <h1 className="text-gray-900 font-extrabold text-5xl tracking-widest">  {title} </h1>

        </div>

    )


}

export default Header