import { useState } from "react";
import {
    ButtonNextPage,
    ButtonNextPageContainer,
} from "./ButtonNextPage.styles";

interface ButtonNextPageDivProps {
    setButton: (value: number) => void;
}

const ButtonNextPageDiv: React.FC<ButtonNextPageDivProps> = ({ setButton }) => {
    const [activePage, setActivePage] = useState<number>(1);

    const handlePageClick = (value: number) => {
        setActivePage(value);
        setButton(value);
    };

    const handleNext = () => {
        if (activePage < 4) {
            handlePageClick(activePage + 1);
        }
    };

    const handlePrev = () => {
        if (activePage > 1) {
            handlePageClick(activePage - 1);
        }
    };

    return (
        <ButtonNextPageContainer>
            <ButtonNextPage active={false} onClick={handlePrev}>
                &lt;
            </ButtonNextPage>

            {[1, 2, 3, 4].map((num) => (
                <ButtonNextPage
                    key={num}
                    active={activePage === num}
                    type="button"
                    onClick={() => handlePageClick(num)}
                    value={num}
                >
                    {num}
                </ButtonNextPage>
            ))}

            <ButtonNextPage active={false} onClick={handleNext}>
                &gt;
            </ButtonNextPage>
        </ButtonNextPageContainer>
    );
};

export default ButtonNextPageDiv;
