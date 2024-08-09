import {TerminalWrapper, Prompt, Command, Output, CommandRow} from "./terminal.styles";
import React, { useEffect, useRef, useState } from "react";

import ScanLines from "../../components/ScanLines.styles";

const MAX_HISTORY_LENGTH = 10
// Allows extra buffer of lines before removing them from the array
const OUTPUT_LINE_BUFFER = 20
const COMMANDS = {
  clear: "Clears the terminal output",
  ls: "Lists files in the current directory",
  help: "Displays this help message",
  exit: "Exits the terminal",
}
const PRINT_COMMANDS = {
  ls: [
    "README.md",
    "src",
    "public",
    "package.json",
    "package-lock.json",
    "index.html",
    "index.tsx",
  ]
}
const INITIAL_OUTPUT = [
  "Welcome to the Chris OS!",
  "Type 'help' for a list of commands",
  "",
  `Today is ${new Date().toDateString()}`,
  "",
]
const Terminal = () => {
  const [output, setOutput] = useState<string[]>(INITIAL_OUTPUT)
  const [history, setHistory] = useState<string[]>([])
  const [lines, setLines] = useState<number>(10)
  const commandDiv = useRef<HTMLInputElement>(null)
  const terminalDiv = useRef<HTMLDivElement>(null)
  const outputDiv = useRef<HTMLDivElement>(null)
  useEffect(() => {
    console.log(output)
    if(outputDiv.current) {
      outputDiv.current.scrollTop = outputDiv.current?.scrollHeight;
    }
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

  useEffect(() => {
    const height = terminalDiv.current?.clientHeight || 0
    const lines = (height - 20) / 27
    setLines(Math.floor(lines) + OUTPUT_LINE_BUFFER)
  },[terminalDiv.current?.clientHeight])

  useEffect(() => {
    commandDiv.current?.focus()
  },[commandDiv.current])

  const handleCommand = (command) => {
    setHistory((prev) => {
      if(prev.length > MAX_HISTORY_LENGTH) {
        prev.shift()
      }
      return [...prev, command]
    });
    if (command === "clear") {
      clear();
    } else if (command === "help") {
      const helpText = Object.keys(COMMANDS).map((commandString) => {
        const description = COMMANDS[commandString];
        return `${commandString}: ${description}`;
      })
      appendOutput(helpText);
    } else if (PRINT_COMMANDS[command]) {
      appendOutput(PRINT_COMMANDS[command]);
    } else if (command === "") {
      appendOutput("");
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
  const appendOutput = (newOutput: string | string[]) => {
    setOutput((prev) => {
      if(prev.length > lines) {
        prev.shift()
      }
      if(Array.isArray(newOutput)) {
        return [...prev, ...newOutput]
      }
      return [...prev, newOutput]
    });
  }
  const renderOutput = () => {
    return output.map((o, i) => <div key={i}>{o}</div>);
  }
  return (
    <ScanLines onClick={() => commandDiv.current?.focus()}>
      <TerminalWrapper ref={terminalDiv}>
        <Output ref={outputDiv}>{renderOutput()}</Output>
        <CommandRow>
          <Prompt>$</Prompt>
          <Command type="text" ref={commandDiv} onKeyDown={handleKeyDown} className="command" />
        </CommandRow>
      </TerminalWrapper>
    </ScanLines>
  );
}
export default Terminal
