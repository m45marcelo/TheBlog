import styled from "styled-components";
import theme from "../../styles/theme";

interface HeaderItemProps {
    active?: boolean;
}

export const HeaderContainer = styled.header`
    max-width: 124.4rem;
    width: 100%;
    height: 4.4rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.8rem;
`;
export const HeaderLogo = styled.img`
    height: 2.9rem;
    cursor: pointer;

    @media  (max-width: 480px){
        display: flex;
        height: 1.6rem;
    }
`;

export const HeaderItems = styled.div`
    display: flex;
    gap: 1.8rem;
`;

export const HeaderItem = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'active'
})<HeaderItemProps>`
    font-size: ${({ theme }) => theme.tipografia.sizes.small};
    color: ${({ active, theme }) => (active ? theme.colors.primary : theme.colors.texto.preto)};
    border-bottom: ${({active, theme}) => (active ? `2px solid ${theme.colors.primary}` : '2px solid transparent')};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        border-bottom: 2px solid ${theme.colors.primary}
    }

    @media  (max-width: 480px){
        display: flex;
        font-size: 0.7rem;
    }
`;
