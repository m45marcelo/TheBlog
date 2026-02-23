import { useNews } from "../../context/NewsContext.context";
import Card1 from "../Cards/Card1/Card1.component";

import { HeroContainer } from "./Hero.style";
const Hero = () => {
    const { news } = useNews();
    return(
        <>
            <HeroContainer >
                {news && news.map((item) => {
                    if(item.id <= 5){
                        return <Card1 news={item} key={item.id}/>
                        }
                    }
                )}
            </HeroContainer>
        </>
    )
}

export default Hero