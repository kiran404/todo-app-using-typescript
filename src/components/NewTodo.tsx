import React, { FormEventHandler, useRef } from 'react'

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);              // useRef is generic
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value;           // tell Ts its fine, it wont be null
        // console.log(enteredText);
        props.onAddTodo(enteredText);
    }
    return <form onSubmit={onSubmitHandler}>    
        <div>
            Todo Text: <input type="text" id="text-todo" ref={textInputRef} />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
}

export default NewTodo;