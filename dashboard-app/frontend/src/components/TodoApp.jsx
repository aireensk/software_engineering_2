import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

export default function TodoApp() {
  const { tasks, addTask, toggleTask, removeTask } = useTodos();
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Todos</h2>

      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => addTask(name)}>Add</button>

      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            <span onClick={() => toggleTask(t.id)}>
              {t.completed ? "✔" : "❌"} {t.name}
            </span>
            <button onClick={() => removeTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}