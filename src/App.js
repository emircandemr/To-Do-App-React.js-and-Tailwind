import React from "react";
import Header from "./components/header"
import Input from "./components/input"
import ListContent from "./components/listContent"


function App() {

  
  return (
        <div>
          
        <Header title="To Do : Lists & Task" />      
        <Input/>

        <ListContent>
        </ListContent>

        </div>
  )
}

export default App;
