import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    box-sizing: border-box;
    line-height: 1.5;
    font-family: sans-serif;
}
body {
    background: hsl(37, 19%, 70%);
    margin: 8rem auto;
}
`;
