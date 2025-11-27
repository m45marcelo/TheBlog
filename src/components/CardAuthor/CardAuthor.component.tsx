import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { PerfilImage } from "../../types/news.types";
import { AuthorTitleSpan } from "../AuthorSocialMedia/AuthorSocialMedia.styles";
import { Card2Container, Card2Image } from "../Card2/Card2.styles";
import { GenericDivItems, GenericItem } from "../NewsOpen/NewsOpen.styles";
import {
    AuthorBioContainer,
    CardAuthorItem,
    ImageAuthor,
    ImageAuthorContainer,
} from "./CardAuthor.styles";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";
import { CutterString } from "../../Functions/cutterString.function";

const CardAuthor = ({ perfilImage }: { perfilImage: PerfilImage }) => {
    return (
        <Card2Container card2height="37rem" card2width="40rem">
            
            <Link to={`/autores/${CutterString(perfilImage.nome)}`}>
            
                <Card2Image
                    card2Height="16.4rem"
                    card2Width="37.2rem"
                    backgroundImage={perfilImage.link}
                />
            </Link>
            
            <AuthorBioContainer>
                
                <Link to={`/autores/${CutterString(perfilImage.nome)}`}>
                    <ImageAuthorContainer heightImage="8rem" widthImage="8rem">
                        <ImageAuthor src={perfilImage.link} />
                    </ImageAuthorContainer>
                </Link>
                <CardAuthorItem marginItem="4rem 0rem 0.2rem 0rem">
                <Link to={`/autores/${CutterString(perfilImage.nome)}`}>
                    <AuthorTitleSpan
                        fontSize="2rem"
                        letterSpacing="0rem"
                        fontWeight="600"
                        cardMargin="0rem"
                    >
                        {perfilImage.nome}
                    </AuthorTitleSpan>
                </Link>
                </CardAuthorItem>
                <CardAuthorItem marginItem="0rem 0rem 1rem 0rem" heightItem="7.2rem">
                <Link to={`/autores/${CutterString(perfilImage.nome)}`}>
                    <AuthorTitleSpan
                        fontSize="1.2rem"
                        letterSpacing="0rem"
                        fontWeight="500"
                        cardMargin="0rem"
                        colorText={theme.colors.texto.cinza}
                        heightText="7.2rem"
                    >
                        {perfilImage.bio}
                    </AuthorTitleSpan>
                </Link>
                </CardAuthorItem>

                <GenericDivItems>
                    <GenericItem>
                        <FaFacebookF size={14} />
                    </GenericItem>
                    <GenericItem>
                        <FaTwitter size={14} />
                    </GenericItem>
                    <GenericItem>
                        <FaInstagram size={14} />
                    </GenericItem>
                    <GenericItem>
                        <FaYoutube size={14} />
                    </GenericItem>
                </GenericDivItems>
            </AuthorBioContainer>
        </Card2Container>
    );
};

export default CardAuthor;
