import { useLocation } from "react-router-dom";

import CategoryPosts from "../../components/CategoryPosts/CategoryPosts.component";
import { Container } from "../../components/Container";

import Footer from "../../components/Footer/Footer.component";
import Header from "../../components/Header/Header.component";
import { pathNameCutter } from "../../Functions/pathNameCutter";

const CategoryNewsPage = () => {
    const { pathname } = useLocation();
    const categoryName: string | null = pathNameCutter(pathname);
    return (
        <>
            <Container>
                <Header isActive={true} />
                <CategoryPosts categoryName={categoryName} />
            </Container>
            <Footer />
        </>
    );
};

export default CategoryNewsPage;
