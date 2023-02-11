import "./App.css";
import TerminalController from "./Components/Terminal/TerminalController";
import Hello from "./Components/Hello/Hello";

function App() {
  return (
    <div className="App">
      <div className="terminal">
        <TerminalController />
      </div>
      <div className="project"></div>
    </div>
  );
}

export default App;
