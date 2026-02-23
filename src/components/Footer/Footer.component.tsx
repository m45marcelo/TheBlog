import { useNews } from "../../context/NewsContext.context";
import theme from "../../styles/theme";
import { AsideContentDiv } from "../Aside/Aside.styles";
import Card3 from "../Cards/Card3/Card3.component";
import CategoryCard from "../Cards/CategoryCard/CategoryCard.component";
import { DivTitle } from "../ContentDiv/ContentDiv.style";
import {
    AboutItems,
    AboutText,
    DivContainerGrig,
    DivFooter,
    FooterContainer,
    PopularItems,
} from "./Footer.styles";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const { news } = useNews();
    return (
        <FooterContainer>
            <DivContainerGrig>
                <DivFooter>
                    <DivTitle
                        fontSize="1.8rem"
                        fontWeight="700"
                        paddingBottom="0.4rem"
                    >
                        Sobre Nós
                    </DivTitle>
                    <hr />
                    <AboutText maxWidth="39.8rem" fontSize="1.6rem" marginText="1.4rem 0rem 1rem 0rem" fontWeight="500" textColor={theme.colors.texto.cinza}>
                        Bem-vindo ao The Blog , o seu portal de notícias
                        confiável para informações relevantes, análises
                        aprofundadas e conteúdos que conectam o mundo ao seu dia
                        a dia. Aqui temos um compromisso com a verdade.
                    </AboutText>
                    <AboutItems>
                        <FaFacebookF size={18} />
                        <FaTwitter size={18} />
                        <FaInstagram size={18} />
                    </AboutItems>
                </DivFooter>
                <DivFooter>
                    <DivTitle
                        fontSize="1.8rem"
                        fontWeight="600"
                        paddingBottom="0.4rem"
                    >
                        Posts Populares
                    </DivTitle>
                    <hr />
                    <PopularItems>
                        <AsideContentDiv isAside={false}>
                            {news &&
                                news.map((item) => {
                                    if (item.id > 11 && item.id <= 13) {
                                        return (
                                            <Card3
                                                news={item}
                                                section="Footer"
                                                key={item.id}
                                            />
                                        );
                                    }
                                    return null;
                                })}
                        </AsideContentDiv>
                    </PopularItems>
                </DivFooter>
                <DivFooter>
                    <DivTitle
                        fontSize="1.8rem"
                        fontWeight="600"
                        paddingBottom="0.4rem"
                    >
                        Categorias
                    </DivTitle>
                    <hr />
                    <CategoryCard section="Footer" isAside={false} />
                </DivFooter>
            </DivContainerGrig>
        </FooterContainer>
    );
};

export default Footer;
