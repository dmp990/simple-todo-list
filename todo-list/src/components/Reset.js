import React from "react";

export default function Reset({ setTodos }) {
  function handleClick() {
    setTodos(() => {
      return [];
    });
  }
  return (
    <>
      <button onClick={handleClick}>Reset the List</button>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload
      </button>
    </>
  );
}
