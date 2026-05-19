import React from "react"
import { graphql } from "gatsby"
import ScanLines from "../../components/ScanLines.styles"
import Helmet from "../../layouts/Helmet"
import { TerminalWrapper, Prompt, Command, Output, CommandRow } from "./terminal.styles"
import { useTerminal, TerminalData } from "./useTerminal"

const Terminal = ({ data }: { data: TerminalData }) => {
  const { terminalOutput, prompt, handleKeyDown, commandInputRef, terminalContainerRef, outputContainerRef } = useTerminal(data)

  return (
    <ScanLines onClick={() => commandInputRef.current?.focus()}>
      <Helmet title="Terminal - Chris OS" />
      <TerminalWrapper ref={terminalContainerRef}>
        <Output ref={outputContainerRef}>
          {terminalOutput.map((line) => (
            <div key={line.id}>{line.content}</div>
          ))}
        </Output>
        <CommandRow>
          <Prompt>{prompt}</Prompt>
          <Command
            type="text"
            ref={commandInputRef}
            onKeyDown={handleKeyDown}
            className="command"
            aria-label="Terminal command input"
            name="command"
            autoComplete="off"
          />
        </CommandRow>
      </TerminalWrapper>
    </ScanLines>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        frontmatter {
          date
        }
        fileAbsolutePath
        rawMarkdownBody
        id
      }
    }
  }
`

export default Terminal
