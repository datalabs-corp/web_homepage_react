import React from "react";
import styled from "styled-components";
import { NoteSansMedium, GmarketBold, NoteSansLight } from "../../common/Text/Text";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";
// 테스트를 위한 주석입니다
// 삭제해도 무방합니다
const LLMContainer = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
    /* justify-content: center; */
    align-items: center; 
    padding: 2rem 0rem;
`
const LLMSection = styled.section`
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    @media (max-width: 720px) {
        flex-direction: column;
        padding: 30%;
    }
`

const LLMDescription = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const ServiceLLM = () => {
  return (
      <LLMContainer>
          <LLMSection>
            <LLMDescription>
              <div style={{
                justifySelf: 'center',
                alignSelf: 'center'
              }}>
                <GmarketBold fontColor={PRIMARY_COLOR} fontSize={"2.5vw"} fontWeight={"bold"}>LLM pre-Training & Tuning</GmarketBold>
                <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize={"1.1vw"}>
                  {`
                    데이터랩스만의 독자적인 데이터 처리 기술력이 적용된 AI 기반
                    LLM 모델 사전 학습 (Pre-Training)과 미세조정 (Fine-Tuning) 기술이
                    새로운 차원의 사용자 경험을 제공합니다.
                  `}
                </NoteSansMedium>
              </div>
              <img style={{width:"50vw"}} src="https://i.imgur.com/rQNOrOZ.png" alt="이미지"/>
            </LLMDescription>
          </LLMSection>
      </LLMContainer>
  )
}

