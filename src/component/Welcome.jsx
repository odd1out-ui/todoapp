import {useContext } from "react";
import { ToDoContext } from "../store/ToDoContext";
function Welcomemsg(){
    const {todo}=useContext(ToDoContext);

    if(todo.length===0)
    return(
    <div> 
        <h1 style={{textAlign:"center"}}>Enjoy your day</h1>
        <h3 style={{textAlign:"center"}}>Enter your day schedule in "todo" text 

        </h3>
        </div>
    )

}
export default Welcomemsg;