import styled from 'styled-components'
import Img from "gatsby-image";
export const Heading = styled.h1`
margin-bottom: 20px;
`
export const Image = styled(Img)`
  width: 30vh;
  position: fixed !important;
  bottom:0;
`
export const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  text-align: center; 
  height: 100vh;
  position: relative;
  max-width: 800px;
  margin: auto;
`
export const Content = styled.div`
  text-align: left;
  width: 100%;
  padding-bottom: 200px;
`
export default Heading