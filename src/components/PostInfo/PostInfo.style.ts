import styled from "styled-components";
import theme from "../../styles/theme";

interface SubtitleInfoProps {
    fontSize: string;
    backgroundColor?: string;
    colorText: string;
    displayType: "flex" | "block" | "grid";
}

interface ImageContainerProps {
    containerHeight: string;
    containerMaxWidth: string;
    borderActive?: boolean;
}

interface CardAuthorImageProps {
    height: string;
}

interface AuthorNameProps {
    maxWidth: string;
    fontSize: string;
    colorText: string;
}

export const PostInfoContainer = styled.div`
    height: 2.8rem;
    display: flex;
    align-items: center;

    @media (min-width: 828px) and (max-width: 1024px){
        height: 36px;
    }

`

export const SubtitleInfo = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "backgroundColor" && prop !== "colorText" && prop !== "displayType"
})<SubtitleInfoProps>`
    display: ${({displayType}) => displayType};
    span{
        display: block;
        font-size: ${({fontSize}) => fontSize};
        color: ${({colorText}) => colorText};
        &::before{
                content: "";
                width: 3px;
                height: 3px;
                background-color: #9C9D9D;
                opacity: 0.8;
                display: inline-block;
                vertical-align: middle;
                border-radius: 50%;
                margin: 0 8px;
            }
    }
`

export const ImageContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "containerHeight" && prop !== "containerMaxWidth" && prop !== "borderActive"
})<ImageContainerProps>`
    height: ${({containerHeight}) => containerHeight};
    max-width: ${({containerMaxWidth}) => containerMaxWidth};
    width:100%;
    margin-right: 8px;
    border-radius: 50%;
    display: flex;
    overflow: hidden;
    justify-content: center;
    border: ${({borderActive}) => borderActive ? `2px solid ${theme.colors.fundo}` : "none"};

    @media (min-width: 853px) and (max-width: 1024px){
        height: 18px;
        max-width: 18px;
    }
`

export const CardAuthorImage = styled.img.withConfig({
    shouldForwardProp: (prop) => prop !== "height"
})<CardAuthorImageProps>`
    height: ${({height}) => height};
`

export const AuthorName = styled.p.withConfig({
    shouldForwardProp: (prop) => prop !== "maxWidth" && prop !== "fontSize" && prop !== "colorText"
})<AuthorNameProps>`
    max-width: ${({maxWidth}) => maxWidth};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: ${({fontSize}) => fontSize};
    color: ${({colorText}) => colorText};
`

export const SpanInfo = styled.span`

`