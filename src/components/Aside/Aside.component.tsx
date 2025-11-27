import { useNews } from "../../context/NewsContext.context";

import { AsideDiv } from "./Aside.styles";
import Card3 from "../Card3/Card3.component";
import { AsideContentDiv } from "./Aside.styles";
import { DivTitle } from "../ContentDiv/ContentDiv.style";
//import { valueButton } from "../../Functions/buttonValue.function";

import CategoryCard from "../CategoryCard/CategoryCard.component";
import AuthorCard from "../RankingAuthorCard/RankingAuthorCard.component";
import NewsletterDiv from "../NewsletterDiv/NewsletterDiv.component";
import TagCard from "../TagCard/TagCard.component";
import { AsideContainer } from "./Aside.styles";

const Aside = () => {
    const { news } = useNews();
    return (
        <AsideContainer>
            <AsideDiv>
                <DivTitle
                    fontSize="1.6rem"
                    marginBottom="1.4rem"
                    maxWidth="19rem"
                    borderBottom="2px solid #EFF0F0"
                    fontWeight="600"
                    paddingBottom="1rem"
                >
                    Posts Populares
                </DivTitle>
                <AsideContentDiv isAside={true}>
                    {news &&
                        news.map((item) => {
                            if (item.id > 11 && item.id <= 16) {
                                return <Card3 news={item} key={item.id} />;
                            }
                            return null;
                        })}
                </AsideContentDiv>
            </AsideDiv>
            <AsideDiv>
                <DivTitle
                    fontSize="1.6rem"
                    marginBottom="1.4rem"
                    maxWidth="19rem"
                    borderBottom="2px solid #EFF0F0"
                    fontWeight="600"
                    paddingBottom="1rem"
                >
                    Categorias
                </DivTitle>
                <CategoryCard section="Aside" isAside={true} />
            </AsideDiv>
            <AsideDiv>
                <DivTitle
                    fontSize="1.6rem"
                    marginBottom="1.4rem"
                    maxWidth="19rem"
                    borderBottom="2px solid #EFF0F0"
                    fontWeight="600"
                    paddingBottom="1rem"
                >
                    Top Autores
                </DivTitle>
                <AuthorCard />
            </AsideDiv>
            <AsideDiv>
                <DivTitle
                    fontSize="1.6rem"
                    marginBottom="1.4rem"
                    maxWidth="19rem"
                    borderBottom="2px solid #EFF0F0"
                    fontWeight="600"
                    paddingBottom="1rem"
                >
                    Tags
                </DivTitle>
                <TagCard />
            </AsideDiv>
            <AsideDiv>
                <DivTitle
                    fontSize="1.6rem"
                    marginBottom="1.4rem"
                    maxWidth="19rem"
                    borderBottom="2px solid #EFF0F0"
                    fontWeight="600"
                    paddingBottom="1rem"
                >
                    Newsletter
                </DivTitle>
                <NewsletterDiv />
            </AsideDiv>
        </AsideContainer>
    );
};

export default Aside;
