import styled from "styled-components";
import theme from "../../styles/theme";

interface AuthorTitleSpanProps {
    fontSize: string;
    letterSpacing: string;
    cardMargin?: string;
    fontWeight: string;
    colorText?: string;
    heightText?: string;
    textAlign?: string;
}

export const AuthorSocialMediaContainer = styled.div`
    display: flex;
    height: 8.8rem;
    width: 100%;
    border-top: ${`1px solid ${theme.colors.texto.transparent}`};
    padding-top: 3.6rem;
    margin-top: 3.6rem;
`

export const AuthorSocialMediaContent = styled.div`
    display: grid;
    height: 100%;
`

export const AuthorTitleSpan = styled.span.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "fontSize" &&
        prop !== "letterSpacing" &&
        prop !== "cardMargin" &&
        prop !== "fontWeight" &&
        prop !== "colorText" && 
        prop !== "heightText" && 
        prop !== "textAlign"
})<AuthorTitleSpanProps>`
    color: ${({colorText}) => colorText ? colorText : theme.colors.texto.preto};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({fontWeight}) => fontWeight} ;
    letter-spacing: ${({ letterSpacing }) => letterSpacing};
    margin: ${({ cardMargin }) => cardMargin};
    width: 100%;
    height: ${({heightText}) => heightText};
    text-align: ${({textAlign}) => textAlign};
`;