import React from "react";
import styled from "styled-components"
import { GmarketBold, GmarketMedium, NoteSansMedium } from "../../../common/Text/Text";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../../common/color/color";

const Items = [
    {
        background: "https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086086/images/ideo1_yocsfa.webp",
        icon:"https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086086/images/ideo_icon1_keeuky.webp",
        title: "평등한 업무 수행",
        subTitle: ["수직관계가 아닌", "수평적 문화에서 업무 진행!"],
    },
    null,
    {
        background: "https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086089/images/ideo2_afqxrm.webp",
        icon:"https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086090/images/ideo_icon2_lezjto.webp",
        title: "자기 주도적 업무",
        subTitle: ["무리한 업무보다는", "효율적인 업무를!"],
    },
    null,
    {
        background: "https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086089/images/ideo3_o9zibr.webp",
        icon:"https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086089/images/ideo_icon3_s6shhd.webp",
        title: "자율 출퇴근제",
        subTitle: ["개인 사정에 따른", "탄력적인 출퇴근!"],
    },
    null,
    {
        background: "https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086091/images/ideo4_ysj3mf.webp",
        icon:"https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086091/images/ideo_icon4_parj5k.webp",
        title: "주 4일 근무",
        subTitle: ["모두가 행복한 회사를 위한", "데이터랩스만의 워라벨 정책!"],
    },
]

const IdeoSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem;
`

const IdeoItemContainer = styled.div`
    display: flex;
`

const IdeoItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 20vw;
    margin:2vw;

    & p {
        text-align: center;
    }
`

const ItemImageContainer = styled.div`
    width: 10vw;
    height: 10vw;
    background-image: url(${(props) => props.background});
    background-position: cover;
    background-size: cover;
    padding: 3rem;
    border-radius: 50%;
`

const ItemImage = styled.img`
    width: 100%;
    height: 100%;
`

const Item = ({ background, title, subTitle, icon }) => {
    return (
        <>
            <IdeoItem>
                <ItemImageContainer background={background}>
                    <ItemImage src={icon} alt="아이템 사진" />
                </ItemImageContainer>
                <GmarketBold fontColor={PRIMARY_COLOR} fontSize={"1.8vw"} fontWeight={"bold"}>{title}</GmarketBold>
                <div>
                    {subTitle.map((e, index) => {
                        return <NoteSansMedium key={index} fontColor={GREY_FONT_COLOR} fontSize={"1.3vw"}>{e}</NoteSansMedium>
                    })}
                </div>
            </IdeoItem>
        </>
    )
}

export const Ideology = () => {
    return (
        <IdeoSection>
            <GmarketMedium 
                styles={{marginBottom: "3vw"}} 
                fontColor={GREY_FONT_COLOR} 
                fontSize={"2.6vw"} 
            >
                데이터랩스는 이렇게 일합니다.
            </GmarketMedium>
            <IdeoItemContainer>
                {Items.map((item, index) => {
                    if (item) {
                        const { background, icon, title, subTitle } = item;
                        return <Item key={index} title={title} subTitle={subTitle} background={background} icon={icon}/>
                    } else {
                        return (
                            <div key={index} style={{display:"flex", alignItems:"center"}}>
                                <img style={{width:"2.3vw", height:"2.3vw"}} src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086085/images/plus_pdlzdq.png" alt="플러스"/>
                            </div>
                        )
                    }
                })}
            </IdeoItemContainer>
        </IdeoSection>
    )
}