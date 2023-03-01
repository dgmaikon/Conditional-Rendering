import React, { useState } from "react";

import Login from "./Login.jsx";
import Input from "./input.jsx";
import Form from "./Form.jsx";
import FormHeading from "./FormHeading.jsx";
import ChangingState from "./ChangingState.jsx";

import "../components/App.css";
import Spread from "./SpreadOperator.jsx";

let userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
      <FormHeading />
      <ChangingState />
      <Spread />
    </div>
  );
}

export default App;
