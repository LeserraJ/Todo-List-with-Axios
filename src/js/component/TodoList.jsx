import React from "react"



const TodoList =({todos})=>{
    return(
        <ul className="list-group">
            {todos.map((todo)=>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {todo.title}
                <input type="checkbox" checked={todo.completed}  onClick={!todo.completed || todo.completed}/>
            </li>)}
        </ul>
    );
}

export default TodoList;