import AppRotes from "./AppRotes";
import { CategoriesProvider } from "./context/CategoriesContext.context";
import { NewsProvider } from "./context/NewsContext.context";
import { PerfilImageAuthorProvider } from "./context/PerfilImagesLink.context";
//import { Container } from "./components/Container"

function App() {
    return (
        <NewsProvider>
            <PerfilImageAuthorProvider>
                <CategoriesProvider>
                    <AppRotes />
                </CategoriesProvider>
            </PerfilImageAuthorProvider>
        </NewsProvider>
    );
}

export default App;
