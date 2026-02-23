import styled from "styled-components";
import theme from "../../../styles/theme";

interface CategoryCardDivProps {
    isAside: boolean;
}

interface CategoryCardContainerProps {
    backgroundColor: string;
    categoryCardHeight: string;
    categoryCardMaxWidth: string;
}

interface CategoryInfoTextProps {
    fontsize: string;
}

export const CategoryCardDiv = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "isAside"
})<CategoryCardDivProps>`
    display: grid;
    grid-gap: 1.2rem;
    max-width: 29.8rem;
    width: 100%;
    margin-top: ${({isAside}) => isAside ? "0rem" : "1.4rem"};
`
export const CategoryCardContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "backgroundColor" && prop !== "categoryCardHeight" && prop !== "categoryCardMaxWidth"
})<CategoryCardContainerProps>`
    background-color: ${({backgroundColor}) => backgroundColor};
    height: ${({categoryCardHeight}) => categoryCardHeight};
    max-width: ${({categoryCardMaxWidth}) => categoryCardMaxWidth};
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 1rem;
    padding: 0rem 1.4rem;
    align-items: center;
    cursor: pointer;
`

export const CategoryInfoText = styled.h3.withConfig({
    shouldForwardProp: (prop) => prop !== "fontsize"
})<CategoryInfoTextProps>`
    font-size: ${({fontsize}) => fontsize};
    color: ${theme.colors.texto.branco};
    font-weight: 500;
`