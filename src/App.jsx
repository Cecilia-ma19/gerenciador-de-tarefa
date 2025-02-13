import { useState } from "react";

function App() {
  const [message, setMesasse] = useState("Olá, mundo");

  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMesasse("Olá, fui clicado!");
        }}
      >
        Mudar mensagem
      </button>
    </div>
  );
}

export default App;
