import styled from "styled-components";

interface AsideContentDivProps {
    isAside: boolean;
}

export const AsideContainer = styled.aside`
    height: 100%;
    width: 29.6rem;
    display: grid;
    gap: 3.8rem;

    @media (min-width: 924px) and (max-width: 1024px) {
        width: 310px;
    }

    @media (min-width: 828px) and (max-width: 924px) {
        width: 180px;
    }
`

export const AsideDiv = styled.div`
    margin-left: 2rem;
    width: 100%;

    @media (max-width: 1024px) {
        margin-left: 0px;
        width: 180px;;
    }
`

export const AsideContentDiv = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "isAside"
})<AsideContentDivProps>`
    display: grid;
    grid-gap: ${({isAside}) => isAside ? "2.8rem" : "1.4rem"};
`