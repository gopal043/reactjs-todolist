import { useState , useEffect} from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";


function App() {


let [todos, setTodos] = useState([]);
let [todoValue, setTodoValue] = useState('');

function persistData(newList){
  localStorage.setItem('todos',JSON.stringify( newList));
}

function handleAddTodo(newTodo){
      if(newTodo){
       const newTodoList = [...todos,newTodo];
       persistData(newTodoList);
       setTodos(newTodoList);

      }
}

function handleDeleteTodo(index){
     
      const newTodoList = todos.filter((todo, indexTodo) => {
             return index !== indexTodo
            })
            persistData(newTodoList);
          setTodos(newTodoList);
}

function handleEditTodo(index){
   
      let valueToBeEdited = todos[index];
          setTodoValue(valueToBeEdited); 
       
      handleDeleteTodo(index);
}


useEffect(() => {

  if(!localStorage){
      return
  }

  let localTodos = localStorage.getItem('todos');

  if(!localTodos){
   return
  }
   
  localTodos = JSON.parse(localTodos);
  setTodos(localTodos);


},[])


  return (
       <>
       
       <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTod={handleAddTodo} />
       <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
       </>
       
  );
}

export default App;
