import styled from "styled-components";
import theme from "../../styles/theme";

interface CardBackgroundProps {
    cardInfoHeight: string;
}
interface CardInfoProps {
    cardMargin: string;
}

interface CardTitleProps {
    fontSize: string;
    letterSpacing: string;
    cardMarginBotton: string;
    cardTitleHeight: string;
    lineHeight: string;
}

export const Card4Container = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    height: 43rem;
    transition: 0.3s ease-in;
    &:hover{
        box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.16);
    }
`

export const Card4Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
`;
export const CardInfoBackground = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "cardInfoHeight",
})<CardBackgroundProps>`
    height: ${({ cardInfoHeight }) => cardInfoHeight};
    position: absolute;
    bottom: 0;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 15%,
        rgba(255, 255, 255, 0) 100%
    );
    width: 100%;
    border-radius: 0px 0px 8px 8px;
`;

export const Card4Info = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "cardMargin",
})<CardInfoProps>`
    position: absolute;
    margin: ${({ cardMargin }) => cardMargin};
`;

export const Card4Title = styled.h1.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "fontSize" &&
        prop !== "letterSpacing" &&
        prop !== "cardMarginBotton" &&
        prop !== "cardTitleHeight" &&
        prop !== "lineHeight"
})<CardTitleProps>`
    color: ${theme.colors.texto.branco};
    font-size: ${({ fontSize }) => fontSize};
    letter-spacing: ${({ letterSpacing }) => letterSpacing};
    margin-bottom: ${({ cardMarginBotton }) => cardMarginBotton};
    height: ${({ cardTitleHeight }) => cardTitleHeight};
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical;
    line-height: ${({lineHeight}) => lineHeight};
    cursor: pointer;
`;
