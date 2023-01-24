import React, { useState } from 'react';
import Todos from './Todos';
import Style from './Home.module.css';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const [todos, setTodos] = useState([]);

    const handleTodo = (todo) => {
        setTodos((prevTodo) => {
            return [...prevTodo, {id: uuidv4(), todo}]
        })
    }
    const handleRemoveTodo = (id) => {

        setTodos((prevTodo) =>{
            const filteredTodo = todos.filter((todo) => todo.id === id);
            return filteredTodo;
        })
    }
    
    return (
        <div className={Style.container}>
            <h1 style={{color: 'white'}}>Testing App</h1>
            <Form onAddTodo={handleTodo}/>
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
        </div>
    );
};

export default Home;