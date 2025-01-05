import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { ToDoContext } from '../store/ToDoContext';

 const ToDoItem=({todoName,todoDate})=>{
    const {handleDelete} =useContext(ToDoContext)
    


    
    return(
                  
            
              
        
        <div class="row kg-row">
          <div class="col-6">
              {todoName}
               </div>
               <div class="col-4">
                  {todoDate}
                   </div>
                         <div class="col-2">
                                 <button type="button" class="btn btn-danger kg-btn" onClick={()=>handleDelete(todoName)}>Delete</button>

                                       </div>
                                       </div>
                                               
                                            
                                               
  
    );
}
export default ToDoItem;