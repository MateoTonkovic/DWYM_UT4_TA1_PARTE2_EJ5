import { useState } from "react";
import "./App.css";

function App() {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleText = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="App">
      <h1>Toggle Text Example</h1>
      <button onClick={toggleText}>
        {isTextVisible ? "Ocultar" : "Mostrar"}
      </button>
      {isTextVisible && <p>Hola.</p>}
    </div>
  );
}

export default App;
