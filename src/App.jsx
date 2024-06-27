import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "./Redux/todoSlice";

const App = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((el) => (
        <>
          {el.isEdited ? (
            <input type="text" defaultValue={el.task} />
          ) : (
            <p style={{ color: el.isDone ? "green" : "red" }}> {el.task} </p>
          )}

          {el.isEdited ? (
            <button
              onClick={() => {
                dispatch(editTask(el.id));
              }}
            >
              Save changes
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(editTask(el.id));
              }}
            >
              Edit
            </button>
          )}
        </>
      ))}
    </div>
  );
};

export default App;
