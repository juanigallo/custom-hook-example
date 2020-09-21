import React from "react";
import { usePassword } from "./hooks/password";

function App() {
  const [isValid, handleChange] = usePassword(5);

  return (
    <>
      <input type="text" onChange={handleChange} />
      {isValid ? <p>CONTRASENA VALIDA</p> : <p>CONTRASENA INVALIDA</p>}
    </>
  );
}

export default App;
