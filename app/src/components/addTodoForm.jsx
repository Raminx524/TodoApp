async function addTodo(todo){
const URL = 'http://localhost:8001/todos'
try{
    await fetch(URL,{
        method:"POST",
        headers:{'Content-Type': "application/json"},
        body:JSON.stringify(todo)
    })
} catch(err){
    console.log(err);
}
}

function AddForm(props) {
  function onCreateTodo(e) {
    e.preventDefault();
    const formElem = e.target;
    const newTodo = {
      id: makeId(3),
      title: formElem.todoTitle.value,
      isComplete: false,
    };
    const newTodos = [...props.todos, newTodo];
    props.setTodos(newTodos);
    addTodo(newTodo);
  }
  function makeId(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <form id="addTodoForm" onSubmit={onCreateTodo}>
      <h1>Add Todo</h1>
      <div className="form-inputs">
        <label htmlFor="todoTitle">Title:</label>
        <input type="text" id="todoTitle" name="todoTitle" />
        <button>Add Todo</button>
      </div>
    </form>
  );
}

export default AddForm;
