import styled from "styled-components";
import theme from "../../styles/theme";

export const ContactContainer = styled.div`
    width: 100%;
    display: flex;
`

export const FormContactContainer = styled.form`
    max-width: 71.4rem;
    width: 100%;
    height: 28.6rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const FormContactTextarea = styled.textarea`
    height: 14.2rem;
    max-width: 71.4rem;
    width: 100%;
    resize: none;
    border-radius: 1rem;
    padding: 1rem;
    outline: none;
    border: 0.2rem solid #eff0f0;

    &:hover{
        border: 0.2rem solid ${theme.colors.texto.transparent};
    }

    &::placeholder{
        color: ${theme.colors.texto.About};
    }
`

export const FormContactInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 3rem;
`

export const FormContactInput = styled.input`
    width: 100%;
    height: 4.2rem;
    border-radius: 0.8rem;
    padding: 1rem;
    outline: none;
    border: 0.2rem solid #eff0f0;

    &:hover{
        border: 0.2rem solid ${theme.colors.texto.transparent};
    }

    &::placeholder{
        color: ${theme.colors.texto.About};
    }
`

export const ContactInfoContainer = styled.div`
    width: 100%;
    max-width: 51.2rem;
    height: 100%;
    display: grid;
`

export const ContactInfoContent = styled.div`
    height: 9.4rem;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`