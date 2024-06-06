import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }
    
    html {
        font-size: 62.5%;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    p {
        margin: 0;
    }
`