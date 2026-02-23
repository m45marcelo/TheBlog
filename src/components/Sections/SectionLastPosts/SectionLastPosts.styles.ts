import styled from "styled-components";

export const SectionLastPostsContainer = styled.section`
    display: flex;
    flex-direction: column;
`

export const SectionLastPostsCardsContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 832px)and (max-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
    }
`