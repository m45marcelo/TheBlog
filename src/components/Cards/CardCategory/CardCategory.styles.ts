import styled from "styled-components";
import theme from "../../../styles/theme";

interface CardCategoryContainerProps {
    backgroundColor: string;
    cardPadding: string;
    cardTop?: string;
    cardLeft: string;
}

interface CardCategoryNameProps {
    fontSize: string;
}

export const CardCategoryContainer = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "backgroundColor" &&
        prop !== "cardPadding" &&
        prop !== "cardTop" &&
        prop !== "cardLeft",
})<CardCategoryContainerProps>`
    position: absolute;
    background-color: ${({backgroundColor}) => backgroundColor};
    padding: ${({cardPadding}) => cardPadding};
    top: ${({cardTop}) => (cardTop) ? cardTop : 'none'};
    left: ${({cardLeft}) => cardLeft};
    border-radius: 6px;
    z-index: 1;
`;


export const CardCategoryName = styled.h6.withConfig({
    shouldForwardProp: (prop) => prop !== "fontSize"
})<CardCategoryNameProps>`
    color: ${theme.colors.texto.branco};
    font-size: ${({fontSize}) => fontSize}
`