// src/components/TodoForm.jsx
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'izitoast';
import 'izitoast/dist/css/iziToast.css';

import iziToast from 'izitoast';

// Initialize iziToast
iziToast.settings({
  position: 'bottomRight',
});


const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo || !date) {
      if (toast) { // Check if toast is defined
        toast.error({
          title: 'Error',
          message: 'Please enter a valid todo and date.',
        });
      }
      return;
    }
    const newTodo = {
      id: uuidv4(),
      text: todo,
      date,
      completed: false,
    };
    addTodo(newTodo);
    setTodo('');
    setDate('');
    if (toast) { // Check if toast is defined
      toast.success({
        title: 'Success',
        message: 'Todo added successfully!',
      });
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="todoInput" // Add id attribute
        placeholder="Add your list here.."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        type="date"
        id="dateInput" // Add id attribute
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">
        <i className="bi bi-plus-circle-fill"></i>
      </button>
    </form>
  );
};

export default TodoForm;