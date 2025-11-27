import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { usePerfilLinks } from "../../context/PerfilImagesLink.context";
import theme from "../../styles/theme";
import { News } from "../../types/news.types";
import {
    GenericDivItems,
    GenericItem,
    GenericText,
    ShareDivContainer,
} from "../NewsOpen/NewsOpen.styles";
import { CardAuthorImage, ImageContainer } from "../PostInfo/PostInfo.style";
import {
    AuthorSocialMediaContainer,
    AuthorSocialMediaContent,
    AuthorTitleSpan,
} from "./AuthorSocialMedia.styles";
import { Link } from "react-router-dom";
import { CutterString } from "../../Functions/cutterString.function";

const AuthorSocialMedia = ({ author }: { author: News }) => {
    const { perfil } = usePerfilLinks();
    const perfilMatch = perfil.find((item) => item.nome === author.author);
    return (
        <AuthorSocialMediaContainer>
            <Link to={`/autores/${CutterString(author.author)}`}>
                <ImageContainer
                    containerHeight="8.8rem"
                    containerMaxWidth="8.8rem"
                >
                    <CardAuthorImage src={perfilMatch?.link} height="100%" />
                </ImageContainer>
            </Link>
            <AuthorSocialMediaContent>
                <AuthorTitleSpan
                    fontSize="1.8rem"
                    letterSpacing="1%"
                    cardMargin="0rem"
                    fontWeight="600"
                    textAlign="left"
                >
                    <AuthorTitleSpan
                        fontSize="1.8rem"
                        letterSpacing="1%"
                        cardMargin="0rem"
                        fontWeight="600"
                    >
                        Escrito Por{" "}
                    </AuthorTitleSpan>

                    <Link to={`/autores/${CutterString(author.author)}`}>
                        <AuthorTitleSpan
                            fontSize="1.8rem"
                            letterSpacing="1%"
                            cardMargin="0rem"
                            colorText={theme.colors.primary}
                            fontWeight="600"
                        >
                            {perfilMatch?.nome}
                        </AuthorTitleSpan>
                    </Link>
                </AuthorTitleSpan>

                <AuthorTitleSpan
                    fontSize="1.3rem"
                    letterSpacing="-7%"
                    cardMargin="0rem"
                    fontWeight="500"
                    colorText={theme.colors.texto.text}
                >
                    {perfilMatch?.bio}
                </AuthorTitleSpan>

                <ShareDivContainer marginTop="0rem" justifyContent="start">
                    <GenericText fontSize="1.2rem">
                        Entre em contato &gt;
                    </GenericText>
                    <GenericDivItems>
                        <GenericItem>
                            <FaFacebookF size={12} />
                        </GenericItem>
                        <GenericItem>
                            <FaTwitter size={12} />
                        </GenericItem>
                        <GenericItem>
                            <FaInstagram size={12} />
                        </GenericItem>
                        <GenericItem>
                            <FaYoutube size={12} />
                        </GenericItem>
                    </GenericDivItems>
                </ShareDivContainer>
            </AuthorSocialMediaContent>
        </AuthorSocialMediaContainer>
    );
};

export default AuthorSocialMedia;
