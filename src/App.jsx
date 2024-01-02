import { useState } from "react";
import { TodosContext } from "./Contexts/TodosContext";

import "./styles/global.css";

import Header from "./components/Header";
import Box from "./components/Box";
import Footer from "./components/Footer";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "Estudar desenvolvimento web", completed: false, id: 0 },
    { text: "Estudar francês", completed: false, id: 1 },
    { text: "Treinar guitarra", completed: true, id: 2 },
    { text: "Ir para a academia", completed: true, id: 3 },
    { text: "Meditar", completed: false, id: 4 },
  ]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <div className="container flex flex-col gap-10 mx-auto md:w-[40rem]">
        <Header />
        <Box />
        <Footer />
      </div>
    </TodosContext.Provider>
  );
};

export default App;
