import styled from "styled-components";
import theme from "../../../styles/theme";

interface CardAuthorItemProps {
    marginItem: string;
    heightItem?: string;
}

interface ImageAuthorContainerProps {
    heightImage: string;
    widthImage: string;
}

export const AuthorBioContainer = styled.div`
    display: grid;
    z-index: 1;
    max-width: 37.2rem;
    width: 100%;
    height: 6.2rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const ImageAuthorContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "heightImage" && prop !== "widthImage"
})<ImageAuthorContainerProps>`
    height: ${({heightImage}) => heightImage};
    max-width: ${({widthImage}) => widthImage};
    width: 100%;
    position: absolute;
    z-index: 1;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${theme.colors.fundo};
    left: 38%;
    bottom: 2.2rem;
`
export const ImageAuthor = styled.img`
    height: 100%;
`

export const CardAuthorItem = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "marginItem" && prop !== "heightItem"
})<CardAuthorItemProps>`
    margin: ${({marginItem}) => marginItem};
    height: ${({heightItem}) => heightItem};
    text-align: center;
`