import { useEffect, useState } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../services/api";

export const useTodos = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await getTodos();
    setTasks(res.data);
  };

  const addTask = async (name) => {
    const res = await createTodo(name);
    setTasks([...tasks, res.data]);
  };

  const toggleTask = async (id) => {
    const task = tasks.find(t => t.id === id);
    const res = await updateTodo(id, { completed: !task.completed });
    setTasks(tasks.map(t => t.id === id ? res.data : t));
  };

  const removeTask = async (id) => {
    await deleteTodo(id);
    setTasks(tasks.filter(t => t.id !== id));
  };

  return { tasks, addTask, toggleTask, removeTask };
};