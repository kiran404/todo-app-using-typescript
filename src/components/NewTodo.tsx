import React, { FormEventHandler, useRef } from 'react';
import './NewTodo.css';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);              // useRef is generic
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (!textInputRef.current!.value) return;
        const enteredText = textInputRef.current!.value;           // tell Ts its fine, it wont be null
        // console.log(enteredText);
        props.onAddTodo(enteredText);
    }
    return <form onSubmit={onSubmitHandler}>
        <div className="form-control">
            <strong>Todo Text</strong>: <input type="text" id="text-todo" ref={textInputRef} />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
}

export default NewTodo;