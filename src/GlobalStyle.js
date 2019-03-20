import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
    background-color: #F8F8F8;
    margin: 0;
    font-family: arial;
    width: 100vw;
    overflow-x: hidden;
}

submit, button {
cursor: pointer;
}
`

export default GlobalStyle;