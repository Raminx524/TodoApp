function ItemHandlers(props){
  function onDelete(todoId){
    const newTodos = props.todos.filter((todo)=>todo.id!==todoId);
    props.setTodos(newTodos);
    deleteTodo(todoId);
  }

  async function deleteTodo(id){
    const URL = `http://localhost:8001/todos/${id}`;
    try{
        const res = await fetch(URL,{
            method:"DELETE"
        })
        console.log(res);
    } catch(err) {console.log(err)}
  }
  

    async function updateTodo(todo){
        const URL = `http://localhost:8001/todos/${todo.id}`;
        try{
            const res = await fetch(URL,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(todo)
            })
        } catch(err) {console.log(err)}
    }
    
  function onComplete(todoId,newStatus){
    let newTodo;
    const newTodos = props.todos.map((todo)=>{
      if(todo.id === todoId){
        newTodo ={...todo,isComplete:newStatus}
        return newTodo;

      }
      return todo;
    })
    props.setTodos(newTodos)
    updateTodo(newTodo)
  }

    return (
    <>
    <div className='del-btn' onClick={()=>onDelete(props.todo.id)}>🗑️</div>
    <input type="checkbox" id='isTodoComplete' checked={props.todo.isComplete} onChange={(e)=>onComplete(props.todo.id,e.target.checked)}/>
    </>)
}
export default ItemHandlers