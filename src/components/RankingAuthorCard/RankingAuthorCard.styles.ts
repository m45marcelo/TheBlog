import styled from "styled-components";
import theme from "../../styles/theme";

export const AuthorCardContainerGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
`

export const AuthorCardContent = styled.div`
    display: flex;
    height: 5.4rem;
    align-items: center;
`

export const AuthorCardText = styled.h3`
    font-size: 1.3rem;
    letter-spacing: -0.02rem;
    font-weight: 500;
    color: ${theme.colors.texto.cinza};
`