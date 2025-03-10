import { useState } from "react";
import "./App.css";

function App() {
  const [resultado, setResultado] = useState("");
  const opciones = ["piedra", "papel", "tijera"];

  const jugar = (eleccionUsuario) => {
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    let mensaje = "";
    if (eleccionUsuario === eleccionComputadora) {
      mensaje = "¡Empate!";
    } else if (
      (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
      (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
      (eleccionUsuario === "tijera" && eleccionComputadora === "papel")
    ) {
      mensaje = "¡Ganaste!";
    } else {
      mensaje = "¡Perdiste!";
    }

    setResultado(`Computadora eligió ${eleccionComputadora}. ${mensaje}`);
  };

  return (
    <div className="container">
      <h1>Piedra, Papel o Tijera</h1>
      <div className="botones">
        {opciones.map((opcion) => (
          <button key={opcion} onClick={() => jugar(opcion)}>
            {opcion === "piedra" ? "🪨" : opcion === "papel" ? "📄" : "✂️"}
          </button>
        ))}
      </div>
      <p>{resultado}</p>
    </div>
  );
}

export default App;
