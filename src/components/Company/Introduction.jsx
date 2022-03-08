import React, { useState } from "react";
import styled from "styled-components";
import { GmarketBold, NoteSansMedium } from "../../common/Text/Text";
import { 
    PRIMARY_COLOR, 
    DEEP_BLUE_COLOR, 
    WHITE_FONT_COLOR
} from "../../common/color/color";
import { Talent } from "./IntroductionItems/Talent";
import { Ideology } from "./IntroductionItems/Ideology";
import { Benefits } from "./IntroductionItems/Benefits";

const buttonItems = [
    {   
        id: 0,
        mainTitle: "인재상",
        subTitle: "데이터랩스가 추구하는 인재상",
    },
    {
        id:1,
        mainTitle: "우리의 이념",
        subTitle: "우리는 이렇게 일합니다",
    },
    {
        id:2,
        mainTitle: "복리후생",
        subTitle: "데이터랩스의 4가지 약속",
    }
]

const IntroSection = styled.section`
    background-color: ${DEEP_BLUE_COLOR};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6.2rem;
`

const IntroButtonContainer = styled.div`
    display: flex;
    background-color: #101e4c;
    justify-content: center;
`

const IntroButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:17rem;
    padding:2rem;
    cursor: pointer;
    background-color: ${(props) => {
            const { id, buttonIndex } = props;
            if (id === buttonIndex) {
                return WHITE_FONT_COLOR;
            }
        }};

    & p {
        color: ${(props) => {
            const { id, buttonIndex } = props;
            if (id === buttonIndex) {
                return PRIMARY_COLOR;
            }
        }};

        opacity: ${(props) => {
            const { id, buttonIndex } = props;
            if (id === buttonIndex) {
                return 1;
            }
        }};
    }
`

const Button = ({ id, mainTitle, subTitle, handleButton, buttonIndex }) => {
    return (
        <IntroButton id={id} buttonIndex={buttonIndex} onClick={() => {handleButton(id)}}>
            <GmarketBold 
                fontSize={"2rem"} 
                fontWeight={"bold"} 
                fontColor={WHITE_FONT_COLOR} 
                styles={{opacity: 0.5}}
            >{mainTitle}
            </GmarketBold>
            <NoteSansMedium 
                fontSize={"1rem"} 
                fontColor={WHITE_FONT_COLOR} 
                styles={{opacity: 0.5}} 
            >{subTitle}
            </NoteSansMedium>
        </IntroButton>
    )
}

export const Introduction = () => {
    const [buttonIndex, setButtonIndex] = useState(0);

    const handleButton = (index) => {
        setButtonIndex(index);
    }

    return (
        <>
            <IntroSection>
                <GmarketBold 
                    fontColor={WHITE_FONT_COLOR} 
                    fontSize={"3rem"} 
                    fontWeight={"bold"}
                >Company
                </GmarketBold>
                <NoteSansMedium 
                    fontColor={WHITE_FONT_COLOR} 
                    fontSize={"1.4rem"}
                >데이터랩스를 소개합니다.
                </NoteSansMedium>
                <GmarketBold 
                    fontColor={WHITE_FONT_COLOR} 
                    fontSize={"3.4rem"} 
                    styles={{opacity: 0.5}}
                >"상상이 현실이 되고 개인이 주체가 되는 회사"
                </GmarketBold>
            </IntroSection>
            <IntroButtonContainer>
                {buttonItems.map((button, index) => {
                    const { id, mainTitle, subTitle } = button;
                    return <Button 
                                key={index} 
                                id={id} 
                                buttonIndex={buttonIndex} 
                                mainTitle={mainTitle} 
                                subTitle={subTitle} 
                                handleButton={handleButton}
                            />
                })}
            </IntroButtonContainer>
            {buttonIndex === 0 && <Talent />}
            {buttonIndex === 1 && <Ideology />}
            {buttonIndex === 2 && <Benefits />}
        </>
    )
}

export default Introduction;
