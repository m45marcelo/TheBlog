import { NewsletterButton, NewsletterContainer, NewsletterInput, NewsletterSpan } from "./NewsletterDiv.styles"

const NewsletterDiv = () => {
    return(
        <NewsletterContainer>
            <NewsletterInput type="text" placeholder="Digite seu email"/>
            <NewsletterButton marginButton="0rem 0rem 0.4rem 0rem" type="button">INSCREVER-SE</NewsletterButton>
            <NewsletterSpan>Não se preocupe, não enviamos spam</NewsletterSpan>
        </NewsletterContainer>
    )
}

export default NewsletterDiv