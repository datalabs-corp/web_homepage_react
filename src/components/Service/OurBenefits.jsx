import React from "react";
import styled from "styled-components";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";
import { GmarketMedium, NoteSansLight } from "../../common/Text/Text";

const items = [
    {
        image: "https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086085/images/time_qgnltf.png",
        title: "개발 시간 단축",
        description: [
            "노드를 직접 운영하지 않아 온전한 개발에 집중",
        ]
    },
    {
        image: "https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086085/images/gear_lbgvaj.png",
        title: "편의성",
        description: [
            "REST API, SDK로 데이터체인에서 지원하는 모든 타입의 트랜젝션 전송 가능",
            "ERC-20, ERC721 토큰 거래내역 조회",
        ]
    },
    {
        image: "https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086085/images/lock_b66nik.png",
        title: "계정 키 관리",
        description: [
            "데이터체인 계정의 개인키 유출이 불가능한 구조를 사용",
            "독자적인 데이터체인 지갑을 쉽게 개발 가능",
        ]
    },
    {
        image: "https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086085/images/won_aco6l5.png",
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
    margin-bottom:10vw;
`

const TitleContainer = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
`

const ItemsContainer = styled.div`
    display: flex;
    margin: 3vw;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 3.8vw;
    height: 27.5vw;
    width: 19vw;
    margin: 0.5vw;
`

const ItemImage = styled.img`
    background-color: ${PRIMARY_COLOR};
    padding: 1vw;
    border-radius: 1vw;
    width: 6vw;
    height: 6vw;
`

const BenefitsItem = ({ image, title, description }) => {
    return (
        <Item>
            <ItemImage src={image} alt="아이템"/>
                <GmarketMedium styles={{marginTop:"1vw",marginBottom: "1vw"}} fontColor={GREY_FONT_COLOR} fontSize={"1.8vw"} >{title}</GmarketMedium>
                <ul>
                    {description.map((e, index) => {
                        return (
                            <li key={index} style={{listStyle: "disc", margin: "1vw" }}>
                                <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize={"1vw"} >{e}</NoteSansLight>
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
                <GmarketMedium fontColor={PRIMARY_COLOR} fontSize={"3vw"} >Our Benefits</GmarketMedium>
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