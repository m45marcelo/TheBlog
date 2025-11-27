import styled from "styled-components";

interface Card3ImageProps {
    backgroundImage: string;
    imageHeight: string;
    maxWidth: string;
}

interface CardInfoDivProps {
    maxWidth: string;
}

export const Card3Container = styled.div`
    width: 100%;
    display: flex;
    gap: 0.8rem;
    border-radius: 1rem;
    cursor: pointer;
`

export const Card3Image = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "backgroundImage" && prop !== "imageHeight" && prop !== "maxWidth"
})<Card3ImageProps>`
    height: ${({ imageHeight }) => imageHeight};
    width: ${({ maxWidth }) => maxWidth};
    max-width:100%;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1rem;
    transition: 0.3s ease-in;

    &:hover {
        cursor: pointer;
        transform: scale(1.03);
        transition: 0.3s ease;
        box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.16);
    }
`


export const CardInfoDiv = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "maxWidth"
})<CardInfoDivProps>`
    max-width: ${({maxWidth}) => maxWidth};
    width: 100%;
    display: grid;
`

export const CardCategoryDiv = styled.div`
    position: relative;
    height: 2.2rem;
`