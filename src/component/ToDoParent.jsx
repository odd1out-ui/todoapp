import ToDoItem from './ToDoItem';
import { useContext,createContext } from 'react';
import { ToDoContext } from '../store/ToDoContext';

const ToDoParent=()=>{
    const contextObj=useContext(ToDoContext);
    const todo=contextObj.todo;

    
    
    return (
        <div>
            {todo.map(item=><ToDoItem   todoName={item.name} todoDate={item.date} />)}
        
        </div>

    )
}
export default ToDoParent;