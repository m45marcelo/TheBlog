import { useNews } from "../../context/NewsContext.context";
import Card2 from "../Card2/Card2.component";

import Card4 from "../Card4/Card4.component";
import Card5 from "../Card5/Card5.component";

import { ContentDiv, DivCards, DivTitle } from "../ContentDiv/ContentDiv.style";
import { DivLeft } from "./ContentContainer.styles";
//import { valueButton } from "../../Functions/buttonValue.function";
import ButtonNextPageDiv from "../ButtonNextPage/ButtonNextPage.component";

import { useEffect, useState } from "react";


const ContentContainer = () => {
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

    return (
        <>
                <DivLeft maxWidth="92.8rem">
                    <ContentDiv marginBottom="3.6rem">
                        <DivTitle
                            fontSize="2rem"
                            maxWidth="35.8rem"
                            fontWeight="600"
                            paddingBottom="1rem"
                        >
                            Recomendado Para Você
                        </DivTitle>
                        <DivCards gridTemplate="repeat(3, 1fr)" gridGap="2rem">
                            {news &&
                                news.map((item) => {
                                    if (item.id > 5 && item.id <= 11) {
                                        return (
                                            <Card2 news={item} key={item.id} />
                                        );
                                    }
                                    return null;
                                })}
                        </DivCards>
                    </ContentDiv>
                    <ContentDiv marginBottom="4.2rem">
                        <DivTitle
                            fontSize="2rem"
                            maxWidth="35.8rem"
                            fontWeight="600"
                            paddingBottom="1rem"
                        >
                            Posts Em Destaque
                        </DivTitle>
                        <DivCards gridTemplate="repeat(3, 1fr)" gridGap="2rem">
                            {news &&
                                news.map((item) => {
                                    if (item.id > 16 && item.id <= 19) {
                                        return (
                                            <Card4 news={item} key={item.id} section="Content"/>
                                        );
                                    }
                                    return null;
                                })}
                        </DivCards>
                    </ContentDiv>
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
                            news.map((item) => {
                                if (
                                    item.id > newsId.id1 &&
                                    item.id <= newsId.id2
                                ) {
                                    return <Card5 news={item} key={item.id}/>;
                                }
                            })}
                    </ContentDiv>
                    <ButtonNextPageDiv setButton={setButton} />
                </DivLeft>
        </>
    );
};

export default ContentContainer;
