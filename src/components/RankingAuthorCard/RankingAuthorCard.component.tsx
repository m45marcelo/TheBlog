import { useEffect, useState } from "react";
import { useNews } from "../../context/NewsContext.context";
import { AuthorName, CardAuthorImage, ImageContainer, SubtitleInfo } from "../PostInfo/PostInfo.style";
import {
    AuthorCardContainerGrid,
    AuthorCardContent,
    AuthorCardText,
} from "./RankingAuthorCard.styles";
import { Author, PerfilImage } from "../../types/news.types";
import { usePerfilLinks } from "../../context/PerfilImagesLink.context";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";
import { CutterString } from "../../Functions/cutterString.function";

const RankingAuthorCard = () => {
    const { news } = useNews();
    const { perfil } = usePerfilLinks()
    const [authors, setAuthors] = useState<Author[]>([
        { name: "Fernanda Costa", totalPosts: 0 },
        { name: "Carlos Silva", totalPosts: 0 },
        { name: "Ana Beatriz", totalPosts: 0 },
        { name: "Bruno Lima", totalPosts: 0 },
        { name: "Juliana Rocha", totalPosts: 0 },
        { name: "Lucas Freitas", totalPosts: 0 },
        { name: "Vinícius Prado", totalPosts: 0 },
        { name:  "Rafael Almeida", totalPosts: 0 },
    ]);

    useEffect(() => {
        const postsAuthors: Author[] = authors.reduce((acc, item): Author[] => {
            const authorName = item.name;
            const totalPosts = news.filter((item) => authorName === item.author).length
            acc.push({name: authorName, totalPosts: totalPosts});
            return acc;
        }, [] as Author[]);
        setAuthors(postsAuthors);
    }, [news]);

    const authorsRanking = [...authors].sort((a,b) => b.totalPosts - a.totalPosts) 

    const topFive: Author[] = authorsRanking.slice(0, 5);

    return (
        <AuthorCardContainerGrid>
            {topFive.map((item) => {
                const perfilMatch: PerfilImage | undefined = perfil.find((p) => p.nome === item.name)
                return(
                        <AuthorCardContent key={item.name}>
                            {
                                perfilMatch && <ImageContainer containerHeight="5.4rem" containerMaxWidth="5.4rem"><CardAuthorImage height="100%" src={perfilMatch.link}/></ImageContainer>
                            }
                            <SubtitleInfo displayType="block" fontSize="1.6rem" colorText={theme.colors.texto.preto}>
                                <Link to={`/autores/${CutterString(perfilMatch?.nome)}`}>
                                <AuthorName colorText={theme.colors.texto.preto} fontSize="1.6rem" maxWidth="23rem">{perfilMatch?.nome}</AuthorName>
                                
                                <AuthorCardText>{`${item.totalPosts} Artigos`}</AuthorCardText>
                                </Link>
                            </SubtitleInfo>
                        </AuthorCardContent>
                    )
                }
            )}
        </AuthorCardContainerGrid>
    );
};

export default RankingAuthorCard;
