import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './todo.model';

const App = () => {
  // const todos = [{ id: 't1', text: 'first todos' }];
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    // console.log(text);
    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString().slice(2,10), text }])
    // console.log('Todos: >>> ' + todos);
  }
  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => {
        console.log(todo,todoId)
        return todo.id !== todoId})
    })

  }
  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  )
}

export default App;