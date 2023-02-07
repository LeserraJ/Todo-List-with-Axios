import axios from "axios";
import React from "react";
import {useState, useEffect} from "react";
import TodoList from "./TodoList.jsx";



function App(){
    const [todos,setTodos] = useState([])


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then((result)=>{console.table(result.data);
        setTodos(result.data);
    });
    }, []);


    return(
    <div><TodoList todos={todos}/></div>);
}


export default App