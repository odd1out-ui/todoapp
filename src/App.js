
import './App.css';
import ReactDOM from 'react-dom/client'
import AddToDo from './component/AddToDo';
import ToDoParent from './component/ToDoParent';
import Welcomemsg from './component/Welcome';
import ToDoName from './component/ToDoName';
import ToDoItemContextProvider from './store/ToDoContext';

function App() {
  
  return (
    <div>
          
         < ToDoItemContextProvider>          
          <ToDoName/>
          <br/>
    
          <AddToDo/>
          <br/>
         <Welcomemsg/>
          <ToDoParent />
        
          </ToDoItemContextProvider>

          
        </div> 
    
       );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
export default App;

