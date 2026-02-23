import { usePerfilLinks } from "../../../context/PerfilImagesLink.context";
import Aside from "../../Aside/Aside.component";
import CardAuthor from "../CardAuthor/CardAuthor.component";
import { ContainerBody } from "../../ContainerBody/ContainerBody.style";
import { DivLeft } from "../../ContentContainer/ContentContainer.styles";
import { ContentDiv, DivCards, DivTitle } from "../../ContentDiv/ContentDiv.style";

const CardAuthorContent = () => {
    const { perfil } = usePerfilLinks();

    return (
        <ContainerBody>
            <DivLeft maxWidth="82rem">
                <ContentDiv marginBottom="0rem">
                    <DivTitle
                        fontSize="2rem"
                        maxWidth="35.8rem"
                        fontWeight="600"
                        paddingBottom="1rem"
                    >
                        Todos os Autores
                    </DivTitle>
                    <DivCards gridTemplate="repeat(2, 1fr)" gridGap="6.4rem 3.8rem">
                        {perfil && perfil.map((item) => {
                            return <CardAuthor key={item.nome} perfilImage={item}/>
                        })}
                    </DivCards>
                </ContentDiv>
            </DivLeft>
            <Aside />
        </ContainerBody>
    );
};

export default CardAuthorContent;
