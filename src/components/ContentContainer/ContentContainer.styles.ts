import styled from "styled-components";
import theme from "../../styles/theme";

interface DivLeftProps {
    maxWidth: string;
}

export const DivLeft = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "maxWidth" 
})<DivLeftProps>`
    background-color: ${theme.colors.fundo};
    height: 100%;
    width: ${({maxWidth}) => maxWidth};

    @media (min-width: 828px) and (max-width: 1024px){
        width: 500px;
    }

    @media  (max-width: 480px){
        width: auto;
    }

`


