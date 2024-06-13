import { useEffect, useState } from 'react'
import Summarize from './components/todoSummary.jsx';
import TodoList from './components/todosList.jsx';
import AddForm from './components/addTodoForm.jsx'

function App() {
  const TODO_URL = 'http://localhost:8001/todos';
  const [todos, setTodos] = useState([]);
  async function getTodos(){
    const res = await fetch(TODO_URL);
    const todosData = await res.json();
      setTodos(todosData);
  }

  useEffect(()=>{
    console.log(todos);
  },[todos])
  
  useEffect(()=>{
    console.log("Hello User");
    getTodos()
  },[]);

  return (todos.length === 0?<>Oops. No Todos Found!</>
    :
    <>
   <h1>My Todos:</h1>
   <Summarize data={todos}/>
   <div className='content'>
   <TodoList todos={todos} setTodos={setTodos}/>
   <AddForm todos={todos} setTodos={setTodos}/>
   </div>
    </>
  )
}

export default App
