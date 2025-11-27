import {
    Card2Container,
    Card2Image,
    CardSubtitle,
    CardTitle,
} from "./Card2.styles";
import { FunctionComponent } from "react";
import { PropNews } from "../../types/news.types";
import CardCategory from "../CardCategory/CardCategory.component";
import PostInfo from "../PostInfo/PostInfo.component";
import { Link } from "react-router-dom";
import { ContainerVideo } from "../NewsOpen/NewsOpen.styles";
import { Card4Video } from "../Card4/Card4.styles";

const Card2: FunctionComponent<PropNews> = ({ news, section }) => {
    return (
        <>
            <Card2Container card2height="33.8rem" card2width="29.5rem">
                <CardCategory news={news} section={section} />
                <Link to={`/news/${news.id}`}>
                    {news.id === 17 || news.id === 18 || news.id === 19 ? (
                        <ContainerVideo maxWidth="26.8rem" heightDiv="16.4rem">
                            <Card4Video
                                autoPlay
                                loop
                                muted
                                playsInline
                                disablePictureInPicture
                            >
                                <source src={news.image} type="video/mp4" />
                            </Card4Video>
                        </ContainerVideo>
                    ) : (
                        <Card2Image
                            backgroundImage={news.image}
                            card2Height="16.4rem"
                            card2Width="100%"
                        />
                    )}
                </Link>
                <Link to={`/news/${news.id}`}>
                    <CardTitle
                        fontWeight="600"
                        fontSize="1.8rem"
                        letterSpacing="-0.02rem"
                        lineHeight="141%"
                        cardTitleHeight="5rem"
                        cardMargin="0.8rem 0rem 0.8rem 0rem"
                        maxWidth="26.8rem"
                    >
                        {news.title}
                    </CardTitle>
                </Link>
                <Link to={`/news/${news.id}`}>
                    <CardSubtitle
                        fontSize="1.4rem"
                        letterSpacing="-0.04rem"
                        lineHeight="136%"
                        cardTitleHeight="3.8rem"
                        cardMargin="1rem 0rem 1.2rem 0rem"
                    >
                        {news.subtitle}
                    </CardSubtitle>
                </Link>
                <PostInfo
                    autorInfo={news}
                    section="ContentDiv"
                    isCutter={true}
                />
            </Card2Container>
        </>
    );
};

export default Card2;
