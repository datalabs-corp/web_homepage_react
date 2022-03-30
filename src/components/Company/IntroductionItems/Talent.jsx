import React from "react";
import styled from "styled-components";
import { GmarketBold, GmarketMedium, NoteSansMedium } from "../../../common/Text/Text";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../../common/color/color";

const Items = [
    {
        image: "https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086091/images/pro_b1vbkr.png",
        title: "Pro 정신",
        subTitle: ["프로정신과", "책임감 있는 인재"],
    },
    null,
    {
        image: "https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086088/images/light_r8uwnz.png",
        title: "자율과 책임",
        subTitle: ["자기주도적으로", "업무 수행하는 인재"],
    },
    null,
    {
        image: "https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086089/images/graph_ggfo1x.png",
        title: "개인의 발전이 회사의 성공",
        subTitle: ["지속적인 자기발전을", "추구하는 인재"],
    },
]

const TalentSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5vw;
`

const TalentItemContainer = styled.div`
    display: flex;
`

const TalentItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 30vh;
    margin:2vw;

    & p {
        text-align: center;
    }
`

const ItemImageContainer = styled.div`
    width: 8vw;
    height: 8vw;
    background-color: ${PRIMARY_COLOR};
    padding: 2vw;
    border-radius: 50%;
`

const ItemImage = styled.img`
    width: 100%;
    height: 100%;
`

const Item = ({ image, title, subTitle }) => {
    return (
        <>
            <TalentItem>
                <ItemImageContainer>
                    <ItemImage src={image} alt="아이템 사진" />
                </ItemImageContainer>
                <GmarketBold styles={{width:"12vw"}} fontColor={PRIMARY_COLOR} fontSize={"1.8vw"} fontWeight={"bold"}>{title}</GmarketBold>
                <div>
                    {subTitle.map((e, index) => {
                        return <NoteSansMedium key={index} fontColor={GREY_FONT_COLOR} fontSize={"1.3vw"}>{e}</NoteSansMedium>
                    })}
                </div>
            </TalentItem>
        </>
    )
}

export const Talent = () => {
    return (
        <TalentSection>
            <GmarketMedium styles={{marginBottom: "3vw"}} fontColor={GREY_FONT_COLOR} fontSize={"2.6vw"} >데이터랩스는 이런 분을 찾고 있습니다.</GmarketMedium>
            <TalentItemContainer>
                {Items.map((item, index) => {
                    if (item) {
                        const { image, title, subTitle } = item;
                        return <Item key={index} title={title} subTitle={subTitle} image={image} />
                    } else {
                        return (
                            <div key={index} style={{display:"flex", alignItems:"center"}}>
                                <img style={{width:"2.3vw", height:"2.3vw"}} src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086085/images/plus_pdlzdq.png" alt="이미지"/>
                            </div>
                        )
                    }
                })}
            </TalentItemContainer>
        </TalentSection>
    )
}