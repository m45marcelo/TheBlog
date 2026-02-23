import { DivLeft } from "./ContentContainer.styles";
import SectionLastPosts from "../Sections/SectionLastPosts/SectionLastPosts.component";
import SectionFeaturedPosts from "../Sections/SectionFeaturedPosts/SectionFeaturedPosts.component";
import SectionHighlightsForYou from "../Sections/SectionHighlightsForYou/SectionHighlightsForYou.component";

const ContentContainer = () => {
    return (
        <>
            <DivLeft maxWidth="92.8rem">
                <SectionHighlightsForYou/>
                <SectionFeaturedPosts/>
                <SectionLastPosts/>
            </DivLeft>
        </>
    );
};

export default ContentContainer;
