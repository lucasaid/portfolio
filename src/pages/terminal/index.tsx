import {TerminalWrapper, Prompt, Command, Output, CommandRow} from "./terminal.styles";
import React, { useEffect, useState } from "react";

import ScanLines from "../../components/ScanLines.styles";
const Terminal = () => {
  const [output, setOutput] = useState<string[]>([])
  const [history, setHistory] = useState<string[]>([])
  useEffect(() => {
    console.log(output)
  },[output])
  useEffect(() => {
    console.log(history)
  },[history])
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const command = event.currentTarget.value.trim();
      event.currentTarget.value = "";
      handleCommand(command);
    }
  }

  const handleCommand = (command) => {
    setHistory((prev) => {
      if(prev.length > 10) {
        prev.shift()
      }
      return [...prev, command]
    });
    if (command === "clear") {
      clear();
    } else if (command === "ls") {
      appendOutput(`List files`);
    } else {
      appendOutput(`Unknown command: ${command}`);
    }
  }

  const clear = () => {
    setOutput([]);
  }

  /**
   * Appends the given output to the output element and scrolls to the bottom.
   *
   * @param {string} output - The output to append.
   * @return {void}
   */
  const appendOutput = (newOutput) => {
    setOutput((prev) => [...prev, newOutput]);
  }
  return (
    <ScanLines>
      <TerminalWrapper>
        <CommandRow>
          <Prompt>$</Prompt>
          <Command type="text" onKeyDown={handleKeyDown} className="command" />
        </CommandRow>
        <Output/>
      </TerminalWrapper>
    </ScanLines>
  );
}
export default Terminal
