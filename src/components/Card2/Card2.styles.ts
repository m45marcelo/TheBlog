import styled from "styled-components";
import theme from "../../styles/theme";

interface Card2ContainerProps {
    card2height: string;
    card2width: string;
}

interface Card2ImageProps {
    card2Margin?: string;
    backgroundImage: string;
    card2Height: string;
    card2Width: string;
}

interface Card2TitleProps {
    fontSize: string;
    letterSpacing: string;
    cardMargin: string;
    cardTitleHeight?: string;
    lineHeight: string;
    maxWidth: string;
    fontWeight: string;
}

interface CardSubtitleProps {
    fontSize: string;
    letterSpacing: string;
    cardMargin: string;
    cardTitleHeight: string;
    lineHeight: string;
}

export const Card2Container = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "card2height" && prop !== "card2width"
})<Card2ContainerProps>`
    height: ${({ card2height }) => card2height};
    width: ${({ card2width }) => card2width};
    background-color: ${theme.colors.fundo};
    padding: 1.4rem;
    border-radius: 1rem;
    position: relative;
    transition: 0.3s ease-in;
    &:hover{
        box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.16);
        transition: 0.2s ease-in;
    }

    @media (min-width: 828px) and (max-width: 1024px){
        height: 296px;
        width: 260px;
    }
`;

export const Card2Image = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "card2Margin" &&
        prop !== "backgroundImage" &&
        prop !== "card2Height" &&
        prop !== "card2Width"
})<Card2ImageProps>`
    margin: ${({ card2Margin }) => card2Margin};
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-position: center;
    height: ${({ card2Height }) => card2Height};
    width: ${({ card2Width }) => card2Width};
    border-radius: 1rem;
    cursor: pointer;
`;

export const CardTitle = styled.h2.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "fontSize" &&
        prop !== "letterSpacing" &&
        prop !== "cardMargin" &&
        prop !== "cardTitleHeight" &&
        prop !== "lineHeight" &&
        prop !== "maxWidth" &&
        prop !== "fontWeight"
})<Card2TitleProps>`
    color: ${theme.colors.texto.preto};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({fontWeight}) => fontWeight} ;
    letter-spacing: ${({ letterSpacing }) => letterSpacing};
    margin: ${({ cardMargin }) => cardMargin};
    height: ${({ cardTitleHeight }) => cardTitleHeight};
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    line-height: ${({lineHeight}) => lineHeight};
    width: ${({maxWidth}) => maxWidth};

    cursor: pointer;
    &&:hover{
        text-decoration:underline;
    }

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const CardSubtitle = styled.h2.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "fontSize" &&
        prop !== "letterSpacing" &&
        prop !== "cardMargin" &&
        prop !== "cardTitleHeight" &&
        prop !== "lineHeight"
        
})<CardSubtitleProps>`
    color: ${theme.colors.texto.cinza};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: 500;
    letter-spacing: ${({ letterSpacing }) => letterSpacing};
    margin: ${({ cardMargin }) => cardMargin};
    height: ${({ cardTitleHeight }) => cardTitleHeight};
    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: ${({lineHeight}) => lineHeight};
    cursor: pointer;
`;