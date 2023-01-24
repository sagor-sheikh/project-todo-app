import React, { useState } from 'react';
import Style from "./Form.module.css";


const Form = (props) => {
    const [todo, setTodo] = useState({title: "", desc: ""});
    const {title, desc} = todo;
    
    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return {...oldTodo, [name]: event.target.value};
        })
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        props.onAddTodo(todo);
        setTodo({title: "", desc: ""});
        
    };
    return (
        <div>
        <form className={Style.form} onSubmit={handleSubmit}>
            <div className={Style["form-field"]}>
                <label className={Style} htmlFor="title">Title:</label>
                <input type="text" name='title' id='title' value={title} onChange={handleChange}/>
            </div>
            <div className={Style["form-field"]}>
                <label htmlFor="desc">Desc:</label>
                <textarea type="text" name='desc' id='desc' value={desc} onChange={handleChange}/>
            </div>
            <button type='submit'>Add Done</button>
        </form>
        </div>
    );
};

export default Form;