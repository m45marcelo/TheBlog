import { HiOutlineMail } from "react-icons/hi";
import theme from "../../styles/theme";
import { AuthorTitleSpan } from "../AuthorSocialMedia/AuthorSocialMedia.styles";
import { ContentDiv, DivTitle } from "../ContentDiv/ContentDiv.style";
import { AboutText } from "../Footer/Footer.styles";
import {
    ContactContainer,
    ContactInfoContainer,
    ContactInfoContent,
    FormContactContainer,
    FormContactInput,
    FormContactInputContainer,
    FormContactTextarea,
} from "./Contacts.styles";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { NewsletterButton } from "../NewsletterDiv/NewsletterDiv.styles";

const Contacts = () => {
    return (
        <ContentDiv marginBottom="5rem">
            <DivTitle fontSize="2rem" fontWeight="600" paddingBottom="1.2rem">
                Vamos conversar sobre tudo
            </DivTitle>
            <ContactContainer>
                <FormContactContainer>
                    <FormContactTextarea placeholder="Me mande uma menssagem" />
                    <FormContactInputContainer>
                        <FormContactInput placeholder="Name*" />
                        <FormContactInput placeholder="Email*" />
                    </FormContactInputContainer>
                </FormContactContainer>

                <ContactInfoContainer>
                    <ContactInfoContent>
                        <FaLocationDot size={"2rem"} />
                        <AuthorTitleSpan fontSize="2rem" fontWeight="600" letterSpacing="0rem">Endereço</AuthorTitleSpan>
                        <AboutText fontSize="1.4rem" maxWidth="100%" marginText="0rem" fontWeight="400" textColor={theme.colors.texto.preto}>Setor Industrial, Balsas - Ma</AboutText>
                    </ContactInfoContent>

                    <ContactInfoContent>
                    <HiOutlineMail  size={"2rem"}/>
                        <AuthorTitleSpan fontSize="2rem" fontWeight="600" letterSpacing="0rem">E mail</AuthorTitleSpan>
                        <AboutText fontSize="1.4rem" maxWidth="100%" marginText="0rem" fontWeight="400" textColor={theme.colors.texto.preto}>m45marceloaugusto@gmail.com</AboutText>
                    </ContactInfoContent>

                    <ContactInfoContent>
                        <FaPhone size={"2rem"}/>
                        <AuthorTitleSpan fontSize="2rem" fontWeight="600" letterSpacing="0rem">Endereço</AuthorTitleSpan>
                        <AboutText fontSize="1.4rem" maxWidth="100%" marginText="0rem" fontWeight="400" textColor={theme.colors.texto.preto}>(99) 9 9214-4545</AboutText>
                    </ContactInfoContent>
                </ContactInfoContainer>
            </ContactContainer>
            <NewsletterButton marginButton="2.8rem 0rem 0rem 0rem">ENVIAR MENSAGEM</NewsletterButton>
        </ContentDiv>
    );
};

export default Contacts;
