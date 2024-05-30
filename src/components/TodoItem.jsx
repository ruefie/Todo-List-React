// src/components/TodoItem.jsx
import React from 'react';

const TodoItem = ({ todo, toggleComplete, editTodo, deleteTodo }) => {
  const handleToggle = () => {
    toggleComplete(todo.id);
  };

  const handleEdit = () => {
    editTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className={`todo ${todo.completed ? 'checked' : ''}`}>
      <i
        className={`bi ${todo.completed ? 'bi-check-circle-fill' : 'bi-circle'}`}
        onClick={handleToggle}
      ></i>
      <p onClick={handleToggle}>{todo.text}</p>
      <span>{new Date(todo.date).toLocaleDateString('en-GB')}</span>
      <i className="bi bi-pencil-square" onClick={handleEdit}></i>
      <i className="bi bi-trash" onClick={handleDelete}></i>
    </div>
  );
};

export default TodoItem;
