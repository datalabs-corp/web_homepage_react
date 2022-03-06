import React from "react";
import styled from "styled-components";
import { MyInfoText } from "../../../common/Text/Text";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../../common/color/color";

const Items = [
    {
        image: "/images/pro.png",
        title: "Pro 정신",
        subTitle: "프로정신과 책임감 있는 인재",
    },
    {
        image: "/images/light.png",
        title: "의미있는 일",
        subTitle: "유의미한 일을 추구하는 인재",
    },
    {
        image: "/images/graph.png",
        title: "개인의 성공은 회사의 성공",
        subTitle: "개인의 성장을 최우선으로 하는 인재",
    },
]

const TalentSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TalentItemContainer = styled.div`
    display: flex;

`

const TalentItem = styled.div`

`

const ItemImage = styled.img`
    /* width: 1rem;
    height: 1rem; */
    padding:3rem;
    background-color: ${PRIMARY_COLOR};
`

const Item = ({ image, title, subTitle }) => {
    return (
        <TalentItem>
            <ItemImage src={image} alt="아이템 사진" />
            <MyInfoText>{title}</MyInfoText>
            <MyInfoText>{subTitle}</MyInfoText>
        </TalentItem>
    )
}

export const Talent = () => {
    return (
        <TalentSection>
            <MyInfoText fontColor={GREY_FONT_COLOR} fontSize={"2.6rem"} >데이터랩스는 이런 분을 찾고 있습니다.</MyInfoText>
            <TalentItemContainer>
                {Items.map((item, index) => {
                    const { image, title, subTitle } = item;
                    return <Item key={index} title={title} subTitle={subTitle} image={image} />
                })}
            </TalentItemContainer>
        </TalentSection>
    )
}