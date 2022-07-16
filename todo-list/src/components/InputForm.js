import React, { useState } from "react";

export default function InputForm({ setTodos }) {
  const [text, setText] = useState("");

  function addToList() {
    setTodos((currTodos) => {
      const newTodos = currTodos.slice();
      newTodos.push({ id: newTodos.length + 1, item: text, done: false });
      return newTodos;
    });
    setText(() => {
      return "";
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    setText((currText) => {
      let newText = currText;
      newText = e.target.value;
      return newText;
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange}></input>
        <button type="submit" onClick={addToList}>
          Add to list
        </button>
      </form>
    </>
  );
}
