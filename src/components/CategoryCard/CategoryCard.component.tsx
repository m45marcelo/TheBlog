import { FunctionComponent, useEffect, useState } from "react";
import { useNews } from "../../context/NewsContext.context";
import {
    CategoryCardContainer,
    CategoryCardDiv,
    CategoryInfoText,
} from "./CategoryCard.styles";

import { Link } from "react-router-dom";
import { useCategories } from "../../context/CategoriesContext.context";
import { Categories } from "../../types/news.types";

interface CategoryCardProps {
    section: "Aside" | "Footer";
    isAside: boolean;
}

const CategoryCard: FunctionComponent<CategoryCardProps> = ({
    section,
    isAside,
}) => {
    const { news } = useNews();
    const { categories } = useCategories();
    const [categoryLength, setCategoryLength] = useState<Record<string, number>>({});

    useEffect(() => {
        const counts = categories.reduce((acc, category) => {
            acc[category.nome] = news.filter(
                (item) => item.category === category.nome
            ).length;
            return acc;
        }, {} as Record<string, number>);
        setCategoryLength(counts);
    }, [news]);

    let fourLength: Categories[] = categories.slice(0, 5);

    if (section === "Footer") {
        fourLength = categories.slice(0, 4);
    }

    return (
        <CategoryCardDiv isAside={isAside}>
            {categories &&
                fourLength.map((item) => {
                    return (
                        <Link to={`/categoria/${item.nome}`} key={item.nome}>
                            <CategoryCardContainer
                                categoryCardMaxWidth="29.8rem"
                                categoryCardHeight="4.4rem"
                                backgroundColor={item.backgroundColor}
                            >
                                <CategoryInfoText fontsize="1.4rem">
                                    {item.label}
                                </CategoryInfoText>
                                <CategoryInfoText fontsize="1.2rem">
                                    {categoryLength[item.nome]}
                                </CategoryInfoText>
                            </CategoryCardContainer>
                        </Link>
                    );
                })}
        </CategoryCardDiv>
    );
};

export default CategoryCard;
