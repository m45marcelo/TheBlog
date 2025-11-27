import theme from "../../styles/theme"
import { TagCardContainer, TagCardItem } from "./TagCard.styles"

const TagCard = () => {
    return(
        <TagCardContainer>
            <TagCardItem type="button" backgrondColor={theme.colors.category.economia}>Brasil</TagCardItem>
            <TagCardItem type="button" backgrondColor={theme.colors.category.tecnologia}>IA</TagCardItem>
            <TagCardItem type="button" backgrondColor={theme.colors.category.esporte}>Seleção</TagCardItem>
            <TagCardItem type="button" backgrondColor={theme.colors.category.entretenimento}>Cinema</TagCardItem>
            <TagCardItem type="button" backgrondColor={theme.colors.category.entretenimento}>Música</TagCardItem>
            <TagCardItem type="button" backgrondColor={theme.colors.category.economia}>Mundo</TagCardItem>
            <TagCardItem type="button" backgrondColor={theme.colors.category.esporte}>Futebol</TagCardItem>
        </TagCardContainer>
    )
}

export default TagCard