import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { id: 0, text: "Estudar desenvolvimento web", completed: false },
    { id: 1, text: "Estudar francês", completed: false },
    { id: 2, text: "Treinar guitarra", completed: true },
    { id: 3, text: "Ir para a academia", completed: true },
    { id: 4, text: "Meditar", completed: false },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    adicionarMeta: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    marcarConcluida: (state, action) => {},
  },
});

export const { adicionarMeta, marcarConcluida } = todosSlice.actions;
export default todosSlice.reducer;
