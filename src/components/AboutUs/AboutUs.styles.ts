import styled, { css } from "styled-components";


interface ContainerImageProps {
    backgroundImage: string;
    widthImage?: string;
    heightImage: string;
}


export const AboutHeroContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    grid-gap: 1.4rem;
    margin-bottom: 2.2rem;
`
export const ContainerImage = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "backgroundImage" && prop !== "widthImage" && prop !== "heightImage"
})<ContainerImageProps>`
    background-image: url(${({backgroundImage}) => backgroundImage});
    background-size: cover;
    background-position: center;
    ${({heightImage}) => heightImage && css`height: ${heightImage}`};
    border-radius: 1rem;
    ${({widthImage}) => widthImage && css`width: ${widthImage}`};
`
export const AboutContainer = styled.div`
    display: flex;
    width: 100%;
    height: 63.8rem;
    gap: 2rem;
`

export const TextContentContainer = styled.div`
    height: 50.4rem;
    display: grid;
    gap: 2.6rem;
`