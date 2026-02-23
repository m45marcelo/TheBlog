
import { useEffect, useState } from "react";
import ButtonNextPageDiv from "../../ButtonNextPage/ButtonNextPage.component";
import { DivTitle } from "../../ContentDiv/ContentDiv.style";
import { SectionLastPostsCardsContainer, SectionLastPostsContainer } from "./SectionLastPosts.styles"
import { useNews } from "../../../context/NewsContext.context";
import Card5 from "../../Cards/Card5/Card5.component";

const SectionLastPosts = () => {
    const { news } = useNews();
        const [button, setButton] = useState<number>(1);
    
        const [newsId, setNewsId] = useState<{ id1: number; id2: number }>({
            id1: 19,
            id2: 24,
        });
    
        useEffect(() => {
            switch (button) {
                case 1:
                    return setNewsId({ id1: 19, id2: 24 });
                case 2:
                    return setNewsId({ id1: 24, id2: 29 });
                case 3:
                    return setNewsId({ id1: 29, id2: 34 });
                case 4:
                    return setNewsId({ id1: 34, id2: 39 });
                case 5:
                    return setNewsId({ id1: 39, id2: 44 });
            }
        }, [button]);

    return(
        <SectionLastPostsContainer>
            <DivTitle fontSize="2rem"
                            maxWidth="35.8rem"
                            fontWeight="600"
                            paddingBottom="1rem">Ultimas Postagens</DivTitle>
                            
                        <SectionLastPostsCardsContainer>
                        {news &&
                            news.map((item) => {
                                if (
                                    item.id > newsId.id1 &&
                                    item.id <= newsId.id2
                                ) {
                                    return <Card5 news={item} key={item.id}/>;
                                }
                            })}
                        </SectionLastPostsCardsContainer>
                            <ButtonNextPageDiv setButton={setButton} />
        </SectionLastPostsContainer>
    )
}

export default SectionLastPosts;