import React from "react";
import styled from "styled-components";
import { MyInfoText } from "../../../common/Text/Text";
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
    flex-direction: column;
    align-items: center;
    height: 20rem;
    margin:2rem;
    background-color: pink;

    & li {
        list-style: disc;
    }

    & p {
        text-align: center;
    }
`

const Item = ({ headNumber, title, subTitle }) => {
    return (
        <>
            <BenefitsItem>
                <MyInfoText fontColor={PRIMARY_COLOR} fontSize={"1.8rem"} fontWeight={"bold"}>{title}</MyInfoText>
                <ul>
                    {subTitle.map((e, index) => {
                        return (
                            <li>
                                <MyInfoText 
                                    key={index} 
                                    fontColor={GREY_FONT_COLOR} 
                                    fontSize={"1.3rem"}
                                >
                                    {e}
                                </MyInfoText>
                            </li>
                        )
                    })}
                </ul>
            </BenefitsItem>
        </>
    )
}

export const Benefits = () => {
    return (
        <BenefitsSection>
            <MyInfoText 
                styles={{marginBottom: "3rem"}} 
                fontColor={GREY_FONT_COLOR} 
                fontSize={"2.6rem"} 
            >
                데이터랩스만의 특별한 복리후생
            </MyInfoText>
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