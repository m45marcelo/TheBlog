
import { Link } from "react-router-dom";
import { PropNews } from "../../../types/news.types";
import { Card5Container, Card5ContentDiv, Card5Image, Card5InfoDiv, Card5Title, CardSubtitle } from "./Card5.styles";
import { FunctionComponent } from "react";
import { CardCategoryDiv } from "../Card3/Card3.styles";
import CardCategory from "../CardCategory/CardCategory.component";
import PostInfo from "../../PostInfo/PostInfo.component";

const Card5: FunctionComponent<PropNews> = ({ news, section }) => {
    return (
        <>
            <Card5Container cardheight="18rem" cardwidth="93.6rem">
                <Link to={`/news/${news.id}`}>
                    <Card5Image
                        backgroundImage={news.image}
                        cardHeight="18rem"
                        cardWidth="29.8rem"
                    ></Card5Image>
                </Link>
                <Card5ContentDiv>
                    <CardCategoryDiv>
                        <CardCategory news={news} section={section} />
                    </CardCategoryDiv>

                    <Card5InfoDiv>
                        <Link to={`/news/${news.id}`}>
                            <Card5Title
                                fontSize="2rem"
                                letterSpacing="0.01rem"
                                lineHeight="150%"
                                cardMargin="0.6rem 0rem 0rem 0rem"
                            >
                                {news.title}
                            </Card5Title>

                            <CardSubtitle
                                fontSize="1.6rem"
                                letterSpacing="-0.04rem"
                                lineHeight="136%"
                                cardTitleHeight="2.1rem"
                                cardMargin="1rem 0rem 1.2rem 0rem"
                            >
                                {news.subtitle}
                            </CardSubtitle>
                        </Link>
                        <PostInfo
                            autorInfo={news}
                            section="ContentDiv"
                            isCutter={false}
                        />
                    </Card5InfoDiv>
                </Card5ContentDiv>
            </Card5Container>
        </>
    );
};

export default Card5;
