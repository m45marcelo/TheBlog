import styled from "styled-components";

interface ButtonNextPageProps {
    active: boolean;
}

export const ButtonNextPageContainer = styled.div`
    display: flex;
    height: 4.4rem;
    align-items: center;
    margin: 3rem 0rem 5rem 0rem;
`

export const ButtonNextPage = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== "active"
})<ButtonNextPageProps>`
    height: 4.4rem;
    width: 4.4rem;
    margin-right: 1.2rem;
    border-radius: 50%;
    background-color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.fundo};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ active, theme }) => active ? theme.colors.fundo : theme.colors.primary};
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.8rem;
    font-weight: 600;

`;
