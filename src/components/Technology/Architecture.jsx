import React from "react";
import styled from "styled-components";
import { GmarketBold, MyInfoText, NoteSansMedium } from "../../common/Text/Text";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";

const items = [
    {
        headTitle : "프롬프트 엔지니어링", 
        desciption1 : "작업 지시사항을 입력의 일부로 포함시켜 모델의 동작 유도", 
    },
    {
        headTitle : "점진적 해동", 
        desciption1 : "상위 층부터 시작해 점진적으로 하위 층의 가중치를 학습 가능하게 설정", 
    },
    {
        headTitle : "퓨샷 학습", 
        desciption1 : "적은 수의 예시만으로 새로운 작업 수행 능력 향상", 
    },
    {
        headTitle : "과적합 방지 기법 강화", 
        desciption1 : "강한 정규화, 조기 종료를 통해 작은 데이터셋의 과적합 방지", 
    },
]

const ArchSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    padding-top: 0;
`

const CharItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media (max-width: 720px){
        flex-direction: column;
    };
    margin-top: 2rem;
    margin-left: 20px;
    margin-right: 20px;
`

const CharItem = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    background-color: white;
    margin: 1rem;
    min-width:13rem;
    min-height: 10rem;
    width: 20vw;
    align-items: center;
    justify-content: center;
    border: 2px solid #ddd;
    border-radius: 15px;
    padding: 20px;
`

const Item = ({headTitle, desciption1}) => { 
    return ( 
        <CharItem>
            <NoteSansMedium fontColor={PRIMARY_COLOR} fontSize={"1.3vw"} fontWeight={"bold"}>{`${headTitle}`}</NoteSansMedium>
            <div style={{marginTop: "0rem",textAlign:"center",marginBottom: "1rem"}}>
                <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize={"1vw"} >{desciption1}</NoteSansMedium>
            </div>
        </CharItem>
    )
}

export const Architecture = () => {
    return (
        <ArchSection>
            <div style={{display:"flex", justifyContent:"center", alignItems: "center", flexDirection: "column"}}>
                <GmarketBold styles={{marginBottom: "1rem"}} fontColor={PRIMARY_COLOR} fontWeight={"bold"} fontSize={"1.8vw"}>LLM Pre-Training & Tuning 기반 기술</GmarketBold>
                <CharItemsContainer> 
                    {items.map((item,index) => { 
                        const { image, headTitle, subTitle, desciption1, desciption2, desciption3 } = item;
                        return <Item 
                                    key={index}
                                    image={image}
                                    headTitle={headTitle} 
                                    subTitle={subTitle} 
                                    desciption1={desciption1} 
                                    desciption2={desciption2} 
                                    desciption3={desciption3}
                                />
                    })}
                </CharItemsContainer>
            </div>
            <img style={{width:"50vw"}} src="https://i.imgur.com/IPHMF6A.png" alt="이미지"/>
        </ArchSection>
    )
}
