import React from "react";
import styled from "styled-components";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";
import { MyInfoText } from "../../common/Text/Text";

const items = [
    {
        image: "/images/time.png",
        title: "개발 시간 단축",
        description: [
            "노드를 직접 운영하지 않아 온전한 개발에 집중",
        ]
    },
    {
        image: "/images/gear.png",
        title: "편의성",
        description: [
            "REST API, SDK로 데이터체인에서 지원하는 모든 타입의 트랜젝션 전송 가능",
            "ERC-20, ERC721 토큰 거래내역 조회",
        ]
    },
    {
        image: "/images/lock.png",
        title: "계정 키 관리",
        description: [
            "데이터체인 계정의 개인키 유출이 불가능한 구조를 사용",
            "독자적인 데이터체인 지갑을 쉽게 개발 가능",
        ]
    },
    {
        image: "/images/won.png",
        title: "비용 절약",
        description: [
            "노드 설치가 필요업어 고성능의 하드웨어가 필요하지 않음",
            "블록체인 서비스 개발에 필요한 인력, 비용 절약",
        ]
    },
]

const BenefitsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom:10rem;
`

const TitleContainer = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
`

const ItemsContainer = styled.div`
    display: flex;
    margin: 3rem;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 3.8rem;
    height: 27.5rem;
    width: 19rem;
    margin: 0.5rem;
`

const ItemImage = styled.img`
    background-color: ${PRIMARY_COLOR};
    padding: 1rem;
    border-radius: 1rem;
    width: 6rem;
    height: 6rem;
`

const BenefitsItem = ({ image, title, description }) => {
    return (
        <Item>
            <ItemImage src={image} alt="아이템"/>
                <MyInfoText styles={{marginTop:"1rem",marginBottom: "1rem"}} fontColor={GREY_FONT_COLOR} fontSize={"1.8rem"} >{title}</MyInfoText>
                <ul>
                    {description.map((e, index) => {
                        return (
                            <li key={index} style={{listStyle: "disc", margin: "1rem" }}>
                                <MyInfoText fontColor={GREY_FONT_COLOR} fontSize={"1rem"} >{e}</MyInfoText>
                            </li>
                        )
                    })}
                </ul>
        </Item>
    )
}

export const OurBenefits = () => {
    return (
        <BenefitsSection>
            <TitleContainer>
                <MyInfoText fontColor={PRIMARY_COLOR} fontSize={"3rem"} >Our Benefits</MyInfoText>
            </TitleContainer>
            <ItemsContainer>
                {items.map((item, index) => {
                    const { image, title, description } = item;
                    return <BenefitsItem key={index} image={image} title={title} description={description}/>
                })}
            </ItemsContainer>
        </BenefitsSection>
    )
}