import styled from "styled-components";
import theme from "../../styles/theme";

interface NewsNotFoundImageProps {
    backgrondImage: string;
}

interface ContainerVideoProps {
    maxWidth: string;
    heightDiv: string;
}
///50.8rem
interface NewsOpenImageProps {
    backgroundImage: string;
}

interface NewsContentTextProps {
    isFirst: boolean;
}

interface GenericTextProps {
    fontSize: string;
}

interface ShareDivContainerProps {
    justifyContent: string;
    marginTop: string;
}

export const NewsOpenContainer = styled.div`
    max-width: 93.2rem;
    width: 100%;
    height: 100%;
`

export const ContainerVideo = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "maxWidth" && prop !== "heightDiv"
})<ContainerVideoProps>`
    max-width: ${({maxWidth}) => maxWidth} ;
    width: 100%;
    height: ${({heightDiv}) => heightDiv};
    margin-bottom: 1.8rem;
    border-radius: 1rem;
    overflow: hidden;
`

export const NewsOpenImage = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "backgroundImage"
})<NewsOpenImageProps>`
    background-image: url(${({backgroundImage}) => backgroundImage});
    max-width: 93.2rem;
    width: 100%;
    height: 50.8rem;
    margin-bottom: 1.8rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 1rem;
    position: relative;
`

export const NewsNotFoundContainer = styled.div`
    height: 57.6rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const NewsNotFoundImage = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "backgrondImage"
})<NewsNotFoundImageProps>`
    background-image: url(${({backgrondImage}) => backgrondImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 40%;
    width: 100%;
`

export const NewsNotFoundButton = styled.button`
    height: 3.8rem;
    max-width: 28.8rem;
    padding: 0rem 3rem;
    width: 100%;
    background-color: ${theme.colors.primary};
    font-weight: 600;
    border: 0;
    border-radius: 0.8rem;
    color: ${theme.colors.texto.branco};
    cursor: pointer;
    margin-bottom: 0.4rem;
    margin-left: 1rem;


    &:hover{
        background-color: ${theme.colors.primaryHover};
        box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.08);
    }
`

export const NewsContentText = styled.p.withConfig({
    shouldForwardProp: (prop) => prop !== "isFirst"
})<NewsContentTextProps>`
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: -3%;
    line-height: 155%;
    color:${theme.colors.texto.text}; 
    margin-top: ${({isFirst}) => isFirst ? "1rem" : "3rem"};
    border-top: ${({isFirst}) => isFirst ? `1px solid ${theme.colors.texto.transparent}` : "none"};
    padding-top: ${({isFirst}) => isFirst ? "3rem" : "0rem"};
`

export const UserViewContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ShareDivContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "justifyContent" && prop !== "marginTop"
})<ShareDivContainerProps>`
    display: flex;
    width: 100%;
    justify-content: ${({justifyContent}) => justifyContent};
    margin-top: ${({marginTop}) => marginTop};
    gap: 1.6rem;
    align-items: center;
`

export const GenericDivItems = styled.div`
    display: flex;
    gap: 1.4rem;
    height: 2.2rem;
    align-items: center;
    justify-content: center;
`

export const GenericItem = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.4rem;
`

export const GenericText = styled.h3.withConfig({
    shouldForwardProp: (prop) => prop !== "fontSize"
})<GenericTextProps>`
    font-size: ${({fontSize}) => fontSize};
    font-weight: 400;
    color: ${theme.colors.texto.About};
    
`