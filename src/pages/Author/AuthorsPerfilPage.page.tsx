import { useParams } from "react-router-dom";
import AuthorPosts from "../../components/AuthorPosts/AuthorPosts.component";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer/Footer.component";
import Header from "../../components/Header/Header.component";

const AuthorsPerfilPage = () => {
    const params = useParams().nome;
    const nameCutter: string[] | undefined = params?.split("-");
    const newName: string | null = nameCutter? `${nameCutter[0]} ${nameCutter[1]}`: null;
    return (
        <>
            <Container>
                <Header isActive={true} />
                <AuthorPosts perfilName={newName} />
            </Container>
            <Footer />
        </>
    );
};

export default AuthorsPerfilPage;
