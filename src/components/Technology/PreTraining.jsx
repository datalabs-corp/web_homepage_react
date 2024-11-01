import React from "react";
import styled from "styled-components";
import { GmarketBold, GmarketLight, NoteSansLight, NoteSansMedium } from "../../common/Text/Text";
import { DEEP_BLUE_COLOR, PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";

const items = [
    {
        headTitle : "마스크 언어 모델링 (Masked Language Mdoeling, MLM)", 
        desciption1 : "입력 문장에서 일부 토큰을 무작위로 마스킹(가리기)하고 모델이 예측하도록 학습", 
    },
    {
        headTitle : `다음 토큰 예측 (Next Token Prediction)\n또는 자기회귀 언어 모델링`, 
        desciption1 : "주어진 시퀀스의 다음에 올 토큰을 예측하도록 학습하며 GPT 계열 모델에서 사용", 
    },
    {
        headTitle : `스팬 예측\n(Span Prediction)`, 
        desciption1 : "문장의 연속된 여러 토큰을 마스킹하고 이를 한 번에 예측하도록 함", 
    },
    {
        headTitle : "노이즈 제거 자기인코더 (Denoising Autoencoder)", 
        desciption1 : "입력 문장에 노이즈(마스킹, 삭제, 순서 변경 등)를 추가하고, 원본을 복원하도록 학습", 
    },
    {
        headTitle : "대조 학습 (Contrastive Learning)", 
        desciption1 : "같은 문장의 다른 버전이나 유사한 문장은 가깝게, 다른 문장은 멀게 표현하도록 학습", 
    },
];

const PreTrainingContainer = styled.div`
    display: flex;
    width: 100%;
    left: 10%;
`

const PreTrainingDescription = styled.div`
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
    height: 12rem;
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

export const PreTraining = () => {
    return (
        <PreTrainingContainer>
            <PreTrainingDescription>
                <div>
                    <GmarketBold styles={{marginBottom: "1rem"}} fontColor={PRIMARY_COLOR} fontWeight={"bold"} fontSize={"2.2vw"}>LLM 사전 학습 (Pre-Training) 방법론</GmarketBold>
                    <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize={"1vw"}>
                        {`LLM(대규모 언어 모델) 개발 과정 중 방대한 양의 텍스트 데이터를 통해 학습
                        자기지도 학습(Self-supervised learning)`}
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
            </PreTrainingDescription>
        </PreTrainingContainer>
    )
}
