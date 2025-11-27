import { AuthorName, CardAuthorImage, ImageContainer, PostInfoContainer, SubtitleInfo } from "./PostInfo.style"
import { News } from "../../types/news.types";
import { FunctionComponent } from "react";
import { numberToDate } from "../../Functions/date.function";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";
import { CutterString } from "../../Functions/cutterString.function";
interface SpanProps {
    autorInfo: News;
    section: "Hero" | "ContentDiv" | "Aside" | "NewsOpen";
    isCutter: boolean;
}

interface PerfilImageLinkProps {
    nome: string;
    link: string;
}

const perfilImageLinks:PerfilImageLinkProps[] = [
    {nome: "Fernanda Costa", link: "https://img.freepik.com/fotos-gratis/jovem-sorridente-e-bonita-caucasiana-isolada-na-parede-roxa-com-espaco-de-copia_141793-112372.jpg?ga=GA1.1.1230285699.1743114038&semt=ais_hybrid&w=740"},
    {nome: "Bruno Lima", link: "https://img.freepik.com/fotos-premium/retrato-do-jovem-feliz-sorridente-homem-bonito-isolado-no-branco_1258-5418.jpg?ga=GA1.1.1230285699.1743114038&semt=ais_hybrid&w=740"},
    {nome: "Carlos Silva", link: "https://img.freepik.com/fotos-premium/rosto-de-moda-e-alegria-do-homem-em-sueter-de-estudio-e-quente-para-o-inverno-no-canada-feliz-e-desconto-fundo-azul-retrato-e-sorriso-de-pessoa-venda-e-cardigan-de-roupas-de-algodao-e-camisola_590464-385714.jpg?ga=GA1.1.1230285699.1743114038&semt=ais_hybrid&w=740"},
    {nome: "Juliana Rocha", link: "https://img.freepik.com/fotos-gratis/retrato-de-selfie-para-videochamada_23-2149186122.jpg?ga=GA1.1.1230285699.1743114038&semt=ais_hybrid&w=740"},
    {nome: "Ana Beatriz", link: "https://img.freepik.com/fotos-premium/retrato-de-uma-menina-atraente-pensativa-sorrindo-e-olhando-para-a-esquerda-branco_1258-30312.jpg?ga=GA1.1.1230285699.1743114038&semt=ais_hybrid&w=740"},
    {nome: "Rafael Almeida", link: "https://img.freepik.com/fotos-gratis/homem-bonito-sorrindo-retrato-de-rosto-feliz-close-up_53876-145493.jpg?ga=GA1.1.1230285699.1743114038&semt=ais_hybrid&w=740"},
    {nome: "Vinícius Prado", link: "https://img.freepik.com/fotos-premium/retrato-de-jovem-com-roupas-casuais-olhando-para-a-camera-em-pe-contra-um-fundo-amarelo_425904-29815.jpg?ga=GA1.1.1230285699.1743114038&semt=ais_hybrid&w=740"},
    {nome: "Lucas Freitas", link: "https://img.freepik.com/fotos-gratis/homem-de-pele-escura-jovem-barba-por-fazer-atraente-em-camiseta-vermelha-sorrindo-amplamente-rindo-de-imagens-engracadas-na-internet-expressoes-faciais-e-emocoes-positivas_176420-10256.jpg?ga=GA1.1.1230285699.1743114038&semt=ais_hybrid&w=740"}
]

const PostInfo: FunctionComponent<SpanProps> = ({autorInfo, section, isCutter}) => {
    let fontSize: string = "1.2rem";
    let backgroundColor: string = "#F6F6F6";
    let colorText: string = "#F6F6F6";
    let imageAuthorHeight  = '2.6rem';
    let maxWidth: string = "23.8rem";
    if(section === "Hero" && autorInfo.id > 1){
        fontSize = "1rem";
    }

    if(section === "ContentDiv"){
        backgroundColor = "#9C9D9D";
        colorText= "#9C9D9D";
        fontSize = "1.2rem";
    }

    if(section === "Aside"){
        backgroundColor = "#9C9D9D";
        colorText= "#9C9D9D";
        fontSize = "1rem";
        imageAuthorHeight = "2rem";
        maxWidth= "6rem";
        
    }

    if(section === "NewsOpen"){
        colorText = theme.colors.texto.cinza;
        fontSize = "1.3rem"
        backgroundColor = "#9C9D9D";
        colorText= "#9C9D9D";
    }
    
    return (
        <>
            <PostInfoContainer>   
                <ImageContainer containerHeight={imageAuthorHeight} containerMaxWidth={imageAuthorHeight}>
                        {perfilImageLinks
                        .filter((item) => item.nome === autorInfo.author)
                        .map((item) => <CardAuthorImage key={item.nome} height="100%" src={item.link}/>)}
                </ImageContainer>
                <SubtitleInfo fontSize={fontSize} backgroundColor={backgroundColor} colorText={colorText} displayType="flex">
                    <Link to={`/autores/${CutterString(autorInfo.author)}`}>
                        <AuthorName maxWidth={maxWidth} fontSize={fontSize} colorText={colorText}>{autorInfo.author} </AuthorName>
                    </Link>
                    <span>{numberToDate(autorInfo.date, isCutter)}</span>
                </SubtitleInfo>
            </PostInfoContainer>
        </>
    )
}

export default PostInfo