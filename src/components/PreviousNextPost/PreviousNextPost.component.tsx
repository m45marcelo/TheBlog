import { Link } from "react-router-dom";
import { useNews } from "../../context/NewsContext.context";
import { News } from "../../types/news.types";
import { GenericText } from "../NewsOpen/NewsOpen.styles";
import {
    PreviousNextPostButton,
    PreviousNextPostButtonContainer,
    PreviousNextPostButtonContent,
    PreviousNextPostContainer,
} from "./PreviousNextPost.styles";

const PreviousNextPost = ({ idNews }: { idNews: number }) => {
    const { news } = useNews();
    const previousNews: News | undefined = news.find(
        (item) => item.id === idNews - 1
    );
    const NextNews: News | undefined = news.find(
        (item) => item.id === idNews + 1
    );

    return (
        <PreviousNextPostContainer>
            <PreviousNextPostButtonContainer textAlign="start">
                {previousNews && (
                    <>
                        <PreviousNextPostButton
                            textAlign="start"
                            maxWidth="0.8rem"
                        >
                            &lt;
                        </PreviousNextPostButton>
                        <PreviousNextPostButtonContent>
                            <GenericText fontSize="1.3rem">
                                Postagem Anterior
                            </GenericText>
                            <Link to={`/news/${idNews - 1}`}>
                                <PreviousNextPostButton
                                    textAlign="start"
                                    maxWidth="28.2rem"
                                >
                                    {" "}
                                    {previousNews.title}
                                </PreviousNextPostButton>
                            </Link>
                        </PreviousNextPostButtonContent>
                    </>
                )}
            </PreviousNextPostButtonContainer>

            <PreviousNextPostButtonContainer textAlign="end">
                {NextNews && (
                    <>
                        <PreviousNextPostButtonContent>
                            <GenericText fontSize="1.3rem">
                                Postagem Seguinte
                            </GenericText>
                            <Link to={`/news/${idNews + 1}`}>
                                <PreviousNextPostButton
                                    textAlign="end"
                                    maxWidth="28.2rem"
                                >
                                    {NextNews.title}
                                </PreviousNextPostButton>
                            </Link>
                        </PreviousNextPostButtonContent>
                        <PreviousNextPostButton
                            textAlign="start"
                            maxWidth="0.8rem"
                        >
                            &gt;
                        </PreviousNextPostButton>
                    </>
                )}
            </PreviousNextPostButtonContainer>
        </PreviousNextPostContainer>
    );
};

export default PreviousNextPost;
