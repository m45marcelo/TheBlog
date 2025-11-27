import styled from "styled-components";
import theme from "../../styles/theme";

interface AuthorPostImageProps {
    backgroundImage: string;
}

export const AuthorPostImage = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "backgroundImage"
})<AuthorPostImageProps>`
    background-image: url(${({backgroundImage}) => backgroundImage});
    max-width: 93.2rem;
    width: 100%;
    height: 50.8rem;
    margin-bottom: 1.8rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AuthorInfosContainer = styled.div`
    height: 27.4rem;
    width: 100%;
    max-width: 51.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.texto.branco};
`

