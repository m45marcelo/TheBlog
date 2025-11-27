import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import { HeaderContainer, HeaderItem, HeaderItems, HeaderLogo } from "./Header.styles"


const Header = ({isActive} : {isActive: boolean}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const goTo = (path: string) => navigate(path);

    return(
        <>
            <HeaderContainer>
                <HeaderLogo src={Logo} alt="Logo" onClick={() => goTo('/')}/>
                    <HeaderItems>
                        <HeaderItem active={location.pathname === '/' } as="h2" onClick={() => goTo('/')}>Home</HeaderItem>
                        <HeaderItem active={location.pathname === '/autores' || isActive} as="h2" onClick={() => goTo('/autores')}>Autores</HeaderItem>
                        <HeaderItem active={location.pathname === '/sobrenos'} as="h2" onClick={() => goTo('/sobrenos')}>Sobre nós</HeaderItem>
                        <HeaderItem active={location.pathname === '/contato'} as="h2" onClick={() => goTo('/contato')}>Contato</HeaderItem>
                </HeaderItems>
            </HeaderContainer>
        </>
    )
}

export default Header