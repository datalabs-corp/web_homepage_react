import React from "react";
import styled from "styled-components";
import { GmarketBold, GmarketMedium, NoteSansMedium, GmarketLight } from "../../../common/Text/Text";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../../common/color/color";

const Items = [
    {   
        headNumber: "01",
        title: "업무",
        subTitle: ["1인 2기술", "No Boss", "30분 회의"],
    },
    {
        headNumber: "02",
        title: "보상",
        subTitle: ["수시평가 신청과 승진", "스톡옵션", "옴버즈맨 제도"],
    },
    {
        headNumber: "03",
        title: "근무",
        subTitle: ["주 4일 근무", "년 1주 연속 휴가", "객년 2주 Refresh 휴가"],
    },
    {
        headNumber: "04",
        title: "복지",
        subTitle: ["헬스, 도서구매, 회사 콘도, 동호회 지원", "사내 강사 보상", "주택자금 무이자 대출"],
    },
]

const BenefitsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem;
`

const BenefitsItemContainer = styled.div`
    display: flex;
`

const BenefitsItem = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 15.6vw;
    width: 15.8vw;
    margin: 1vw;
    padding: 3vw;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    border-top: solid 10px ${PRIMARY_COLOR};

    & li {
        list-style: disc;
        margin:0
    }

    & p {
        /* text-align: center; */
    }
`

const Item = ({ headNumber, title, subTitle }) => {
    return (
        <>
            <BenefitsItem>
                <GmarketBold fontColor={PRIMARY_COLOR} fontSize={"2.5vw"} fontWeight={"bold"}>{title}</GmarketBold>
                <ul>
                    {subTitle.map((e, index) => {
                        return (
                            <li>
                                <NoteSansMedium 
                                    key={index} 
                                    fontColor={GREY_FONT_COLOR} 
                                    fontSize={"1vw"}
                                >
                                    {e}
                                </NoteSansMedium>
                            </li>
                        )
                    })}
                </ul>
                <div style={{position: "absolute", top: -90, left:10}}>
                    <GmarketLight fontColor={"#E4E6FF"} fontSize={"5rem"} fontWeight={"100"} >{headNumber}</GmarketLight>
                </div>
            </BenefitsItem>
        </>
    )
}

export const Benefits = () => {
    return (
        <BenefitsSection>
            <GmarketMedium 
                styles={{marginBottom: "6vw"}} 
                fontColor={GREY_FONT_COLOR} 
                fontSize={"2.6vw"} 
            >
                데이터랩스만의 특별한 복리후생
            </GmarketMedium>
            <BenefitsItemContainer>
                {Items.map((item, index) => {
                    const { headNumber, title, subTitle } = item;
                    return <Item 
                                key={index}
                                headNumber={headNumber}
                                title={title} 
                                subTitle={subTitle} 
                            />
                })}
            </BenefitsItemContainer>
        </BenefitsSection>
    )
}