import styled from "styled-components";
import theme from "../../../styles/theme";

interface Card5ContainerProps {
    cardheight: string;
    cardwidth: string;
}

interface Card5ImageProps {
    cardMargin?: string;
    backgroundImage: string;
    cardHeight: string;
    cardWidth: string;
}

interface Card5TitleProps {
    fontSize: string;
    letterSpacing: string;
    cardMargin: string;
    lineHeight: string;
}

interface CardSubtitleProps {
    fontSize: string;
    letterSpacing: string;
    cardMargin: string;
    cardTitleHeight: string;
    lineHeight: string;
}

export const Card5Container = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "cardheight" && prop !== "cardwidth"
})<Card5ContainerProps>`
    height: ${({ cardheight }) => cardheight};
    width: ${({ cardwidth }) => cardwidth};
    background-color: ${theme.colors.fundo};
    border-radius: 1rem;
    display: flex;
    margin-bottom: 2.8rem;
    cursor: pointer;
    gap: 1.4rem;

    @media (min-width: 828px) and (max-width: 1200px){
        flex-direction: column;
        height: auto;
        width: 240px;
    }

    @media (min-width: 0px) and (max-width: 412px){
        flex-direction: column;
        height: auto;
        width: 100%;
    }
`;

export const Card5ContentDiv = styled.div`
    max-width: 61.6rem;
    width: 100%;
    height: 100%;
    display: grid;
`

export const Card5Image = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "cardMargin" &&
        prop !== "backgroundImage" &&
        prop !== "cardHeight" &&
        prop !== "cardWidth"
})<Card5ImageProps>`
    margin: ${({ cardMargin }) => cardMargin};
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-position: center;
    height: ${({ cardHeight }) => cardHeight};
    width: ${({ cardWidth }) => cardWidth};
    border-radius: 1rem;
    transition: 0.3s ease-in;
    &:hover{
        box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.16);
    }

    @media (min-width: 828px) and (max-width: 1200px){
        width: 240px;
    }

    @media (min-width: 0px) and (max-width: 412px){
        width: 100%;
    }
`;

export const Card5InfoDiv = styled.div`
    max-width: 61.6rem;
    width: 100%;
    display: grid;
    height: 15.6rem;

    @media (min-width: 828px) and (max-width: 1200px){
        width: auto;
        height: auto;
    }
`

export const Card5Title = styled.h2.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "fontSize" &&
        prop !== "letterSpacing" &&
        prop !== "cardMargin" &&
        prop !== "cardTitleHeight" &&
        prop !== "lineHeight"
})<Card5TitleProps>`
    color: ${theme.colors.texto.preto};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: 600;
    max-width: 50rem;
    width: 100%;
    letter-spacing: ${({ letterSpacing }) => letterSpacing};
    margin: ${({ cardMargin }) => cardMargin};
    height: 5.8rem;
    align-items: center;
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    line-height: ${({lineHeight}) => lineHeight};
    @media (min-width: 828px) and (max-width: 1200px){
        font-size: 1.8rem;
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

    @media (min-width: 828px) and (max-width: 1200px){
        font-size: 1.4rem;
        margin: 0.6rem 0rem
    }
`;

