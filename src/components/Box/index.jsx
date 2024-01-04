import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adicionarMeta } from "../../state/todos/todosSlice";

const Box = () => {
  const todos = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState("");
  const [buttonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    if (!newTodo.length) return setButtonEnabled(false);
    setButtonEnabled(true);
  }, [newTodo]);

  const completedTodoStyle = ["line-through italic text-gray-500"];

  const toggleTodo = (todoId) => {
    // TODO: adaptar para o redux
    // setTodos((prevState) =>
    //   prevState.map((todo) =>
    //     todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    //   )
    // );
  };

  const getLastId = (todos) => {
    if (todos.length === 0) return 0;

    return todos.reduce((highestId, currentTodo) => {
      return currentTodo.id > highestId ? currentTodo.id : highestId;
    }, 0);
  };

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

    const lastId = getLastId(todos);

    let newTodoObject = {
      text: newTodo.toString(),
      completed: false,
      id: todos.length === 0 ? 0 : lastId + 1,
    };

    dispatch(adicionarMeta(newTodoObject));
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
