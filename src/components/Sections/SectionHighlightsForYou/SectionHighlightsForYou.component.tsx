import { useNews } from "../../../context/NewsContext.context";
import Card2 from "../../Cards/Card2/Card2.component";
import { DivTitle } from "../../ContentDiv/ContentDiv.style";
import { SectionHighlightsForYouCardsContainer, SectionHighlightsForYouContainer } from "./SectionHighlightsForYou.styles";

const SectionRecommendedForYou = () => {
    const { news } = useNews();
    return(
        <SectionHighlightsForYouContainer>
            <DivTitle fontSize="2rem"
                maxWidth="35.8rem"
                fontWeight="600"
                paddingBottom="1rem">Destaques Para Você
            </DivTitle>
            <SectionHighlightsForYouCardsContainer>
            {news &&
                                news.map((item) => {
                                    if (item.id > 5 && item.id <= 11) {
                                        return (
                                            <Card2 news={item} key={item.id} />
                                        );
                                    }
                                    return null;
                                })}
            </SectionHighlightsForYouCardsContainer>
        </SectionHighlightsForYouContainer>
    )
}

export default SectionRecommendedForYou;