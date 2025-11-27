import styled from "styled-components";
import theme from "../../styles/theme";

interface TagCardItemProps {
    backgrondColor: string;
}

export const TagCardContainer = styled.div`
    max-width: 29.8rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1.4rem 0.8rem;
`

export const TagCardItem = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== "backgrondColor"
})<TagCardItemProps>`
    height: 2.6rem;
    padding: 0.7rem 1.2rem;
    background-color: ${({backgrondColor}) => backgrondColor};
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.02rem;
    border: 0;
    border-radius: 0.6rem;
    color: ${theme.colors.texto.branco};
    display:flex;
    text-align: center;
    align-items: center;
    cursor: pointer;
`