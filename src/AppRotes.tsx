import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.page";
import NewsPage from "./pages/News/NewsPage.page";
import AuthorsPage from "./pages/Author/AuthorsPage.page";
import AuthorsPerfilPage from "./pages/Author/AuthorsPerfilPage.page";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import CategoryNewsPage from "./pages/Category/CategoryNewsPage.page";
import AboutPage from "./pages/About/AboutPage.page";
import ContactPage from "./pages/Contact/ContactPage.page";

function AppRotes() {
    return (
        <BrowserRouter>
            <ScrollTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news/:id" element={<NewsPage />} />
                <Route path="/autores" element={<AuthorsPage />} />
                <Route path="/autores/:nome" element={<AuthorsPerfilPage />} />
                <Route path="/categoria/:nome" element={<CategoryNewsPage/>} />
                <Route path="/sobrenos" element={<AboutPage/>} />
                <Route path="/contato" element={<ContactPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRotes;
