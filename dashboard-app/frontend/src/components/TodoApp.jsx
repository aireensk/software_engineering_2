import { useEffect, useState } from "react";
import { getTodos, createTodo, deleteTodo } from "../services/api";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  const handleAdd = async () => {
    await createTodo(newTodo);
    setNewTodo("");
    fetchTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div>
      <h2>Todos</h2>

      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New task"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}