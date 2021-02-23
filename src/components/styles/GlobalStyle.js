import { createGlobalStyle } from 'styled-components';
import 'fontsource-playfair-display/600.css'; 

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Playfair Display', sans-serif;
    background-color: #FBFAF1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`