import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      { id: uuidv4(), task: "Learn ReactJS", isEdited: false, isDone: false },
    ],
  },
  reducers: {
    editTask: (state, action) => {
      state.todos.map((el) =>
        el.id == action.payload ? (el.isEdited = !el.isEdited) : el.isEdited
      );
    },
  },
});

export default todoSlice.reducer;

export const { editTask } = todoSlice.actions;
