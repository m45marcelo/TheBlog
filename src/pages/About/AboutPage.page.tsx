import AboutUs from "../../components/AboutUs/AboutUs.component"
import { Container } from "../../components/Container"
import { ContainerBody } from "../../components/ContainerBody/ContainerBody.style"
import Footer from "../../components/Footer/Footer.component"
import Header from "../../components/Header/Header.component"

const AboutPage = () => {
    return(
        <>
            <Container>
                <Header isActive={false}/>
                <ContainerBody>
                    <AboutUs/>
                </ContainerBody>
            </Container>
            <Footer/>
        </>
    )
}

export default AboutPage