import React from 'react';
import Style from './todo.module.css';
const Todo = (props) => {
    const {title, decs,} = props.todoChild;
    const {id} = props;
    const handleClick = (id) =>{
        props.onRemoveTodo(id);
    }
    return (
        <article className={Style.todo}>
            <div>
                <h3>{title}</h3>
                <p>{decs}</p>
            </div>
            <div>
                <button className={Style.btn} onClick={() => {handleClick(id)}}>
                    <i className='fa fa-trash fa-2x'></i>
                </button>
            </div>
        </article>
    );
};

export default Todo;