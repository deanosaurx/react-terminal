import { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

const TerminalController = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([<TerminalOutput>Welcome to Dean Sorie's live terminal portfilio, </TerminalOutput>]);

  return (
    <div className="terminal-container">
      <Terminal
        prompt="[DEAN-DEVOPS]$"
        name="devops terminal"
        colorMode={ColorMode.Dark}
        onInput={(terminalInput) => {
          console.log(terminalInput);
        }}
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default TerminalController;
