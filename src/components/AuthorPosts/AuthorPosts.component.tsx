import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { usePerfilLinks } from "../../context/PerfilImagesLink.context";
import Aside from "../Aside/Aside.component";
import { AuthorTitleSpan } from "../AuthorSocialMedia/AuthorSocialMedia.styles";
import { CardAuthorItem, ImageAuthor } from "../Cards/CardAuthor/CardAuthor.styles";
import { ContainerBody } from "../ContainerBody/ContainerBody.style";
import { DivLeft } from "../ContentContainer/ContentContainer.styles";
import { ContentDiv, DivCards } from "../ContentDiv/ContentDiv.style";
import { GenericDivItems, GenericItem } from "../NewsOpen/NewsOpen.styles";
import { ImageContainer } from "../PostInfo/PostInfo.style";

import { AuthorInfosContainer, AuthorPostImage } from "./Authorposts.styles";
import theme from "../../styles/theme";
import { useNews } from "../../context/NewsContext.context";
import Card2 from "../Cards/Card2/Card2.component";
import NewsNotFound from "../NewsNotFound/NewsNotFound.component";

const AuthorPosts = ({ perfilName }: { perfilName: string | null }) => {
    const { perfil } = usePerfilLinks();
    const { news } = useNews();
    const perfilMatch = perfil.find((item) => item.nome === perfilName);
    return (
        <>
        {perfilMatch ? (
        <ContainerBody>
                    <DivLeft maxWidth="93.2rem">
                        <ContentDiv marginBottom="5.2rem">
                            <AuthorPostImage backgroundImage={perfilMatch.link}>
                                <AuthorInfosContainer>
                                    <ImageContainer
                                        containerHeight="8.6rem"
                                        containerMaxWidth="8.6rem"
                                        borderActive={true}
                                    >
                                        <ImageAuthor src={perfilMatch.link} />
                                    </ImageContainer>

                                    <CardAuthorItem marginItem="0rem">
                                        <AuthorTitleSpan
                                            fontSize="2.6rem"
                                            fontWeight="600"
                                            letterSpacing="0.09rem"
                                            colorText={
                                                theme.colors.texto.branco
                                            }
                                        >
                                            {perfilMatch.nome}
                                        </AuthorTitleSpan>
                                    </CardAuthorItem>

                                    <CardAuthorItem marginItem="1.2rem 0rem 1.2rem 0rem">
                                        <AuthorTitleSpan
                                            fontSize="1.3rem"
                                            letterSpacing="0.09rem"
                                            fontWeight="500"
                                            textAlign="end"
                                            colorText={
                                                theme.colors.texto.branco
                                            }
                                        >
                                            {perfilMatch.bio}
                                        </AuthorTitleSpan>
                                    </CardAuthorItem>
                                    <GenericDivItems>
                                        <GenericItem>
                                            <FaFacebookF size={16} />
                                        </GenericItem>
                                        <GenericItem>
                                            <FaTwitter size={16} />
                                        </GenericItem>
                                        <GenericItem>
                                            <FaInstagram size={16} />
                                        </GenericItem>
                                        <GenericItem>
                                            <FaYoutube size={16} />
                                        </GenericItem>
                                    </GenericDivItems>
                                </AuthorInfosContainer>
                            </AuthorPostImage>

                            <DivCards
                                gridTemplate="repeat(3, 1fr)"
                                gridGap="2rem"
                            >
                                {news
                                    .filter(
                                        (itemNews) =>
                                            itemNews.author === perfilMatch.nome
                                    )
                                    .map((itemMap) => (
                                        <Card2
                                            news={itemMap}
                                            key={itemMap.id}
                                            section="AuthorPosts"
                                        />
                                    ))}
                            </DivCards>
                        </ContentDiv>
                    </DivLeft>

                    <Aside />
                </ContainerBody>
            ): (
                <NewsNotFound />
            )}
        </>
    );
};

export default AuthorPosts;
