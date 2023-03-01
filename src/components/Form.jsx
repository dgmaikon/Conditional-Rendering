import React, { useState } from "react";

function Form(props) {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <form className="form" style={{ backgroundColor: "rgba(27, 27, 27, .6" }}>
      <h2>Form Handle MouseOver</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}

      <button
        type="submit"
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Register
      </button>
    </form>
  );
}

export default Form;
