import { useState } from "react";

const Box = () => {
  const [todos, setTodos] = useState([
    { text: "Estudar desenvolvimento web", completed: false, id: 0 },
    { text: "Estudar francês", completed: false, id: 1 },
    { text: "Treinar guitarra", completed: true, id: 2 },
    { text: "Ir para a academia", completed: true, id: 3 },
    { text: "Meditar", completed: false, id: 4 },
  ]);

  const completedTodoStyle = ["line-through italic text-gray-500"];

  const toggleTodo = (todoId) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div className="container flex flex-col">
      <div className="flex flex-col p-10 rounded-md border-2 text-xl">
        {!todos ? (
          <span>Sem todos disponíveis para exibição.</span>
        ) : (
          todos.map((todo) => (
            <div className="flex flex-row gap-3" key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={todo.completed ? completedTodoStyle : undefined}>
                {todo.text}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Box;
