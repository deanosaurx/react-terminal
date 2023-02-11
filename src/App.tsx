import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TerminalController from "./Components/Terminal/TerminalController";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="App"></div>
      <div className="Terminal">
        <TerminalController />
      </div>
    </div>
  );
}

export default App;
