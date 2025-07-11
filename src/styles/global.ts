import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['blue']};
  }

  body {
    background-color: ${props => props.theme['base-background']};
    color: ${props => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, select {
    font-size: 1rem;
    font-weight: 400;
    font-family: "Nunito", sans-serif;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${props => props.theme['blue']};
  }
  
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }
`
