/** @jsxImportSource react */
import styles from "./Terminal.module.css"
import { useTerminal, type TerminalPost } from "./useTerminal"

const Terminal = ({ posts }: { posts: TerminalPost[] }) => {
  const { terminalOutput, prompt, handleKeyDown, commandInputRef, terminalContainerRef, outputContainerRef } = useTerminal(posts)

  return (
    <div className={styles.scanLines} onClick={() => commandInputRef.current?.focus()}>
      <div className={styles.wrapper} ref={terminalContainerRef}>
        <div className={styles.output} ref={outputContainerRef}>
          {terminalOutput.map((line) => (
            <div key={line.id}>{line.content}</div>
          ))}
        </div>
        <div className={styles.commandRow}>
          <div className={styles.prompt}>{prompt}</div>
          <input
            type="text"
            ref={commandInputRef}
            onKeyDown={handleKeyDown}
            className={`${styles.command} command`}
            aria-label="Terminal command input"
            name="command"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  )
}

export default Terminal
