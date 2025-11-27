import { createContext, useContext } from "react";
import { Categories } from "../types/news.types";
import theme from "../styles/theme";

interface CategoriesContextTypes {
    categories: Categories[];
}

const CategoriesContext = createContext<CategoriesContextTypes>({categories: []});

export const CategoriesProvider = ({children} : { children: React.ReactNode}) => {
    const categories: Categories[] = [
        {
            nome: "economia",
            label: "Economia",
            backgroundColor: theme.colors.category.economia,
        },
        {
            nome: "esporte",
            label: "Esporte",
            backgroundColor: theme.colors.category.esporte,
        },
        {
            nome: "entretenimento",
            label: "Entretenimento",
            backgroundColor: theme.colors.category.entretenimento,
        },
        {
            nome: "tecnologia",
            label: "Tecnologia",
            backgroundColor: theme.colors.category.tecnologia,
        },
        {
            nome: "games",
            label: "Games",
            backgroundColor: theme.colors.category.games,
        },
    ];

    return(
        <CategoriesContext.Provider value={{categories}}>
            {children}
        </CategoriesContext.Provider>
    )
}

export const useCategories = () => useContext(CategoriesContext);