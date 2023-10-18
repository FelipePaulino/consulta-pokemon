import { createGlobalStyle } from 'styled-components';
 
interface IGlobalStyleProps{
  fontFamily: string;
}

const GlobalStyle = createGlobalStyle<IGlobalStyleProps>`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: ${(props) => props.fontFamily};
}

a{
  text-decoration: none;
}
`;
 
export default GlobalStyle;
