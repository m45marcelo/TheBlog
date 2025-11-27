import { FunctionComponent } from "react"
import { CardCategoryContainer, CardCategoryName } from "./CardCategory.styles"
import { PropNews } from "../../types/news.types"
import theme from "../../styles/theme"
import { Link } from "react-router-dom"


const CardCategory: FunctionComponent<PropNews> = ({news, section}) => {
    let categoryColor: string = '#247AFF';
    let cardPadding = "0.4rem 1.2rem";
    if(news.category === 'economia') {categoryColor = theme.colors.category.economia};
    if(news.category === 'esporte') {categoryColor = theme.colors.category.esporte};
    if(news.category === 'entretenimento') {categoryColor = theme.colors.category.entretenimento};
    if(news.category === 'games') {categoryColor = theme.colors.category.games};
    if(news.category === 'tecnologia') {categoryColor = theme.colors.category.tecnologia};

    let cardTop: string = "2.4rem";
    let cardLeft: string= "2.2rem";
    let fontSize: string = "1rem"

    if(news.id > 1 && news.id <= 5 ){
        cardTop = "1.4rem";
        cardLeft = "1.4rem";
    }

    if(news.id > 5 && news.id <= 11 || section === "AuthorPosts"){
        cardTop = "2.8rem";
        cardLeft = "2.8rem";
    }

    if(news.id > 11 && news.id <= 16 && section === "Aside"){
        cardTop = "0rem";
        cardLeft = "0rem";
        cardPadding="0.25rem 1rem";
        fontSize = "0.9rem";
    }

    if(news.id > 16 && news.id <=19 && section === "Content"){
        cardTop = "1.4rem";
        cardLeft = "1.4rem";
    }

    if(news.id >19 && section !== "AuthorPosts" || section === "NewsOpen"){
        cardTop = "0rem";
        cardLeft = "0rem";
    }

    if(news.id > 16 && news.id <= 19 && section !== "Content" && section !== "NewsOpen"){
        cardTop = "2.8rem";
        cardLeft = "2.8rem";
    }

    return(
        <Link to={`/categoria/${news.category}`}>
            <CardCategoryContainer backgroundColor= {categoryColor} cardPadding={cardPadding} cardLeft={cardLeft} cardTop={cardTop}>
                <CardCategoryName fontSize={fontSize}>{(news.category).toUpperCase()}</CardCategoryName>
            </CardCategoryContainer>
        </Link>
    )
}

export default CardCategory