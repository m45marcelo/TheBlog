import styled from "styled-components";

export const SectionHighlightsForYouContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const SectionHighlightsForYouCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 0rem;

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, minmax(240px, 1fr));
    }
`