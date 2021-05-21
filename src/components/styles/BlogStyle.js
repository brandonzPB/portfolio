import { createGlobalStyle } from 'styled-components';

/*
eggshell: fbfaf1
mint cream: F4FFF8
gold: fecc27
blue: 0070b7
gray: 828282
dark gray: 36434d
*/

export const BlogStyle = createGlobalStyle`
  * {
    background: linear-gradienit(25deg,
      #FFF 0%,
      #ECEBEB 10%,
      #E7E5E5 20%,
      #D5D0D2 40%,
      #C5BFC4 60%,
      #64656E 80%,
      #CECDD5 100%
    );
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`