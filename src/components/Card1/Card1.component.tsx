import {
    Card1Image,
    Card1Info,
    CardInfoBackground,
    Card1Title,
    Card1Container,
} from "./Card1.styles";
import { PropNews } from "../../types/news.types";
import { FunctionComponent } from "react";
import CardCategory from "../CardCategory/CardCategory.component";
import PostInfo from "../PostInfo/PostInfo.component";
import { Link } from "react-router-dom";

const Card1: FunctionComponent<PropNews> = ({ news }) => {
    let fontSize: string = "2.4rem";
    let letterSpacing: string = "-2%";
    let cardMargin: string = "0rem 2.2rem 2.8rem 2.2rem";
    let cardHeight: string = "11.6rem";
    let cardMarginBotton: string = "0.4rem";
    let cardTitleHeight: string = "5.8rem";
    let lineHeigth: string = "112%";
    if (news.id > 1) {
        fontSize = "1.6rem";
        letterSpacing = "0.01rem";
        cardMargin = "0rem 1.2rem 1.2rem 1.2rem";
        cardHeight = "8.6rem";
        cardMarginBotton = "0.2rem";
        cardTitleHeight = "4.4rem";
        lineHeigth = "140%";
    }
    return (
        <>
            <Card1Container>
                <Link to={`/news/${news.id}`}>
                    <Card1Image backgroundImage={news.image} />
                </Link>
                <CardCategory news={news} />
                <CardInfoBackground cardInfoHeight={cardHeight}>
                    <Card1Info cardMargin={cardMargin}>
                        <Link to={`/news/${news.id}`}>
                            <Card1Title
                                fontSize={fontSize}
                                letterSpacing={letterSpacing}
                                cardMarginBotton={cardMarginBotton}
                                cardTitleHeight={cardTitleHeight}
                                lineHeight={lineHeigth}
                            >
                                {news.title}
                            </Card1Title>
                        </Link>
                        <PostInfo
                            autorInfo={news}
                            section="Hero"
                            isCutter={false}
                        />
                    </Card1Info>
                </CardInfoBackground>
            </Card1Container>
        </>
    );
};

export default Card1;
