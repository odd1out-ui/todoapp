import { createContext } from "react";
import { useReducer } from "react";
export  const ToDoContext=createContext([]);
const todoItemsReducer=(currToDo,action)=>{
    let newtodo=currToDo;
    if(action.type==="NEW_ITEM"){
     newtodo=[...currToDo,{name:action.payload.itemName,date:action.payload.itemDate}];
    }
    else if(action.type==="DELETE_ITEM")
      {
       newtodo=currToDo.filter((item)=>(item.name!=action.payload.itemName))
    }
    return newtodo;
  
  }

const ToDoItemContextProvider=({children})=>{
    const[todo,dispatchToDoItems]=useReducer(todoItemsReducer,[]);

  

const handleNewItem=(itemName,itemDate)=>{

const newItemAction={
  type:"NEW_ITEM",
  payload:{
    itemName,
    itemDate
  }
}
dispatchToDoItems(newItemAction)
}
const handleDelete=(itemName)=>{
const deleteItemAction={
  type:"DELETE_ITEM",
  payload:{
    itemName,
  }
}
dispatchToDoItems(deleteItemAction)
}

return(
    <ToDoContext.Provider value={{todo,
    handleNewItem,
    handleDelete}
    }>
        {children}
    
    </ToDoContext.Provider>
)
}
export default ToDoItemContextProvider;