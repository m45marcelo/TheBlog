import { createContext, useContext } from "react";
import { PerfilImage } from "../types/news.types";

interface ImageAuthorsContextTypes {
    perfil: PerfilImage[];
}

const ImageAuthorsContext = createContext<ImageAuthorsContextTypes>({ perfil: []});

export const PerfilImageAuthorProvider = ({children}: {children: React.ReactNode}) => {
    const perfilImageLinks: PerfilImage[] = [
        {
            nome: "Fernanda Costa",
            link: "https://img.freepik.com/fotos-gratis/jovem-sorridente-e-bonita-caucasiana-isolada-na-parede-roxa-com-espaco-de-copia_141793-112372.jpg?ga=GA1.1.1230285699.1743114038&semt=ais_hybrid&w=740",
            bio: "Olá, me chamo Fernanda Costa, sou formada em Ciências Econômicas. Escrevo sobre tendências do mercado, finanças pessoais e economia global de uma forma leve e acessível."
        },
        {
            nome: "Bruno Lima",
            link: "https://img.freepik.com/fotos-premium/retrato-do-jovem-feliz-sorridente-homem-bonito-isolado-no-branco_1258-5418.jpg?ga=GA1.1.1230285699.1743114038&semt=ais_hybrid&w=740",
            bio: "Olá, me chamo Bruno Lima, sou desenvolvedor full stack e fascinado por inovações tecnológicas. Gosto de explorar desde as novidades em inteligência artificial até as tendências em gadgets e startups."
        },
        {
            nome: "Carlos Silva",
            link: "https://img.freepik.com/fotos-premium/rosto-de-moda-e-alegria-do-homem-em-sueter-de-estudio-e-quente-para-o-inverno-no-canada-feliz-e-desconto-fundo-azul-retrato-e-sorriso-de-pessoa-venda-e-cardigan-de-roupas-de-algodao-e-camisola_590464-385714.jpg?ga=GA1.1.1230285699.1743114038&semt=ais_hybrid&w=740",
            bio: "Olá, me chamo Carlos Silva, jornalista esportivo com o coração dividido entre futebol e Fórmula 1. Acompanho os bastidores dos principais campeonatos e gosto de analisar os acontecimentos com uma visão crítica e apaixonada."
        },
        {
            nome: "Juliana Rocha",
            link: "https://img.freepik.com/fotos-gratis/retrato-de-selfie-para-videochamada_23-2149186122.jpg?ga=GA1.1.1230285699.1743114038&semt=ais_hybrid&w=740",
            bio: "Olá, sou Juliana Rocha, cinéfila assumida, fã de séries e apaixonada pelo universo pop. Aqui no blog, compartilho críticas, curiosidades e novidades sobre filmes, celebridades, música e cultura em geral."
        },
        {
            nome: "Ana Beatriz",
            link: "https://img.freepik.com/fotos-premium/retrato-de-uma-menina-atraente-pensativa-sorrindo-e-olhando-para-a-esquerda-branco_1258-30312.jpg?ga=GA1.1.1230285699.1743114038&semt=ais_hybrid&w=740",
            bio: "Oi! Me chamo Ana Beatriz, economista e educadora financeira. Acredito que o conhecimento financeiro pode transformar vidas, por isso produzo conteúdos sobre investimentos e educação financeira para iniciantes."
        },
        {
            nome: "Rafael Almeida",
            link: "https://img.freepik.com/fotos-gratis/homem-bonito-sorrindo-retrato-de-rosto-feliz-close-up_53876-145493.jpg?ga=GA1.1.1230285699.1743114038&semt=ais_hybrid&w=740",
            bio: "Olá, me chamo Rafael Almeida, e sou gamer desde os tempos do Super Nintendo. Escrevo sobre lançamentos, análises, história dos jogos e a indústria de games como um todo."
        },
        {
            nome: "Vinícius Prado",
            link: "https://img.freepik.com/fotos-premium/retrato-de-jovem-com-roupas-casuais-olhando-para-a-camera-em-pe-contra-um-fundo-amarelo_425904-29815.jpg?ga=GA1.1.1230285699.1743114038&semt=ais_hybrid&w=740",
            bio: "Oi, sou Vinícius Prado! Sempre fui o 'tech guy' da turma e hoje uso esse conhecimento para escrever sobre tecnologia. Meu conteúdo vai de tutoriais práticos a reflexões sobre o impacto da tecnologia na sociedade."
        },
        {
            nome: "Lucas Freitas",
            link: "https://img.freepik.com/fotos-gratis/homem-de-pele-escura-jovem-barba-por-fazer-atraente-em-camiseta-vermelha-sorrindo-amplamente-rindo-de-imagens-engracadas-na-internet-expressoes-faciais-e-emocoes-positivas_176420-10256.jpg?ga=GA1.1.1230285699.1743114038&semt=ais_hybrid&w=740",
            bio: "Olá, me chamo Lucas Freitas, e sou um apaixonado por games desde a infância. Gosto de explorar todos os estilos. Aqui, compartilho experiências, análises e dicas para quem ama esse universo tanto quanto eu."
        },
    ];
    return (
        <ImageAuthorsContext.Provider value={{ perfil: perfilImageLinks }}>
            {children}
        </ImageAuthorsContext.Provider>
    );
};

export const usePerfilLinks = () => useContext(ImageAuthorsContext);
