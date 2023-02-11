import { useState } from "react";
import Terminal, { ColorMode, TerminalInput, TerminalOutput } from "react-terminal-ui";
import Hello from "../Hello/Hello";

const TerminalController = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([<TerminalOutput>Welcome to Dean Sorie's live terminal portfilio, </TerminalOutput>]);

  const handleTerminalInput = (input: any) => {
    input = <TerminalOutput>{input}</TerminalOutput>;
    setTerminalLineData(() => [...terminalLineData, input]);
  };

  return (
    <div>
      <div className="terminal">
        <Terminal
          prompt="[DEAN-DEVOPS]$"
          name="devops terminal"
          colorMode={ColorMode.Dark}
          onInput={(terminalInput) => {
            console.log(terminalInput);
            handleTerminalInput(terminalInput);
          }}
        >
          {terminalLineData}
        </Terminal>
      </div>
      <div className="project">
        <Hello />
      </div>
    </div>
  );
};

export default TerminalController;
