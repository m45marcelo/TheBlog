import CardAuthorContent from "../../components/CardAuthorPage/CardAuthorPage.component";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer/Footer.component";
import Header from "../../components/Header/Header.component";

const AuthorsPage = () => {
    return (
        <>
            <Container>
                <Header isActive={true} />
                <CardAuthorContent />
            </Container>
            <Footer />
        </>
    );
};

export default AuthorsPage;
