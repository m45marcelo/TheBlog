import { useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer/Footer.component";
import Header from "../../components/Header/Header.component";
import NewsOpen from "../../components/NewsOpen/NewsOpen.component";


const NewsPage = () => {
    const params = useParams().id;
    const idNumber: number = Number(params);
    return (
        <>
            <Container>
                <Header isActive={false} />
                <NewsOpen idNews={idNumber} />
            </Container>
            <Footer />
        </>
    );
};

export default NewsPage;
