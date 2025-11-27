export interface News {
    id: number,
    category: string,
    author: string,
    date: string,
    image: string,
    title: string,
    subtitle: string,
    content: string
}

export interface PropNews {
    news: News;
    section?: "Aside" | "Footer" | "NewsOpen" | "AuthorPosts" | "Content"
}

export interface CategoryLength {
    economia: number;
    esporte: number;
    entretenimento: number;
    games: number;
    tecnologia: number;
}

export interface Author {
    name: string;
    totalPosts: number;
}

export interface PerfilImage {
    nome: string;
    link: string;
    bio: string;
}

export interface NewsOpenProps {
    idNews: number;
}

export interface Categories {
    nome: string;
    label: string;
    backgroundColor: string;
}