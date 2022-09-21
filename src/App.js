import React, { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./App.css";

const App = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className='div-container'>
      <div className="wrapper">

        <Todo />

        <TodoForm 
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
        

        <TodoList 
        todos={todos} 
        setTodos={setTodos}
        setEditTodo={setEditTodo}
        />

      </div>
    </div>
  );
}

export default App;
