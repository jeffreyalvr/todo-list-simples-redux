const Box = () => {
  const todos = [
    { text: "Estudar desenvolvimento web", completed: false, id: 0 },
    { text: "Estudar francês", completed: false, id: 1 },
    { text: "Treinar guitarra", completed: true, id: 2 },
    { text: "Ir para a academia", completed: true, id: 3 },
    { text: "Meditar", completed: false, id: 4 },
  ];
  return (
    <div className="container flex flex-col">
      <div className="flex flex-col p-10 rounded-md border-2 text-xl">
        {!todos.length ? (
          <span>Sem todos disponíveis para exibição.</span>
        ) : (
          todos.map((todo) => (
            <div className="flex flex-row gap-3">
              <input type="checkbox" checked={todo.completed} />
              <span>{todo.text}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Box;
