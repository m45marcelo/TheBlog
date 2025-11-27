import styled, { css } from "styled-components";
import theme from "../../styles/theme";

interface DivTitleProps {
    fontSize: string;
    marginBottom?: string;
    maxWidth?: string;
    borderBottom?: string;
    fontWeight: string;
    paddingBottom: string;
    textCenter?: boolean;
}

interface ContentDivProps {
    marginBottom: string;
}

interface DivCardsProps {
    gridTemplate: string;
    gridGap: string;
}

export const ContentDiv = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "marginBottom"
})<ContentDivProps>`
    width: 100%;
    margin-bottom: ${({marginBottom}) => marginBottom};
    
`;

export const DivTitle = styled.h2.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "fontSize" && prop !== "marginBottom" && prop !== "maxWidth" && prop !== "borderBottom" && prop !== "fontWeight" && prop !== "paddingBottom" && prop !== "textCenter"
})<DivTitleProps>`
    color: ${theme.colors.texto.preto};
    font-weight: ${({fontWeight}) => fontWeight};
    font-size: ${({ fontSize }) => fontSize};
    margin-bottom: ${({ marginBottom }) => marginBottom};
    border-bottom: ${({ borderBottom }) => (borderBottom) ? borderBottom : "none"};
    max-width: ${({ maxWidth }) => maxWidth};
    width: 100%;
    padding-bottom: ${({paddingBottom}) => paddingBottom};
    letter-spacing: 0.006rem;
    ${({textCenter}) => textCenter && css`text-align: center`}
`;

export const DivCards = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "gridTemplate" && prop !== "gridGap"
})<DivCardsProps>`
    width: 100%;
    max-width: 100%;
    display: grid;
    grid-template-columns: ${({gridTemplate}) => gridTemplate};
    grid-gap: ${({gridGap}) => gridGap};

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
