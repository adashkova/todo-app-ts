import React, { useState, useEffect } from 'react';
import { ITodo } from '../../interfaces';
import { Layout } from 'antd';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

const { Content } = Layout;

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const todosFromStorage = JSON.parse(localStorage.todos || '[]') as ITodo[];
    setTodos(todosFromStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todoTitle: string): void => {
    const newTodo: ITodo = {
      todoTitle,
      id: Date.now(),
      isCompleted: false,
    };

    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: number): void => {
    setTodos(todos =>
      todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  return (
    <Content style={{ height: '93vh' }}>
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />
    </Content>
  );
};

export default TodosPage;
