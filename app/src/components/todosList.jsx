import ItemHandlers from './todoItem.jsx'

function TodoList(props){
    return <>
    <div className='todos-container'>
    {props.todos.map((todo)=>{
        return(
        <div className='todo-item' key={todo.id}>
          <h2>{todo.title}</h2>
          <div className='input-container'>
          <label htmlFor="isTodoComplete">isCompleted?
          </label>
          <ItemHandlers setTodos={props.setTodos} todo={todo} todos={props.todos}/>
          
          </div>
          </div>)
      })}
    </div></>
}

export default TodoList