import Contacts from "../../components/Contacts/Contacts.component"
import { Container } from "../../components/Container"
import { ContainerBody } from "../../components/ContainerBody/ContainerBody.style"
import Footer from "../../components/Footer/Footer.component"
import Header from "../../components/Header/Header.component"

const ContactPage = () => {
    return(
        <>
            <Container>
                <Header isActive={false} />
                <ContainerBody>
                    <Contacts/>
                </ContainerBody>
            </Container>
            <Footer />
        </>
    )
}

export default ContactPage;