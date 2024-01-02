import { useState, useEffect, useContext } from "react";
import { TodosContext } from "../../Contexts/TodosContext";

const Box = () => {
  const { todos, setTodos } = useContext(TodosContext);

  const [newTodo, setNewTodo] = useState("");
  const [buttonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    if (!newTodo.length) return setButtonEnabled(false);
    setButtonEnabled(true);
  }, [newTodo]);

  const completedTodoStyle = ["line-through italic text-gray-500"];

  const toggleTodo = (todoId) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const getLastId = todos.reduce((highestId, currentTodo) => {
    return currentTodo.id > highestId ? currentTodo : highestId;
  });

  const handleInput = (e) => {
    setNewTodo(e.target.value);
  };

  const handleLimparInput = () => {
    setNewTodo("");
  };

  const handleKeyDown = (e) => {
    if (!buttonEnabled) return;
    if (e.keyCode === 13) handleAdicionar();
  };

  const handleAdicionar = () => {
    if (!buttonEnabled || !newTodo.length) return;

    let newTodoObject = {
      text: newTodo.toString(),
      completed: false,
      id: getLastId,
    };

    setTodos((prevState) => [...prevState, newTodoObject]);
    handleLimparInput();
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
      <div className="flex flex-row gap-3 mt-7">
        <input
          type="text"
          className="px-4 py-1 rounded-md border-2 flex-grow"
          placeholder="Digite algo aqui..."
          value={newTodo}
          onChange={(e) => handleInput(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button
          className={`px-4 py-1 rounded-md ${
            buttonEnabled
              ? ["bg-blue-500 cursor-pointer"]
              : ["bg-gray-400 cursor-default"]
          } text-white font-bold`}
          onClick={handleAdicionar}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Box;
