import { useCategories } from "../../context/CategoriesContext.context";
import { useNews } from "../../context/NewsContext.context";
import { Categories, News } from "../../types/news.types";
import Aside from "../Aside/Aside.component";
import Card2 from "../Cards/Card2/Card2.component";

import { ContainerBody } from "../ContainerBody/ContainerBody.style";
import { DivLeft } from "../ContentContainer/ContentContainer.styles";
import { ContentDiv, DivCards, DivTitle } from "../ContentDiv/ContentDiv.style";
import NewsNotFound from "../NewsNotFound/NewsNotFound.component";

const CategoryPosts = ({ categoryName }: { categoryName: string | null }) => {
    const { news } = useNews();
    const { categories } = useCategories();
    const categoryMatch: Categories | undefined = categories.find(item => item.nome === categoryName);
    const newsMetch: News[] | undefined = news.filter(
        (item) => item.category === categoryName
    );
    return (
        <>
            {categoryMatch ? (
                <ContainerBody>
                    <DivLeft maxWidth="93.2rem">
                        <ContentDiv marginBottom="3.6rem">
                            <DivTitle
                                fontSize="2rem"
                                maxWidth="100%"
                                fontWeight="600"
                                paddingBottom="1rem"
                                textCenter={true}
                            >
                                {categoryMatch.nome.toUpperCase()}
                            </DivTitle>
                            <DivCards
                                gridTemplate="repeat(3, 1fr)"
                                gridGap="2rem"
                            >
                                {
                                    newsMetch && newsMetch.map((item) => {
                                        return(
                                            <Card2 key={item.id} news={item} section="AuthorPosts"/>
                                        )
                                    })
                                }
                            </DivCards>
                        </ContentDiv>
                    </DivLeft>
                    <Aside />
                </ContainerBody>
            ) : (
                <NewsNotFound />
            )}
        </>
    );
};

export default CategoryPosts;
