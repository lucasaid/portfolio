import styled from 'styled-components'
export const TerminalWrapper = styled.div`
  height: 100%;
  color: #fff;
  font-family: monospace;
  padding: 10px;
  border-radius: 5px;
  overflow: hidden;
`
export const Prompt = styled.div`
  color: #fff;
  margin-right: 5px;
`
export const Command = styled.input`
  background-color: transparent;
  color: #fff;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: inherit;
  width: 100%;
`
export const Output = styled.div`
  color: rgba(100, 255, 100, 1);
  margin-top: 5px;
  flex: 1;
  overflow-y: hidden;
  max-height: calc(100% - 27px);
  div {
    min-height: 27px;
  }
`
export const CommandRow = styled.div`
  display: flex;
  flex-direction: row;
`