import styled from "styled-components";
import theme from "../../styles/theme";

interface PreviousNextPostButtonContainerProps {
    textAlign: string;
}

interface PreviousNextPostButtonProps {
    textAlign: string;
    maxWidth: string;
}

export const PreviousNextPostContainer = styled.div`
    width: 100%;
    height: 6.6rem;
    display: flex;
    justify-content: space-between;
    margin: 8.6rem 0rem 5.6rem 0rem;
`
export const PreviousNextPostButtonContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop  !== "textAlign"
})<PreviousNextPostButtonContainerProps>`
    max-width: 29.0rem;
    width:100%;
    display: flex;
    height: 100%;
    text-align: ${({textAlign}) => textAlign};
    align-items: center;
    gap: 0rem 1.4rem;
`
export const PreviousNextPostButtonContent = styled.div`
    display: grid;
`
export const PreviousNextPostButton = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== "textAlign" && prop !== "maxWidth"
})<PreviousNextPostButtonProps>`
    max-width: ${({maxWidth}) => maxWidth};
    width: 100%;
    height: 4.6rem;
    font-size: 1.4rem;
    letter-spacing: 0.02rem;
    font-weight: 600;
    border: 0;
    background-color: ${theme.colors.fundo};
    text-align: ${({textAlign}) => textAlign};
    cursor: pointer;
    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
`
