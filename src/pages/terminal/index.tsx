import {TerminalWrapper, Prompt, Command, Output, CommandRow, padding, lineHeight} from "./terminal.styles";
import React, { useEffect, useRef, useState } from "react";
import { graphql, navigate } from "gatsby"

import ScanLines from "../../components/ScanLines.styles";
import Helmet from "../../layouts/Helmet";

const MAX_HISTORY_LENGTH = 50
// Allows extra buffer of lines before removing them from the array
const OUTPUT_LINE_BUFFER = 20
const FILE_COUNT_WIDTH = 4
const COMMANDS = {
  cat: "Displays the contents of a file",
  cd: "Changes the current directory",
  clear: "Clears the terminal output",
  exit: "Exits the terminal",
  help: "Displays this help message",
  ls: "Lists files in the current directory",
  open: "Opens a file",
  sudo: "Executes a command as root",
}
const formatDate = (date: Date): string => {
  const formattedDate = new Date(date);
  const formattedDay = formattedDate.toLocaleString('en-US', { day: 'numeric', month: 'short' });
  const formattedTime = formattedDate.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
  return `${formattedDay} ${formattedTime}`;
}
const ROOT_LISTING = {
  "root": [
    // ["drwxr-xr-x", "4", "root", "root", "4096", "Jun 20 16:53", "blog"],
    ["-rwxrwxr-x", "1", "root", "root", "4096", "Jun 20 16:53", "index.html"],
    ["-rwxrwxr-x", "1", "root", "root", "4096", "Jun 20 16:53", "README.md"],
    ["-rwxrwxr-x", "1", "root", "root", "4096", "Jun 20 16:53", "package.json"],
    ["drwxr-xr-x", "4", "root", "root", "4096", "Jun 20 16:53", "public"],
    ["drwxr-xr-x", "4", "root", "root", "4096", "Jun 20 16:53", "now"],
  ],
  "now": [
    ["-rwxrwxr-x", "1", "root", "root", "4096", "Jun 20 16:53", "index.html"],
    ["-rwxrwxr-x", "1", "root", "root", "4096", "Jun 20 16:53", "README.md"],
  ],
  "blog": [
    ["-rwxrwxr-x", "1", "root", "root", "4096", "Jun 20 16:53", "index.html"],
    ["-rwxrwxr-x", "1", "root", "root", "4096", "Jun 20 16:53", "README.md"],
  ]
}

const INITIAL_OUTPUT = [
  "Welcome to Chris OS!",
  "Type 'help' for a list of commands",
  "",
  "Example:",
  "ls",
  "cd now",
  "open",
  "",
  `Today is ${new Date().toDateString()}`,
  "",
]
const readTimeout = 1000
const playBeep = () => {
  const audio = new Audio('/beep.mp3');
  audio.loop = false;
  audio.play();
}
const playFloppy = () => {
  const audio = new Audio('/floppy_disk.mp3');
  audio.loop = false;
  audio.play();
}
const playNaughty = () => {
  const audio = new Audio('/dennis.mp3');
  audio.loop = false;
  audio.play();
}
const Terminal = ({ data }) => {
  const [terminalOutput, setTerminalOutput] = useState<Array<string | React.ReactElement>>(INITIAL_OUTPUT);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentDirectory, setCurrentDirectory] = useState<string>("root");
  const [commandHistoryPointer, setCommandHistoryPointer] = useState<number | null | undefined>(null);
  const [numOutputLines, setNumOutputLines] = useState<number>(10);
  const commandInputRef = useRef<HTMLInputElement>(null);
  const terminalContainerRef = useRef<HTMLDivElement>(null);
  const outputContainerRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    playBeep();

    // TODO: fix this re-rendering when user navigates away and back, ROOT_LISTING does not reset
    data.blog.posts.map((post) => {
      const file = post.fileAbsolutePath.split("/").pop()
      ROOT_LISTING["blog"].push(["-rwxrwxr-x", "1", "root", "root", "4096", formatDate(new Date(post.frontmatter.date)), file])
    })
  }, []);

  useEffect(() => {
    if(outputContainerRef.current) {
      outputContainerRef.current.scrollTop = outputContainerRef.current?.scrollHeight;
    }
  },[terminalOutput])

  
  useEffect(() => {
    if(commandHistoryPointer !== undefined && commandHistoryPointer !== null && commandInputRef.current) {
      commandInputRef.current.focus()
      commandInputRef.current.value = commandHistory[commandHistoryPointer]
    } else if (commandHistoryPointer === null && commandInputRef.current) {
      commandInputRef.current.value = ""
    }
  },[commandHistoryPointer])

  useEffect(() => {
    const terminalHeight = terminalContainerRef.current?.clientHeight ?? 0;
    const calculatedLines = Math.floor((terminalHeight - (padding * 2)) / lineHeight) + OUTPUT_LINE_BUFFER;
    setNumOutputLines(calculatedLines);
  }, [terminalContainerRef.current?.clientHeight]);

  useEffect(() => {
    commandInputRef.current?.focus()
  },[commandInputRef.current])

/**
 * Prints a list of rows with evenly spaced columns.
 *
 * @param {string[][]} rows - The list of rows to print.
 * @return {void} This function does not return anything.
 */
  const printList = (rows: string[][]): void => {
    const columnWidths: number[] = rows[0].map((_, index) =>
      Math.max(...rows.map(row => row[index] ? row[index].length : 0))
    );

    rows.forEach(row => {
      const formattedRow = row.map((value, index) =>
        value.padEnd(columnWidths[index],"\u00A0")
      );
      appendOutputToTerminal(formattedRow.join('\u00A0\u00A0'));
    });
  }
  const accessDenied = () => {
    playNaughty()
    appendOutputToTerminal("");
    appendOutputToTerminal(<img src="/dennis.gif"/>);
    appendOutputToTerminal("");
  }
  const EXECUTABLE_COMMANDS = {
    clear: () => {
      setTerminalOutput([]);
    },
    ls: (args: string[]) => {
      const directoryListing = ROOT_LISTING[currentDirectory];
      const options = args[0] || '';

      switch (options) {
        case '-l':
          printList(directoryListing);
          break;
        case '-la':
          const extendedListing = [
            ['drwxr-xr-x', '2', 'root', 'root', '4096', 'Jun 20 16:53', '.'],
            ['drwxr-xr-x', '8', 'root', 'root', '4096', 'Jun 20 16:53', '..'],
            ...directoryListing
          ];
          printList(extendedListing);
          break;
        default:
          const formattedListing = directoryListing.reduce((acc, cur, i) => {
            if (i % FILE_COUNT_WIDTH === 0) {
              acc.push([]);
            }
            acc[acc.length - 1].push(cur[cur.length - 1]);
            return acc;
          }, []);
          printList(formattedListing);
          break;
      }
    },
    cd: (args: string[]) => {
      const targetDirectory = args[0];

      if (ROOT_LISTING[targetDirectory]) {
        setCurrentDirectory(targetDirectory || "root");
      } else if (targetDirectory === "..") {
        setCurrentDirectory("root");
      } else {
        const errorMessage = `cd: no such file or directory: ${targetDirectory}`;
        appendOutputToTerminal(errorMessage);
      }
    },
    sudo: accessDenied,
    ssh: accessDenied,
    mkdir: (directoryNames: string[]) => {
      const [directoryName] = directoryNames;
      const errorMessage = `mkdir: cannot create directory '${directoryName}': Permission denied`;
      appendOutputToTerminal(errorMessage);
    },
    touch: (fileNames: string[]) => {
      const [fileName] = fileNames;
      const errorMessage = `touch: cannot touch '${fileName}': Permission denied`;
      appendOutputToTerminal(errorMessage);
    },
    open: (args: string[]) => {
      const targetFile = args[0];
      playFloppy()
      if (targetFile === "index.html" || !targetFile) {
        appendOutputToTerminal("Opening index.html...");
        const destination = currentDirectory === "root" ? "" : currentDirectory;
        setTimeout(() => {
          navigate(`/${destination}`);
        }, readTimeout);
      } else {
        const foundFile = ROOT_LISTING[currentDirectory].find((file) => {
          return file[6] === targetFile
        })

        if(foundFile){
          appendOutputToTerminal(`Opening ${targetFile}...`);
          setTimeout(() => {
            navigate(`/${currentDirectory}/${targetFile.split('.')[0]}`);
          }, readTimeout);
        } else {
          appendOutputToTerminal(`Opening ${targetFile}...`);
          const errorMessage = `open: no such file or directory: ${targetFile}`;
          setTimeout(() => {
            appendOutputToTerminal(errorMessage);
          }, readTimeout);
        }
      }
    },
    help: () => {
      const formattedCommands = Object.entries(COMMANDS).map(([command, description]) => {
        return `${command}: ${description}`;
      });
      const helpText = ['', ...formattedCommands, ''];
      appendOutputToTerminal(helpText);
    },
    exit: () => {
      playFloppy()
      setTerminalOutput([...terminalOutput, "Exiting the terminal"])
      setTimeout(() => {
        navigate(`/`);
      }, readTimeout);
    },
    cat: () => {
      setTerminalOutput([...terminalOutput, "cat: Not implemented yet"])
    },
  }
  /**
   * Handles key down events in the terminal input field.
   *
   *  Handles the Enter key by executing the current command, and the
   *  ArrowUp and ArrowDown keys by navigating through the command history.
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} event - The key down event.
   * @return {void}
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key, currentTarget } = event;
    const { value } = currentTarget;

    if (key === "Enter") {
      const command = value.trim();
      currentTarget.value = "";
      setCommandHistoryPointer(undefined);
      executeCommand(command);
    } else if (key === "ArrowUp" && commandHistory.length > 0) {
      setCommandHistoryPointer((prevPointer) =>
        prevPointer === undefined || prevPointer === null
          ? commandHistory.length - 1
          : Math.max(0, prevPointer - 1)
      );
    } else if (key === "ArrowDown" && commandHistory.length > 0) {
      setCommandHistoryPointer((prevPointer) =>
        prevPointer === undefined
          ? 0
          : prevPointer !== null && prevPointer < commandHistory.length - 1
          ? prevPointer + 1
          : null
      );
    }
  };


  /**
   * Executes a command in the terminal.
   *
   * Updates the command history, parses the command and its arguments, and
   * executes the corresponding function if it exists. If the command is empty
   * or unknown, appends an appropriate message to the terminal output.
   *
   * @param {string} command - The command to be executed.
   * @return {void}
   */
  const executeCommand = (command: string) => {
    if (command !== '') {
      setCommandHistory((previousHistory) => {
        const newHistory = previousHistory.length > MAX_HISTORY_LENGTH
          ? previousHistory.slice(1)
          : previousHistory;
        return [...newHistory, command];
      });
    }

    const [commandName, ...commandArguments] = command.split(' ');

    if (EXECUTABLE_COMMANDS[commandName]) {
      appendOutputToTerminal(`${renderPrompt()} ${command}`);
      EXECUTABLE_COMMANDS[commandName](commandArguments);
    } else if (command === '') {
      appendOutputToTerminal('');
    } else {
      appendOutputToTerminal(`Unknown command: ${command}`);
    }
  };

  /**
   * Function to append output to the terminal.
   *
   * @param {string | string[]} newOutput - The new output to append.
   * @return {string[]} The updated output sliced to fit the specified number of lines.
   */
  const appendOutputToTerminal = (newOutput: string | string[] | React.ReactElement) => {
    setTerminalOutput((previousOutput) => {
      const updatedOutput = Array.isArray(newOutput)
        ? [...previousOutput, ...newOutput]
        : [...previousOutput, newOutput];

      return updatedOutput.slice(-numOutputLines);
    });
  }
  const renderOutput = () => {
    return terminalOutput.map((outputLine, index) => (
      <div key={index}>{outputLine}</div>
    ));
  }
  const renderPrompt = (): string => {
    const directoryPath = currentDirectory && currentDirectory !== "root" ? `/${currentDirectory}` : "";
    return `guest@chris-os:~${directoryPath}$`;
  }
  return (
    <ScanLines onClick={() => commandInputRef.current?.focus()}>
      <Helmet title="Terminal - Chris OS" />
      <TerminalWrapper ref={terminalContainerRef}>
        <Output ref={outputContainerRef}>{renderOutput()}</Output>
        <CommandRow>
          <Prompt>{renderPrompt()}</Prompt>
          <Command type="text" ref={commandInputRef} onKeyDown={handleKeyDown} className="command" />
        </CommandRow>
      </TerminalWrapper>
    </ScanLines>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        frontmatter {
          date
        }
        fileAbsolutePath
        id
      }
    }
  }
`
export default Terminal
