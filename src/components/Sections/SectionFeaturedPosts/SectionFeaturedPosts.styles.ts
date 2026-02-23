import styled from "styled-components";

export const SectionFeaturedPostsContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 3.6rem;
`

export const SectionFeaturedPostsCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.6rem;
`