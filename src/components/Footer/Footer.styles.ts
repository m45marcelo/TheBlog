import styled from "styled-components";
import theme from "../../styles/theme";

interface AboutTextProps {
    maxWidth: string;
    fontSize: string;
    marginText: string;
    fontWeight: string;
    textColor: string;
}

export const FooterContainer = styled.footer`
    height: 32.6rem;
    background-color: ${theme.colors.footer};
    width: 100%;

    @media (max-width: 1024px) {
        padding: 0 40px;
    }
`

export const DivContainerGrig = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 124.4rem;
    width: 100%;
    margin: 0 auto;
`

export const DivFooter = styled.div`
    margin-top: 3.8rem;
    max-width: 39.8rem;
    width: 100%;

    @media (max-width: 1024px) {
        max-width: 300px;
    }
`
export const AboutText = styled.h2.withConfig({
    shouldForwardProp: (prop) => prop !== "marginText" && prop !== "maxWidth" && prop !== "fontWeight" && prop !== "textColor"
})<AboutTextProps>`
    max-width: ${({maxWidth}) => maxWidth};
    width: 100%;
    font-size: 1.6rem;
    font-weight: ${({fontWeight}) => fontWeight};
    line-height: 148%;
    margin: ${({marginText}) => marginText};
    color: ${({textColor}) => textColor};
`

export const AboutItems = styled.div`
    display: flex;
    height: 3rem;
    gap: 1.6rem;
    align-items: center;
`

export const PopularItems = styled.div`
    display: grid;
    margin-top: 1.4rem;
`