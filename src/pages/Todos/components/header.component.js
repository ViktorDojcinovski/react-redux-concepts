import React, { useState } from "react";

const Header = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleChange}
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            addTodo(text);
          }
        }}
      />
    </header>
  );
};

export default Header;
