import React from 'react'

function Summarize(props){
    const completedTodos = props.data.filter((todo)=>todo.isComplete);
    const activeTodos = props.data.filter((todo)=>!todo.isComplete);
    const progressVal = completedTodos.length/props.data.length;
    return (<div className='todos-summary'><span>Total Todos: {props.data.length}</span>
    <span>Completed: {completedTodos.length}</span>
    <span>Left to Complete: {activeTodos.length}</span>
    <div>Progress: <progress value={progressVal}></progress></div>
    </div> )
}

export default Summarize;