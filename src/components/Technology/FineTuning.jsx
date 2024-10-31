import React from "react";
import styled from "styled-components";
import { GmarketBold, GmarketLight, NoteSansLight, NoteSansMedium } from "../../common/Text/Text";
import { DEEP_BLUE_COLOR, PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";

const items = [
    {
        headTitle : "전체 미세조정(Full Fine-tuning)", 
        desciption1 : "모든 매개변수를 대상 작업에 맞게 업데이트", 
    },
    {
        headTitle : "매개변수 효율적 미세조정 (Parameter-Efficient Fine-tuning, PEFT)", 
        desciption1 : "입력 프롬프트에 학습 가능한 소프트 프롬프트 토큰 추가", 
    },
    {
        headTitle : "프롬프트 기반 미세조정", 
        desciption1 : "작업 지시사항을 입력의 일부로 포함시켜 학습", 
    },
    {
        headTitle : "대화식 미세 조정 (Conversation Fine-tuning)", 
        desciption1 : "대화 형식의 데이터로 미세 조정", 
    },
    {
        headTitle : "인간 피드백을 통한 강화학습 (RLHF)", 
        desciption1 : "인간의 선호도 평가를 바탕으로 최적화", 
    },
];

const FineTuningContainer = styled.div`
    display: flex;
    width: 100%;
    left: 10%;
`

const FineTuningDescription = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4vw;
    left: 7vw;
    top: -5rem;
    text-align: center;
`

const CharItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media (max-width: 720px){
        flex-direction: column;
    };
    margin-top: 2rem;
    gap: 0px 2%;
`

const CharItem = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    background-color: white;
    margin: 1rem;
    min-width:13rem;
    min-height: 13rem;
    width: 20vw;
    height: 13rem;
    align-items: center;
    justify-content: center;
    border: 2px solid #ddd;
    border-radius: 15px;
    padding: 0px 10px;
`

const Item = ({headTitle, desciption1}) => { 
    return ( 
        <CharItem>
            <NoteSansMedium fontColor={PRIMARY_COLOR} fontSize={"1.2vw"} fontWeight={"bold"}>{`${headTitle}`}</NoteSansMedium>
            <div style={{marginTop: "0rem",textAlign:"center",marginBottom: "1rem"}}>
                <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize={"1vw"} >{desciption1}</NoteSansMedium>
            </div>
        </CharItem>
    )
}

export const FineTuning = () => {
    return (
        <FineTuningContainer>
            <FineTuningDescription>
                <div>
                    <GmarketBold styles={{marginBottom: "1rem"}} fontColor={PRIMARY_COLOR} fontWeight={"bold"} fontSize={"2.2vw"}>LLM 미세조정 (Fine-Tuning) 방법론</GmarketBold>
                    <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize={"1vw"}>
                        {`사전 학습 후에 특정 작업이나 도메인에 맞게 LLM 모델을 조정하는 작업
                        특정 작업에 대한 성능 향상 똔느 특정 분야에 특화된 지식 습득`}
                    </NoteSansLight>
                </div>

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
            </FineTuningDescription>
        </FineTuningContainer>
    )
}
