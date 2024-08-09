import {TerminalWrapper, Prompt, Command, Output, CommandRow, padding, lineHeight} from "./terminal.styles";
import React, { useEffect, useRef, useState } from "react";

import ScanLines from "../../components/ScanLines.styles";
import Helmet from "../../layouts/Helmet";

const MAX_HISTORY_LENGTH = 50
// Allows extra buffer of lines before removing them from the array
const OUTPUT_LINE_BUFFER = 20
const FILE_COUNT_WIDTH = 2
const COMMANDS = {
  clear: "Clears the terminal output",
  ls: "Lists files in the current directory",
  help: "Displays this help message",
  exit: "Exits the terminal",
}
const ROOT_LISTING = {
  "root": [
    ["-rwxrwxr-x", "1", "root", "root", "4096", "Jun 20 16:53", "README.md"],
    ["-rwxrwxr-x", "1", "root", "root", "4096", "Jun 20 16:53", "index.html"],
    ["drwxr-xr-x", "4", "root", "root", "4096", "Jun 20 16:53", "public"],
    ["-rwxrwxr-x", "1", "root", "root", "4096", "Jun 20 16:53", "package.json"],
    ["-rwxrwxr-x", "1", "root", "root", "4096", "Jun 20 16:53", "package-lock.json"],
    ["drwxr-xr-x", "4", "root", "root", "4096", "Jun 20 16:53", "work"],
    ["-rwxrwxr-x", "1", "root", "root", "4096", "Jun 20 16:53", "index.tsx"]
  ],
  "work": [
    ["-rwxrwxr-x", "1", "root", "root", "4096", "Jun 20 16:53", "README.md"],
    ["-rwxrwxr-x", "1", "root", "root", "4096", "Jun 20 16:53", "index.html"],
    ["drwxr-xr-x", "4", "root", "root", "4096", "Jun 20 16:53", "public"],
  ]
}

const PRINT_COMMANDS = {
  ls: (directory = "root") => {
    const matrix = ROOT_LISTING[directory].reduce((acc: string[][], cur, i) => {
      if(i % FILE_COUNT_WIDTH === 0) {
        acc.push([])
      }
      acc[acc.length - 1].push(cur[cur.length-1])
      return acc
    }, [])
    return matrix
  },
  "ls-l": (directory = "root") => ROOT_LISTING[directory],
  "ls-la": (directory = "root") => [["drwxr-xr-x", "2", "root", "root", "4096", "Jun 20 16:53", "."],["drwxr-xr-x", "8", "root", "root", "4096", "Jun 20 16:53", ".."],...ROOT_LISTING[directory]]
}
const INITIAL_OUTPUT = [
  "Welcome to Chris OS!",
  "Type 'help' for a list of commands",
  "",
  `Today is ${new Date().toDateString()}`,
  "",
]
const Terminal = () => {
  const [output, setOutput] = useState<string[]>(INITIAL_OUTPUT)
  const [history, setHistory] = useState<string[]>([])
  const [directory, setDirectory] = useState<string>("root")
  const [historyPointer, setHistoryPointer] = useState<number | null>()
  const [lines, setLines] = useState<number>(10)
  const commandDiv = useRef<HTMLInputElement>(null)
  const terminalDiv = useRef<HTMLDivElement>(null)
  const outputDiv = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if(outputDiv.current) {
      outputDiv.current.scrollTop = outputDiv.current?.scrollHeight;
    }
  },[output])
  
  useEffect(() => {
    if(historyPointer !== undefined && historyPointer !== null && commandDiv.current) {
      commandDiv.current.focus()
      commandDiv.current.value = history[historyPointer]
    } else if (historyPointer === null && commandDiv.current) {
      commandDiv.current.value = ""
    }
  },[historyPointer, commandDiv.current])

  const printList = (list: string[][]) => {
    const lengthArray: number[] = []
    list.map((list) => {
      list.map((file, index) => {
        if(lengthArray[index] === undefined || lengthArray[index]< file.length) {
          lengthArray[index] = file.length
        }
      })
    })
    list.map((list, index) => {
      const line = list.map((file, index) => {
        // pad with spaces
        const spaces = "\u00A0".repeat(lengthArray[index] - file.length)
        return file + spaces
      })
      appendOutput(line.join("\u00A0\u00A0"))
    })
  }
  const EXE_COMMANDS = {
    clear: () => {
      clear();
    },
    ls: (args: string[]) => {
      console.log(args[0])
      if(PRINT_COMMANDS[`ls${args[0] || ''}`]) {
        printList(PRINT_COMMANDS[`ls${args[0] || ''}`](directory))
      } else {
        appendOutput(`Unknown command: ls ${args.join(" ")}`);
      }
    },
    cd: (args: string[]) => {
      if(ROOT_LISTING[args[0]]) {
        setDirectory(args[0] || "root");
      } else if(args[0] === "..") {
        setDirectory("root");
      }
    },
    help: () => {
      const helpText = Object.keys(COMMANDS).map((commandString) => {
        const description = COMMANDS[commandString];
        return `${commandString}: ${description}`;
      })
      appendOutput(helpText);
    },
    exit: () => {
      setOutput([...output, "Exiting the terminal"])
    },
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const command = event.currentTarget.value.trim();
      event.currentTarget.value = "";
      setHistoryPointer(undefined)
      handleCommand(command);
    } else if (event.key === "ArrowUp" && history.length > 0) {
      setHistoryPointer((prev) => {
        if(prev === undefined || prev === null) {
          return history.length - 1
        } else if (prev > 0) {
          return prev - 1
        }
        return 0
      })
    } else if (event.key === "ArrowDown" && history.length > 0) {
      setHistoryPointer((prev) => {
        if(prev === undefined) {
          return 0
        } else if (prev !== null && prev < history.length - 1) {
          return prev + 1
        }
        return null
      })
    }
  }

  useEffect(() => {
    const height = terminalDiv.current?.clientHeight || 0
    const lines = (height - (padding*2)) / lineHeight
    setLines(Math.floor(lines) + OUTPUT_LINE_BUFFER)
  },[terminalDiv.current?.clientHeight])

  useEffect(() => {
    commandDiv.current?.focus()
  },[commandDiv.current])

  const handleCommand = (command) => {
    if(command !== "") {
      setHistory((prev) => {
        if(prev.length > MAX_HISTORY_LENGTH) {
          prev.shift()
        }
        return [...prev, command]
      });
    }
    const commandArray = command.split(" ");
    const commandToRun = commandArray.shift()
    if (EXE_COMMANDS[commandToRun]) {
      appendOutput(`${renderPrompt()} ${command}`);
      EXE_COMMANDS[commandToRun](commandArray)
    } else if (commandArray[0] === "cd") {
      if(ROOT_LISTING[commandArray[1]]) {
        setDirectory(commandArray[1] || "root");
      }
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
  const renderPrompt = () => {
    return `guest@chris-os:~${directory && directory !== "root" ? `/${directory}` : ""}$`
  }
  return (
    <ScanLines onClick={() => commandDiv.current?.focus()}>
      <Helmet title="Terminal - Chris OS" />
      <TerminalWrapper ref={terminalDiv}>
        <Output ref={outputDiv}>{renderOutput()}</Output>
        <CommandRow>
          <Prompt>{renderPrompt()}</Prompt>
          <Command type="text" ref={commandDiv} onKeyDown={handleKeyDown} className="command" />
        </CommandRow>
      </TerminalWrapper>
    </ScanLines>
  );
}
export default Terminal
