import {
    Card4Info,
    CardInfoBackground,
    Card4Title,
    Card4Container,
    Card4Video,
} from "./Card4.styles";
import { PropNews } from "../../types/news.types";
import { FunctionComponent } from "react";
import CardCategory from "../CardCategory/CardCategory.component";
import PostInfo from "../PostInfo/PostInfo.component";
import { Link } from "react-router-dom";

const Card4: FunctionComponent<PropNews> = ({ news, section }) => {
    return (
        <>
            <Card4Container>
                <Link to={`/news/${news.id}`}>
                    <Card4Video
                        autoPlay
                        loop
                        muted
                        playsInline
                        disablePictureInPicture
                    >
                        <source src={news.image} type="video/mp4" />
                    </Card4Video>
                </Link>
                <CardCategory news={news} section={section}/>
                <CardInfoBackground cardInfoHeight="9.6rem">
                    <Card4Info cardMargin="0rem 1.2rem 1.2rem 1.2rem">
                        <Link to={`/news/${news.id}`}>
                            <Card4Title
                                fontSize="1.8rem"
                                letterSpacing="-0.03rem"
                                cardMarginBotton="1rem"
                                cardTitleHeight="4.8rem"
                                lineHeight="132%"
                            >
                                {news.title}
                            </Card4Title>
                        </Link>
                        <PostInfo
                            autorInfo={news}
                            section="ContentDiv"
                            isCutter={false}
                        />
                    </Card4Info>
                </CardInfoBackground>
            </Card4Container>
        </>
    );
};

export default Card4;
