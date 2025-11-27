import styled from "styled-components";
import theme from "../../styles/theme";

interface NewsletterButtonProps {
    marginButton: string;
}

export const NewsletterContainer = styled.div`
    max-width: 29.8rem;
    width: 100%;
    display: grid;
    text-align: center;
    margin-bottom: 4.8rem;
`

export const NewsletterInput = styled.input`
    height: 3.6rem;
    padding-left: 1.4rem;
    max-width: 28.8rem;
    width: 100%;
    border: 2px solid #EFF0F0;
    border-radius: 0.8rem;
    font-size: 1.2rem;
    font-weight: 500;
    outline: #D7DCDC;
    cursor: pointer;
    margin-bottom: 1.4rem;

    &::placeholder{
        color: ${theme.colors.texto.cinza};
    }

    &:focus{
        cursor: text;
        box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.08);
    }
`

export const NewsletterButton = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== "marginButton"
})<NewsletterButtonProps>`
    height: 3.6rem;
    max-width: 28.8rem;
    width: 100%;
    background-color: ${theme.colors.primary};
    font-weight: 600;
    border: 0;
    border-radius: 0.8rem;
    color: ${theme.colors.texto.branco};
    cursor: pointer;
    margin: ${({marginButton}) => marginButton};
//0.4rem
    &:hover{
        background-color: ${theme.colors.primaryHover};
        box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.08);
    }
`

export const NewsletterSpan = styled.span`
    font-size: 1rem;
    font-weight: 600;
    color: ${theme.colors.texto.cinza};
`