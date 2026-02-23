import { useNews } from "../../../context/NewsContext.context";
import Card4 from "../../Cards/Card4/Card4.component";
import { DivTitle } from "../../ContentDiv/ContentDiv.style";
import { SectionFeaturedPostsCardsContainer, SectionFeaturedPostsContainer } from "./SectionFeaturedPosts.styles"

const SectionFeaturedPosts = () => {

    const {news} = useNews()
    return(
        <SectionFeaturedPostsContainer>
            <DivTitle fontSize="2rem"
                                        maxWidth="35.8rem"
                                        fontWeight="600"
                                        paddingBottom="1rem">Posts Em Destaque</DivTitle>
            <SectionFeaturedPostsCardsContainer>
            {news &&
                                news.map((item) => {
                                    if (item.id > 16 && item.id <= 19) {
                                        return (
                                            <Card4 news={item} key={item.id} section="Content"/>
                                        );
                                    }
                                    return null;
                                })}
            </SectionFeaturedPostsCardsContainer>
        </SectionFeaturedPostsContainer>
    )
}

export default SectionFeaturedPosts;