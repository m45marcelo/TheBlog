import { FunctionComponent } from "react";
import {
    Card3Container,
    Card3Image,
    CardInfoDiv,
    CardCategoryDiv,
} from "./Card3.styles";
import { PropNews } from "../../types/news.types";
import CardCategory from "../CardCategory/CardCategory.component";
import { CardTitle } from "../Card2/Card2.styles";
import PostInfo from "../PostInfo/PostInfo.component";
import { Link } from "react-router-dom";

const Card3: FunctionComponent<PropNews> = ({ news, section }) => {
    let fontSize: string = "1.3rem";
    let maxWidth: string = "18.2rem";
    let maxWidthImage: string = "10.6rem";
    let imageHeight: string = "9rem";
    let lineHeight: string = "143%";

    if (section === "Footer") {
        fontSize = "1.4rem";
        maxWidth = "27.6rem";
        maxWidthImage = "8.8rem";
        imageHeight = "8.8rem";
        lineHeight = "128%";
    }
    
    return (
        <>
            <Card3Container>
                <Link to={`/news/${news.id}`} style={{ display: 'block' }}>
                    <Card3Image
                        backgroundImage={news.image}
                        maxWidth={maxWidthImage}
                        imageHeight={imageHeight}
                    />
                </Link>

                <CardInfoDiv maxWidth={maxWidth}>
                    <CardCategoryDiv>
                        <CardCategory news={news} section="Aside" />
                    </CardCategoryDiv>
                    <Link to={`/news/${news.id}`}>
                        <CardTitle
                            maxWidth={maxWidth}
                            fontSize={fontSize}
                            letterSpacing="-0.01rem"
                            lineHeight={lineHeight}
                            cardMargin="0rem"
                            cardTitleHeight="3.8rem"
                            fontWeight="600"
                        >
                            {news.title}
                        </CardTitle>
                    </Link>
                    <PostInfo
                        autorInfo={news}
                        section="Aside"
                        isCutter={true}
                    />
                </CardInfoDiv>
            </Card3Container>
        </>
    );
};

export default Card3;
