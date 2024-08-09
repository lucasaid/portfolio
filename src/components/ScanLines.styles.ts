import styled, { keyframes } from 'styled-components'

const scanline = keyframes`
  0% {
      transform: translate3d(0,300000%,0);
  }
`
export const ScanLines = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  &:before,
  &:after {
      content: '';
      display: block;
      pointer-events: none;
      position: absolute;
  }
  &:before {
      animation: ${scanline} 6s linear infinite;
      background: rgba(0, 128, 0, .7);
      height: 1px;
      opacity: .75;
      width: 100%;
      z-index: 101;
  }

  &:after {
      animation: none;
      background: linear-gradient(to bottom, transparent 50%, rgba(0, 17, 0, .6) 51%);
      background-size: 100% 2px;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      z-index: 100;
  } 
`
export default ScanLines


