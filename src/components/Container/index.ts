import styled from "styled-components";

export const Container = styled.div`
    max-width: 124.4rem;
    width: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 424px) and (max-width: 1024px) {
        padding: 0 20px;
    }

    @media (max-width: 480px) {
        padding: 0 20px;
    }
`
export const Screen = styled.div`
    margin: 0 auto;
`