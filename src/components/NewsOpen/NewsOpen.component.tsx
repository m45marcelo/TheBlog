import { FunctionComponent } from "react";
import {
    NewsContentText,
    NewsOpenContainer,
    NewsOpenImage,
    ShareDivContainer,
    GenericDivItems,
    GenericItem,
    GenericText,
    UserViewContainer,
    ContainerVideo,
} from "./NewsOpen.styles";
import { NewsOpenProps } from "../../types/news.types";
import { useNews } from "../../context/NewsContext.context";
import { CardSubtitle, CardTitle } from "../Card2/Card2.styles";
import { ContainerBody } from "../ContainerBody/ContainerBody.style";
import CardCategory from "../CardCategory/CardCategory.component";
import { CardCategoryDiv } from "../Card3/Card3.styles";
import PostInfo from "../PostInfo/PostInfo.component";
import { DivLeft } from "../ContentContainer/ContentContainer.styles";
import Aside from "../Aside/Aside.component";
import NewsNotFound from "../NewsNotFound/NewsNotFound.component";
import {
    FaFacebookF,
    FaInstagram,
    FaPinterest,
    FaRegEye,
    FaTwitter,
} from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import theme from "../../styles/theme";
import AuthorSocialMedia from "../AuthorSocialMedia/AuthorSocialMedia.component";
import PreviousNextPost from "../PreviousNextPost/PreviousNextPost.component";
import { ContentDiv, DivTitle } from "../ContentDiv/ContentDiv.style";
import Card5 from "../Card5/Card5.component";
import { Card4Video } from "../Card4/Card4.styles";

const NewsOpen: FunctionComponent<NewsOpenProps> = ({ idNews }) => {
    const { news } = useNews();
    const newsItem = news.find((item) => item.id === idNews);

    if (news.length === 0) {
        return <h1>Carregando</h1>;
    }

    return (
        <>
            {newsItem ? (
                <ContainerBody>
                    <DivLeft maxWidth="93.2rem">
                        <NewsOpenContainer>
                            {newsItem.id === 17 ||
                            newsItem.id === 18 ||
                            newsItem.id === 19 ? (
                                <ContainerVideo maxWidth="93.2rem" heightDiv="50.8rem">
                                    <Card4Video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        disablePictureInPicture
                                    >
                                        <source
                                            src={newsItem.image}
                                            type="video/mp4"
                                        />
                                    </Card4Video>
                                </ContainerVideo>
                            ) : (
                                <NewsOpenImage
                                    backgroundImage={newsItem.image}
                                />
                            )}

                            <CardCategoryDiv>
                                <CardCategory
                                    news={newsItem}
                                    section="NewsOpen"
                                />
                            </CardCategoryDiv>
                            <CardTitle
                                fontWeight="700"
                                fontSize="2.8rem"
                                letterSpacing="0%"
                                cardMargin="0.6rem 0rem 0rem 0rem"
                                lineHeight="140%"
                                maxWidth="87.8rem"
                            >
                                {newsItem?.title}
                            </CardTitle>
                            <CardSubtitle
                                fontSize="1.4rem"
                                letterSpacing="0%"
                                cardMargin="1rem 0rem 1rem 0rem"
                                cardTitleHeight="auto"
                                lineHeight="150%"
                            >
                                {newsItem.subtitle}
                            </CardSubtitle>
                            <UserViewContainer>
                                <PostInfo
                                    section="NewsOpen"
                                    isCutter={true}
                                    autorInfo={newsItem}
                                />
                                <GenericDivItems>
                                    <GenericItem>
                                        <FaRegEye
                                            size={"1.4rem"}
                                            color={theme.colors.texto.About}
                                        />
                                        <GenericText fontSize="1.4rem">
                                            1.7k
                                        </GenericText>
                                    </GenericItem>
                                    <GenericItem>
                                        <BsChat
                                            size={"1.4rem"}
                                            color={theme.colors.texto.About}
                                        />
                                        <GenericText fontSize="1.4rem">
                                            7 comentários
                                        </GenericText>
                                    </GenericItem>
                                </GenericDivItems>
                            </UserViewContainer>

                            <NewsContentText isFirst={true}>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Animi deleniti, dignissimos,
                                eligendi debitis autem quibusdam obcaecati harum
                                eaque alias mollitia vero illo et dicta!
                                Voluptatibus cumque neque reiciendis explicabo
                                sed. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Eum reprehenderit earum magni,
                                perspiciatis eligendi cumque, eos velit
                                reiciendis cupiditate quae, laboriosam sed iusto
                                quod quia dignissimos aperiam quibusdam est
                                quidem?
                            </NewsContentText>

                            <NewsContentText isFirst={false}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Facilis, maiores fuga eaque
                                impedit est rerum repellat tempore neque natus
                                exercitationem dignissimos. Aspernatur
                                repudiandae, a velit voluptatibus magni sit ex
                                veniam! Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatem ad laudantium
                                quidem delectus explicabo temporibus? Expedita
                                laborum, quia, voluptatem molestias unde magni
                                vero sit nemo ut incidunt suscipit obcaecati
                                molestiae. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Reprehenderit
                                quisquam sunt ullam aliquam eius in possimus
                                exercitationem, temporibus nemo, dolore
                                asperiores. Odit ipsum, placeat perspiciatis
                                aperiam autem saepe voluptatibus sit.
                            </NewsContentText>

                            <NewsContentText isFirst={false}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Facilis, maiores fuga eaque
                                impedit est rerum repellat tempore neque natus
                                exercitationem dignissimos. Aspernatur
                                repudiandae, a velit voluptatibus magni sit ex
                                veniam! Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatem ad laudantium
                                quidem delectus explicabo temporibus? Expedita
                                laborum, quia, voluptatem molestias unde magni
                                vero sit nemo ut incidunt suscipit obcaecati
                                molestiae. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Reprehenderit
                                quisquam sunt ullam aliquam eius in possimus
                                exercitationem, temporibus nemo, dolore
                                asperiores. Odit ipsum, placeat perspiciatis
                                aperiam autem saepe voluptatibus sit.
                            </NewsContentText>

                            <NewsContentText isFirst={false}>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Animi deleniti, dignissimos,
                                eligendi debitis autem quibusdam obcaecati harum
                                eaque alias mollitia vero illo et dicta!
                                Voluptatibus cumque neque reiciendis explicabo
                                sed. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Eum reprehenderit earum magni,
                                perspiciatis eligendi cumque, eos velit
                                reiciendis cupiditate quae, laboriosam sed iusto
                                quod quia dignissimos aperiam quibusdam est
                                quidem? Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eum, impedit aperiam?
                                Recusandae exercitationem et sequi debitis illo
                                obcaecati sed, inventore enim non molestias
                                pariatur excepturi eos nihil natus iste
                                asperiores!
                            </NewsContentText>

                            <ShareDivContainer
                                marginTop="2.6rem"
                                justifyContent="end"
                            >
                                <GenericText fontSize="1.8rem">
                                    Compartilhar &gt;
                                </GenericText>
                                <GenericDivItems>
                                    <GenericItem>
                                        <FaFacebookF size={22} />
                                    </GenericItem>
                                    <GenericItem>
                                        <FaTwitter size={22} />
                                    </GenericItem>
                                    <GenericItem>
                                        <FaInstagram size={22} />
                                    </GenericItem>
                                    <GenericItem>
                                        <FaPinterest size={22} />
                                    </GenericItem>
                                </GenericDivItems>
                            </ShareDivContainer>

                            <AuthorSocialMedia author={newsItem} />

                            <PreviousNextPost idNews={idNews} />

                            <ContentDiv marginBottom="4.2rem">
                                <DivTitle
                                    fontSize="2rem"
                                    maxWidth="35.8rem"
                                    fontWeight="600"
                                    paddingBottom="1rem"
                                >
                                    Ultimas Postagens
                                </DivTitle>
                                {news &&
                                    news
                                        .filter((item) => item.id < 5)
                                        .map(
                                            (itemMap) => itemMap.id !== idNews && <Card5 news={itemMap} key={itemMap.id} section="NewsOpen"/> 
                                        )}
                            </ContentDiv>
                        </NewsOpenContainer>
                    </DivLeft>
                    <Aside />
                </ContainerBody>
            ) : (
                <NewsNotFound />
            )}
        </>
    );
};

export default NewsOpen;
