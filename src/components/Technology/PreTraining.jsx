import React from "react";
import styled from "styled-components";
import { GmarketBold, GmarketLight, NoteSansLight, NoteSansMedium } from "../../common/Text/Text";
import { DEEP_BLUE_COLOR, PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";

const items = [
  {
    headTitle: "마스크 언어 모델링 (Masked Language Mdoeling, MLM)",
    desciption1: "입력 문장에서 일부 토큰을 무작위로 마스킹(가리기)하고 모델이 예측하도록 학습",
    desciption2: `1. 데이터 수집 및 전처리\n
2. 토큰화(Tokenization)\n
3. 임베딩(Embedding) 초기화\n
4. 사전학습 태스크 정의\n
5. 모델 구조 설계`,
  },
  {
    headTitle: `다음 토큰 예측 (Next Token Prediction)\n또는 자기회귀 언어 모델링`,
    desciption1: "주어진 시퀀스의 다음에 올 토큰을 예측하도록 학습하며 GPT 계열 모델에서 사용",
    desciption2: `1. 그리디 서치(Greedy search)\n
2. 빔 서치(Beam search)\n
3. 탑-k 샘플링(Top-k sampling)\n
4. 템퍼러처 스케일링(Temperature scaling)\n
5. 탑-p 샘플링(Top-p/Nucleus Sampling)`,
  },
  {
    headTitle: `스팬 예측\n(Span Prediction)`,
    desciption1: "문장의 연속된 여러 토큰을 마스킹하고 이를 한 번에 예측하도록 함",
    desciption2: `1. 스팬(Span)을 마스킹\n
2. 모델이 마스킹된 부분을 한 번에 예측하도록 학습\n
3. 주변 문맥을 활용하여 마스킹된 스팬 전체를 예측\n
4. 단어 수준이 아닌 구(phrase) 또는 절(clause) 수준의 표현을 학습\n`,
  },
  {
    headTitle: "노이즈 제거 자기인코더 (Denoising Autoencoder)",
    desciption1:
      "입력 문장에 노이즈(마스킹, 삭제, 순서 변경 등)를 추가하고, 원본을 복원하도록 학습",
    desciption2: `1. 입력 문장에 마스킹, 단어 삭제, 순서 변경 등의 노이즈를 추가\n
    2. 원본 문장을 복원하도록 학습`,
  },
  {
    headTitle: "대조 학습 (Contrastive Learning)",
    desciption1: "같은 문장의 다른 버전이나 유사한 문장은 가깝게, 다른 문장은 멀게 표현하도록 학습",
    desciption2: `1. 데이터 샘플 간의 유사성과 차이점을 학습\n
2. 동일한 문장의 다른 버전이나 유사한 문장(포지티브 쌍)을 생성\n
3. 원본 문장과 무관한 다른 문장을 네거티브 샘플로 사용\n
4. 포지티브 쌍의 임베딩 거리를 최소화하고, 네거티브 샘플과의 거리를 최대화\n
5. 레이블이 없는 대량의 데이터로도 의미 있는 임베딩을 학습`,
  },
];

const PreTrainingContainer = styled.div`
  display: flex;
  width: 100%;
  font-size: 16px;
  @media (max-width: 720px) {
    font-size: 10px;
  }
`;

const PreTrainingDescription = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em;
  text-align: center;
`;

const CharItemsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  @media (max-width: 720px) {
  }
`;

const CharItemSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  @media (max-width: 720px) {
    font-size: 16px;
  }
`;
const CharItemLeftArea = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;
const CharItemRightArea = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 0.8;
`;

const CharItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 1rem;
  min-width: 240px;
  min-height: 240px;
  width: 30vw;
  height: 16vw;
  align-items: center;
  justify-content: center;
  border: 2px solid #ddd;
  border-radius: 15px;
  padding: 0px 10px;
`;

const ItemDescription = styled.p`
  display: flex;
  width: 100%;
  flex: 1;
  font-size: 1.2vw;
  font-weight: 400;
  color: #000;
  margin: 1rem;
  text-align: left;
`;

const Item = ({ headTitle, desciption1 }) => {
  return (
    <CharItem>
      <NoteSansMedium
        fontColor={PRIMARY_COLOR}
        fontSize={"1.4vw"}
        fontWeight={"bold"}
      >{`${headTitle}`}</NoteSansMedium>
      <div style={{ marginTop: "0rem", textAlign: "center", marginBottom: "1rem" }}>
        <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize={"1.2vw"}>
          {desciption1}
        </NoteSansMedium>
      </div>
    </CharItem>
  );
};

export const PreTraining = () => {
  return (
    <PreTrainingContainer>
      <PreTrainingDescription>
        <div>
          <GmarketBold
            styles={{ marginBottom: "1rem" }}
            fontColor={PRIMARY_COLOR}
            fontWeight={"bold"}
            fontSize={"2.2vw"}
          >
            LLM 사전 학습 (Pre-Training) 방법론
          </GmarketBold>
          <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize={"1vw"}>
            {`LLM(대규모 언어 모델) 개발 과정 중 방대한 양의 텍스트 데이터를 통해 학습
                        자기지도 학습(Self-supervised learning)`}
          </NoteSansLight>
        </div>

        <CharItemsContainer>
          {items.map((item, index) => {
            const { image, headTitle, subTitle, desciption1, desciption2, desciption3 } = item;
            return (
              <CharItemSection>
                <CharItemLeftArea>
                  <Item
                    key={index}
                    image={image}
                    headTitle={headTitle}
                    subTitle={subTitle}
                    desciption1={desciption1}
                    desciption2={desciption2}
                    desciption3={desciption3}
                  />
                </CharItemLeftArea>
                <CharItemRightArea>
                  <ItemDescription>{desciption2}</ItemDescription>
                </CharItemRightArea>
              </CharItemSection>
            );
          })}
        </CharItemsContainer>
      </PreTrainingDescription>
    </PreTrainingContainer>
  );
};
