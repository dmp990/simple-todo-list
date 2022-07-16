import React from "react";

export default function Delete({ id, setTodos }) {
  const setAsDone = (e) => {
    setTodos((currTodos) => {
      const newTodos = currTodos.slice();
      newTodos[e.target.id - 1].done = true;
      return newTodos;
    });
  };
  return (
    <button id={id} onClick={setAsDone}>
      Done
    </button>
  );
}
