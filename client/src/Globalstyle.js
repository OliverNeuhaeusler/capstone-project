import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
    --PrimaryBorder: goldenrod;
    --PrimaryButtonDark: hsl(158, 18%, 30%);
    --PrimaryButtonLight: hsla(158, 18%, 30%, 0.3);
    --PrimaryCard: hsla(142, 30%, 25%, 0.6);
}

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
