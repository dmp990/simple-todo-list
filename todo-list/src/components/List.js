import React, { useState } from "react";
import Delete from "./Delete";
import InputForm from "./InputForm";
import Reset from "./Reset";

export default function List() {
  const [todos, setTodos] = useState([
    { id: 1, item: "learn DOM", done: false },
    { id: 2, item: "go to gym", done: false },
    { id: 3, item: "eat raw kale :|", done: false },
  ]);
  return (
    <>
      <ul>
        {todos.map((itemObj) => (
          <li id={itemObj.id} key={itemObj.id}>
            {itemObj.done === true ? <del>{itemObj.item}</del> : itemObj.item}
            <Delete id={itemObj.id} setTodos={setTodos} />
          </li>
        ))}
      </ul>
      <InputForm setTodos={setTodos} />
      <Reset setTodos={setTodos} />
    </>
  );
}
