import Aside from "../../components/Aside/Aside.component";
import { Container } from "../../components/Container";
import { ContainerBody } from "../../components/ContainerBody/ContainerBody.style";
import ContentContainer from "../../components/ContentContainer/ContentContainer.component";
import Footer from "../../components/Footer/Footer.component";
import Header from "../../components/Header/Header.component";
import Hero from "../../components/Hero/Hero.component";

const HomePage = () => {
    return (
        <>
            <Container>
                <Header isActive={false} />
                <Hero />
                <ContainerBody>
                    <ContentContainer />
                    <Aside />
                </ContainerBody>
            </Container>
            <Footer />
        </>
    );
};

export default HomePage;
