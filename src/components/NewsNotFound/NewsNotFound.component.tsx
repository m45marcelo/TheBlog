import { ContainerBody } from "../ContainerBody/ContainerBody.style";
import { NewsNotFoundContainer } from "../NewsOpen/NewsOpen.styles";
import { NewsNotFoundImage } from "../NewsOpen/NewsOpen.styles";
import { CardSubtitle } from "../Card2/Card2.styles";
import { Link } from "react-router-dom";
import { NewsNotFoundButton } from "../NewsOpen/NewsOpen.styles";

const NewsNotFound = () => {
    return (
        <ContainerBody>
            <NewsNotFoundContainer>
                <NewsNotFoundImage backgrondImage="https://res.cloudinary.com/dmorb2xoh/image/upload/v1747449953/404_ntxouc.jpg" />
                <CardSubtitle
                    fontSize="1.6rem"
                    letterSpacing="0%"
                    cardMargin="1rem 0rem 2.4rem 1rem"
                    cardTitleHeight="auto"
                    lineHeight="150%"
                >
                    Não conseguimos encontrar a página que você está procurando.
                </CardSubtitle>
                <Link to={"/"}>
                    <NewsNotFoundButton>VOLTAR PARA A HOME</NewsNotFoundButton>
                </Link>
            </NewsNotFoundContainer>
        </ContainerBody>
    );
};


export default NewsNotFound