import theme from "../../styles/theme";
import { DivLeft } from "../ContentContainer/ContentContainer.styles";
import { ContentDiv, DivTitle } from "../ContentDiv/ContentDiv.style";
import { AboutText } from "../Footer/Footer.styles";
import {
    AboutContainer,
    AboutHeroContainer,
    ContainerImage,
    TextContentContainer,
} from "./AboutUs.styles";

const AboutUs = () => {
    return (
        <DivLeft maxWidth="100%">
            <ContentDiv marginBottom="1.4rem">
                <DivTitle
                    fontSize="2.6rem"
                    fontWeight="700"
                    paddingBottom="2.2rem"
                    maxWidth="100%"
                    textCenter={true}
                >
                    Sobre Nós
                </DivTitle>
                <AboutHeroContainer>
                    <ContainerImage
                        heightImage="35.6rem"
                        backgroundImage="https://thumbs.dreamstime.com/b/apresenta%C3%A7%C3%A3o-de-marca-musical-no-palco-ou-concerto-concert-live-defocsed-entretenimento-iluminado-com-feixes-raios-laser-156853789.jpg"
                    />
                    <ContainerImage
                        heightImage="35.6rem"
                        backgroundImage="https://thumbs.dreamstime.com/b/feche-o-processador-ai-chip-na-placa-de-circuito-brilhando-com-luzes-azuis-e-laranja-representando-tecnologia-avan%C3%A7ada-inova%C3%A7%C3%A3o-353844503.jpg"
                    />
                    <ContainerImage
                        heightImage="35.6rem"
                        backgroundImage="https://images.pexels.com/photos/29031562/pexels-photo-29031562/free-photo-of-notas-de-euro-e-lei-com-calculadora-na-mesa.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                    <ContainerImage
                        heightImage="35.6rem"
                        backgroundImage="https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_1280.jpg"
                    />
                </AboutHeroContainer>
                <DivTitle
                    fontSize="2rem"
                    fontWeight="700"
                    paddingBottom="0.8rem"
                    maxWidth="100%"
                >
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </DivTitle>
                <AboutText
                    marginText="0rem 0rem 4.4rem 0rem"
                    fontWeight="500"
                    fontSize="1.4rem"
                    maxWidth="100%"
                    textColor={theme.colors.texto.text}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore fuga tempora cupiditate ipsum, quam dignissimos
                    deleniti corporis asperiores at, eum corrupti velit
                    architecto aut mollitia similique, nobis obcaecati eveniet
                    vitae! Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Quod facilis porro nihil cum corrupti molestiae
                    accusamus qui facere corporis perferendis. Quis nihil
                    perferendis ab ullam ut. Exercitationem vero consequuntur
                    quo! Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. explicabo magni sit sed ut voluptate ex enim eos
                    pariatur molestias, necessitatibus reprehenderit qui. Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                    repellat sapiente, quo corporis iure dignissimos quia odio
                    mollitia ea perspiciatis consectetur possimus voluptatum
                    minus at necessitatibus, explicabo, magnam corrupti cumque?
                </AboutText>

                <AboutContainer>
                    <ContainerImage
                        heightImage="63.8rem"
                        widthImage="60.8rem"
                        backgroundImage="https://images.pexels.com/photos/29031562/pexels-photo-29031562/free-photo-of-notas-de-euro-e-lei-com-calculadora-na-mesa.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                    <TextContentContainer>
                        <DivTitle
                            fontSize="2rem"
                            fontWeight="700"
                            paddingBottom="0rem"
                            maxWidth="60.8rem"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea nesciunt ullam odio laboriosam qui iusto.{" "}
                        </DivTitle>

                        <AboutText
                            marginText="0rem"
                            fontWeight="500"
                            fontSize="1.4rem"
                            maxWidth="60.8rem"
                            textColor={theme.colors.texto.text}
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Placeat corporis minima id autem laboriosam
                            amet, ipsam ea excepturi. Fuga incidunt repudiandae
                            molestiae sit, aliquam ipsum ullam earum magni
                            cupiditate est. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Inventore est rem
                            dolore repudiandae incidunt eaque cumque tenetur
                            facere fugiat reprehenderit amet nihil minima vero
                            laboriosam!
                        </AboutText>

                        <DivTitle
                            fontSize="2rem"
                            fontWeight="700"
                            paddingBottom="0rem"
                            maxWidth="60.8rem"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea nesciunt ullam odio laboriosam qui iusto.{" "}
                        </DivTitle>

                        <AboutText
                            marginText="0rem"
                            fontWeight="500"
                            fontSize="1.4rem"
                            maxWidth="60.8rem"
                            textColor={theme.colors.texto.text}
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Placeat corporis minima id autem laboriosam
                            amet, ipsam ea excepturi. Fuga incidunt repudiandae
                            molestiae sit, aliquam ipsum ullam earum magni
                            cupiditate est. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Inventore est rem
                            dolore repudiandae incidunt eaque cumque tenetur
                            facere fugiat reprehenderit amet nihil minima vero
                            laboriosam!
                        </AboutText>
                    </TextContentContainer>
                </AboutContainer>
            </ContentDiv>
        </DivLeft>
    );
};

export default AboutUs;
