import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

*{
    box-sizing: border-box;
}
body{
    background: rgb(247, 247, 247);
    min-width:1210px;
    max-width: 2000px;
    padding: 0;
    margin: 0;
    font-family: 'Pretendard';
    font-size:20px;
    color:#000;
    list-style:none;
}

a{
  text-decoration: none;
  color: inherit;
}
`;  

export default GlobalStyle;
