import styled from "styled-components";

export const HeroContainer = styled.div`
    width: 100%;
    height: 42.6rem;
    margin-top: 2.8rem;
    margin-bottom: 4.2rem;
    display: grid;
    grid-template-areas: 
        "a a b c"
        "a a d e";
    grid-gap: 1.4rem 2rem ;

    @media (min-width: 828px) and (max-width: 1024px){
        grid-template-areas: 
        "a b"
        "c d"
        "e f";
        height: 600px;
    }

    & div:nth-child(1) {
    grid-area: a;
}

    & div:nth-child(2) {
    grid-area: b;
}

    & div:nth-child(3) {
    grid-area: c;
}

    & div:nth-child(4) {
    grid-area: d;
}

    & div:nth-child(5) {
    grid-area: e;
}
`