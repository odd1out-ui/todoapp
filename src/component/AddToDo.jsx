import { useContext, useState } from "react";
import { ToDoContext } from "../store/ToDoContext";

export default function AddToDo(){
  const {handleNewItem}=useContext(ToDoContext);
  const [todoName,settodoName]=useState("");
  const [todoDate,settodoDate]=useState("");
  const handletodoName=(event)=>{
    settodoName(event.target.value);


  }
  const handletodoDate=(event)=>{
    settodoDate(event.target.value);


  }
  const handleAdd=()=>{
    handleNewItem(todoName,todoDate);
    settodoName("");
    settodoDate("");

  }
  
    return(
    <div class="row kg-row">
    <div class="col-6">
      <input type='text' placeholder='Enter ToDo' onChange={handletodoName}/>
    </div>
    <div class="col-4">
      <input type='date' placeholder="Due Date" onChange={handletodoDate}/>
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success kg-btn " onClick={handleAdd}>Add</button>

    </div>
  </div>);
}