import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        list-style: none;
        text-decoration: none;
    }

    body,html{
        font-size: 62.5%;
        width: 100%;
        height: 100%;
    }

    #root {
    width: 100%;
    height: 100%;
    
}

    hr{
        width: 5.4rem;
        border: 1px solid ${theme.colors.primary};
    }

`;

export default GlobalStyled;
