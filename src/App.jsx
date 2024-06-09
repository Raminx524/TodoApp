import { useState } from 'react'

function App() {
  const dummyTodos = [
    { id: '1', title: 'Learn React', isComplete: false },
    { id: '2', title: 'Build a Todo App', isComplete: false },
    { id: '3', title: 'Read JavaScript Documentation', isComplete: true },
    { id: '4', title: 'Write Unit Tests', isComplete: false },
    { id: '5', title: 'Implement Context', isComplete: true },
    { id: '6', title: 'Create Portfolio Website', isComplete: false },
    { id: '7', title: 'Learn TypeScript', isComplete: false },
    { id: '8', title: 'Refactor Codebase', isComplete: true },
    { id: '9', title: 'Optimize Performance', isComplete: false },
    { id: '10', title: 'Deploy to Production', isComplete: true }
  ]

  const [todos, setTodos] = useState(dummyTodos);
  const completedTodos = todos.filter((todo)=>todo.isComplete);
  const activeTodos = todos.filter((todo)=>!todo.isComplete);
  const progressVal = completedTodos.length/todos.length;

  function makeId(length) { 
    let result = ''; const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
    const charactersLength = characters.length;
     for (let i = 0; i < length; i++) { 
    result += characters.charAt(Math.floor(Math.random() * charactersLength)); 
    } 
    return result; 
    }
    
  function onCreateTodo(e){
    e.preventDefault();
    const formElem = e.target;
    const newTodo = {
      id:makeId(3),
      title:formElem.todoTitle.value,
      isComplete:false,
    }
    const newTodos = [...todos,newTodo];
    setTodos(newTodos);
  }
  
  function onDelete(todoId){
    const newTodos = todos.filter((todo)=>todo.id!==todoId);
    setTodos(newTodos);
  }

  function onComplete(todoId,newStatus){
    const newTodos = todos.map((todo)=>{
      if(todo.id === todoId){
        return {...todo,isComplete:newStatus}
      }
      return todo;
    })
    setTodos(newTodos)
  }
  return (todos.length === 0?<>Oops. No Todos Found!</>
    :
    <>
   <h1>My Todos:</h1>
    <div className='todos-summary'><span>Total Todos: {todos.length}</span>
    <span>Completed: {completedTodos.length}</span>
    <span>Left to Complete: {activeTodos.length}</span>
    <div>Progress: <progress value={progressVal}></progress></div>
    </div> 
    <div className="content">
    <div className='todos-container'>
    {todos.map((todo)=>{
        return(
        <div className='todo-item' key={todo.id}>
          <h2>{todo.title}</h2>
          <div className='input-container'>
          <label htmlFor="isTodoComplete">isCompleted?
          </label>
          <input type="checkbox" id='isTodoComplete' checked={todo.isComplete} onChange={(e)=>onComplete(todo.id,e.target.checked)}/>
          <div className='del-btn' onClick={()=>onDelete(todo.id)}>🗑️</div>
          </div>
          </div>)
      })}
    </div>
    <form id='addTodoForm' onSubmit={onCreateTodo}>
          <h1>Add Todo</h1>
          <div className='form-inputs'>
        <label htmlFor="todoTitle">Title:</label>
        <input type="text" id='todoTitle' name='todoTitle'/>
      <button >Add Todo</button>
      </div>
        </form>
    </div>
    </>
  )
}

export default App
