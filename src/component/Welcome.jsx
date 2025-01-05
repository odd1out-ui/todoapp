import {useContext } from "react";
import { ToDoContext } from "../store/ToDoContext";
function Welcomemsg(){
    const {todo}=useContext(ToDoContext);

    if(todo.length===0)
    return <h1>Enjoy your day</h1>
}
export default Welcomemsg;