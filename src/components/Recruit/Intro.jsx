import React from "react";
import styled from "styled-components";
import { GmarketBold, GmarketLight, NoteSansMedium, NoteSansLight} from "../../common/Text/Text";
import { PRIMARY_COLOR, GREY_FONT_COLOR, DEEP_BLUE_COLOR} from "../../common/color/color";

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

const IntroSection = styled.section`
    padding: 10vw;
`

const TalentItemContainer = styled.div`
    display: flex;
    margin:3.5vw;
`

const TalentItem = styled.div`
    display: flex;
    width: 10vw;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 14vw;

    & p {
        text-align: center;
    }
`

const ItemImageContainer = styled.div`
    width: 7vw;
    height: 7vw;
    background-color: ${DEEP_BLUE_COLOR};
    padding: 2vw;
    border-radius: 50%;
`

const ItemImage = styled.img`
    width: 100%;
    height: 100%;
`

const List = styled.li`
    list-style: disc;
`

const Item = ({ image, title, subTitle }) => {
    return (
        <>
            <TalentItem>
                <ItemImageContainer>
                    <ItemImage src={image} alt="아이템 사진" />
                </ItemImageContainer>
                <GmarketBold styles={{width:"12vw"}} fontColor={DEEP_BLUE_COLOR} fontSize={"1.5vw"} fontWeight={"bold"}>{title}</GmarketBold>
                <div>
                    {subTitle.map((e, index) => {
                        return <NoteSansMedium key={index} fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>{e}</NoteSansMedium>
                    })}
                </div>
            </TalentItem>
        </>
    )
}


export const Intro = () => {
    return (
        <IntroSection>
            <div style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginBottom:"5vw"}}>
                <GmarketBold fontColor={PRIMARY_COLOR} fontSize={"2.5vw"}>데이터랩스의 인재상</GmarketBold>
                <GmarketLight fontSize={"2vw"}>
                    데이터랩스는 프로 정신을 가지고 의미있는 일을
                </GmarketLight>
                <GmarketLight fontSize={"2vw"}>
                    책임감을 가지고 만들어 가는 N잡러를 찾고 있습니다.
                </GmarketLight>
            </div>
            <div style={{display: "flex",justifyContent: "center", alignItems:"center"}}>
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
                <ul style={{width: "30vw"}}>
                    <List>
                        <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize={"1.2vw"} >데이터랩스는 정해진 일을 반복하지 않습니다.</NoteSansLight>
                    </List>
                    <List>
                        <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize={"1.2vw"} >새로운 시장을 개척해 나야 하기 때문에 고달플 수 있습니다.</NoteSansLight>
                    </List>
                    <List>
                        <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize={"1.2vw"} >스타트업 이기에 하나의 일에 집중하지 못할 수도 있습니다.</NoteSansLight>
                    </List>
                    <List>
                        <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize={"1.2vw"} >서로에게 맞는 체계를 만들어야 하기 때문에 어려울 수도 있습니다.</NoteSansLight>
                    </List>
                    <List>
                        <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize={"1.2vw"} >그러나 열린 마음으로 하는 대화는 데이터랩스만의 장점입니다.</NoteSansLight>
                    </List>
                    <List>
                        <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize={"1.2vw"} >새로운 시장과 합리적인 체계를 함께 구축해, 좋은 회사를 만들고 싶으신 분들께 데이터랩스의 문은 활짝 열려 있습니다.</NoteSansLight>
                    </List>
                </ul>
            </div>
        </IntroSection>
    )
}
