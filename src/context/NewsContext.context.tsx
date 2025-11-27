import { createContext, useContext, useEffect, useState } from "react";
import { News } from "../types/news.types";
import axios from "axios";

interface NewsContextType {
    news: News[];
}

const NewsContext = createContext<NewsContextType>({ news: []});

export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
    const [news, setNews] = useState<News[]>([]);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const { data } = await axios.get("http://localhost:3000/news");
                const formatterData: News[] = (data as News[]).map((item: News) => ({
                    ...item,
                    id: Number(item.id)
                }))
                
                setNews(formatterData);
            } catch (error) {
                console.error(`Erro ao carregar as notícias: ${error}`);
            }
        };
        fetchNews();
    }, []);

    return (
        <NewsContext.Provider value={{ news }}>
            {children} 
        </NewsContext.Provider>
    );
};

export const useNews = () => useContext(NewsContext); 