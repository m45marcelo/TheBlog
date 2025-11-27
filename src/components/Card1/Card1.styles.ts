import styled from "styled-components";
import theme from "../../styles/theme";

interface Card1ImageProps {
    backgroundImage: string;
}

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

export const Card1Container = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 1rem;

    &:hover{
        box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.16);
    }
`

export const Card1Image = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "backgroundImage",
})<Card1ImageProps>`
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    transition: 0.3s ease-in;

    &:hover{
        cursor: pointer;
        transform: scale(102%);
        transition: 0.3s ease-in;
    }
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
    cursor: pointer;
`;

export const Card1Info = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "cardMargin",
})<CardInfoProps>`
    position: absolute;
    margin: ${({ cardMargin }) => cardMargin};
    @media (min-width: 828px) and (max-width: 1024px){
        height: 86px;
    }
`;

export const Card1Title = styled.h1.withConfig({
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
    -webkit-box-orient: horizontal;
    line-height: ${({lineHeight}) => lineHeight};
    cursor: pointer;

    @media ( min-width: 853px) and ( max-width: 1024px){
        font-size: 16px;
        height: 36px;
        line-height: 120%;
    }
`;
