import React from "react";
import styled from "styled-components";
import { NoteSansMedium, GmarketBold, NoteSansLight } from "../../common/Text/Text";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";
// 테스트를 위한 주석입니다
// 삭제해도 무방합니다

const items = [
  {
    image: "https://i.imgur.com/7NowJCO.png", 
    headTitle : "개발 시간 단축", 
    desciption1 : `노드를 직접 운영하지 않아 온전한 개발에 집중`, 
  },
  {
    image: "https://i.imgur.com/T6PKs9a.png", 
    headTitle : "편의성", 
    desciption1 : `REST API, SDK로 데이터체인에서 지원하는 모든 타입의 트랜잭션 전송 가능\n\nERC-20, ERC-721 토큰 거래내역 조회`, 
  },
  {
    image: "https://i.imgur.com/FRY3kFf.png", 
    headTitle : "계정 키 관리", 
    desciption1 : `데이터체인 계정의 개인키 유출이 불가능한 구조를 사용\n\n독자적인 데이터체인 지갑을 쉽게 개발 가능`, 
  },
  {
    image: "https://i.imgur.com/mmOFqMU.png", 
    headTitle : "비용 절약", 
    desciption1 : `노드 설치가 필요없어 고성능의 하드웨어가 필요하지 않음\n\n블록체인 서비스 개발에 필요한 인력, 비욜 절약`, 
  },
]

const ProcessContainer = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    text-align: center;
    align-items: center; 
    margin-top: 5rem;
`
const ProcessSection = styled.section`
    background-color: white;
    align-items: center;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    @media (max-width: 720px) {
        padding: 30%;
    }
`

const CharItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media (max-width: 720px){
        flex-direction: column;
    };
    margin-top: 4rem;
`

const CharItem = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    background-color: white;
    margin: 1rem;
    min-width:15rem;
    min-height: 25rem;
    width: 20vw;
    align-items: center;
    justify-content: start;
    border-radius: 15px;
    border: 2px solid #eee;
    padding: 50px 20px;
`

const CharIcon = styled.img`
    width: 6vw;
    background-color: #0D00AA;
    margin-bottom: 2rem;
    border-radius: 15px;
    padding: 15px;
`

const Item = ({image, headTitle, desciption1}) => { 
  return ( 
      <CharItem>
          <CharIcon src={image} alt="이미지"/>
          <GmarketBold fontColor={PRIMARY_COLOR} fontSize={"1.2vw"} fontWeight={"bold"}>{`${headTitle}`}</GmarketBold>
          <div style={{marginTop: "1rem",textAlign:"center",marginBottom: "1rem"}}>
              <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize={"1vw"} >{desciption1}</NoteSansMedium>
          </div>
      </CharItem>
  )
}

export const ServiceProcess = () => {
  return (
      <>
        <ProcessContainer>
              <ProcessSection>
                <div>
                  <GmarketBold fontColor={PRIMARY_COLOR} fontSize={"2.5vw"} fontWeight={"bold"}>Our Consulting</GmarketBold>
                  <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize={"1.4vw"}>블록체인 기반 시스템 구축 및 컨설팅 서비스</NoteSansMedium>
                </div>
                <img style={{width:"70vw", marginTop: '4rem'}} src="https://i.imgur.com/kAakfDr.png" alt="이미지"/>
              </ProcessSection>
          </ProcessContainer>

        <ProcessContainer>
              <ProcessSection>
                <div>
                  <GmarketBold fontColor={PRIMARY_COLOR} fontSize={"2.5vw"} fontWeight={"bold"}>Our Benefits</GmarketBold>
                </div>

                <CharItemsContainer> 
                    {items.map((item,index) => { 
                        const { image, headTitle, desciption1 } = item;
                        return <Item 
                                    key={index}
                                    image={image}
                                    headTitle={headTitle} 
                                    desciption1={desciption1} 
                                />
                    })}
                </CharItemsContainer>
              </ProcessSection>
          </ProcessContainer>
      </>
  )
}

