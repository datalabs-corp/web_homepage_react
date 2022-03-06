import React from "react";
import styled from "styled-components";
import { MyInfoText } from "../../common/Text/Text";
import { 
    PRIMARY_COLOR, 
    DEEP_BLUE_COLOR, 
    GREY_FONT_COLOR, 
    WHITE_FONT_COLOR
} from "../../common/color/color";

const buttonItems = [
    {
        mainTitle: "인재상",
        subTitle: "데이터랩스가 추구하는 인재상",
    },
    {
        mainTitle: "우리의 이념",
        subTitle: "우리는 이렇게 일합니다",
    },
    {
        mainTitle: "복리후생",
        subTitle: "데이터랩스의 4가지 약속",
    }
]

const IntroSection = styled.section`
    background-color: ${DEEP_BLUE_COLOR};
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
    padding:2rem;
    cursor: pointer;
`

const Button = ({ mainTitle, subTitle }) => {
    return (
        <IntroButton>
            <MyInfoText fontSize={"2rem"} fontWeight={"bold"} fontColor={PRIMARY_COLOR}>{mainTitle}</MyInfoText>
            <MyInfoText fontSize={"1rem"} fontColor={PRIMARY_COLOR}>{subTitle}</MyInfoText>
        </IntroButton>
    )
}

export const Introduction = () => {
    return (
        <>
            <IntroSection>
                <MyInfoText fontColor={WHITE_FONT_COLOR} fontSize={"3rem"} fontWeight={"bold"}>Company</MyInfoText>
                <MyInfoText fontColor={WHITE_FONT_COLOR} fontSize={"1.4rem"}>데이터랩스를 소개합니다.</MyInfoText>
                <MyInfoText fontColor={WHITE_FONT_COLOR} fontSize={"3.4rem"} styles={{opacity: 0.5}}>"상상이 현실이 되고 개인이 주체가 되는 회사"</MyInfoText>
            </IntroSection>
            <IntroButtonContainer>
                    {buttonItems.map((button) => {
                        const { mainTitle, subTitle } = button;
                        return <Button mainTitle={mainTitle} subTitle={subTitle} />
                    })}
            </IntroButtonContainer>
        </>
    )
}

export default Introduction;
