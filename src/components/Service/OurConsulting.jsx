import React from "react";
import styled from "styled-components";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";
import {
  GmarketBold,
  GmarketMedium,
  NoteSansLight,
  NoteSansMedium,
} from "../../common/Text/Text";

const ConsultingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10vw;
`;

const TitleContainer = styled.div`
  /* display: flex;
    justify-content: center;
    align-items: center; */
`;

const DescriptionContainer = styled.div`
  margin-top: 1vw;
  margin-bottom: 3vw;
`;

const TableContainer = styled.div`
  display: flex;
  flex: 1;
  width: 75vw;
`;

const ServiceTypeColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5.3;
  height: 60vh;
`;

const HeadRow = styled.div`
  flex: 1;
  background: #f0f0f0;
  border-radius: 20px 20px 0px 0px;
  border-bottom: solid 0.5vh #0d00aa;
  margin-bottom: 0.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BodyRows = styled.div`
  flex: 8.4;
  display: flex;
  flex-direction: column;
`;

const DevelopmentRows = styled.div`
  flex: 1;
  display: flex;
`;

const TitleColumn = styled.div`
  flex: 1;
  background-color: #969abd;
  margin: 0 0.5vw 0.5vw 0;
  border-radius: 0.7vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryColumn = styled.div`
  flex: 2.2;
  background: #f0f2ff;
  display: flex;
  flex-direction: column;
  border-radius: 0.7vw;
  margin: 0 0 0.5vw 0.3vw;
`;

const Category = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.1vh #969abd solid;
`;

const IntroductionRows = styled.div`
  flex: 1.2;
  display: flex;
`;

const DetailColumn = styled.div`
  flex: 7.6;
  margin-left: 0.5vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
`;

const CategoryDescription = styled.div`
  flex: 1;
  display: flex;
  padding-left: 1vw;
  align-items: center;
  border-bottom: 0.1vh #969abd solid;
`;

const GmarketMediumForHeadRow = ({ children }) => {
  return (
    <HeadRow>
      <GmarketMedium children={children} fontSize="1.6vw" />
    </HeadRow>
  );
};

const GmarketBoldForTitleColumn = ({ children }) => {
  return (
    <GmarketBold
      fontColor="white"
      fontSize="1.4vw"
      styles={{
        textAlign: "center",
      }}
      children={children}
    />
  );
};

const NoteSansMediumForCategoryTitles = ({ children }) => {
  return (
    <NoteSansMedium
      children={children}
      fontColor="#0D00AA"
      fontSize={"1.2vw"}
      styles={{
        textAlign: "center",
      }}
    />
  );
};

const NoteSansLightForCategoryDescriptions = ({ children }) => {
  return (
    <NoteSansLight children={children} fontSize={"1vw"} fontColor="#666" />
  );
};

export const OurConsulting = () => {
  return (
    <ConsultingSection>
      <TitleContainer>
        <GmarketBold fontColor={PRIMARY_COLOR} fontSize={"3vw"}>
          Our Consulting
        </GmarketBold>
      </TitleContainer>
      <DescriptionContainer>
        <NoteSansLight
          children={"블록체인 기반 시스템 구축 및 컨설팅 서비스"}
          fontSize="1.4vw"
        />
      </DescriptionContainer>

      <TableContainer>
        <ServiceTypeColumn>
          <GmarketMediumForHeadRow children={"서비스 유형"} />
          <BodyRows>
            <DevelopmentRows>
              <TitleColumn>
                <GmarketBoldForTitleColumn
                  children={`블록체인
                            서비스 개발`}
                />
              </TitleColumn>
              <CategoryColumn>
                <Category>
                  <NoteSansMediumForCategoryTitles
                    children={"서비스 모델 수립 컨설팅"}
                  />
                </Category>
                <Category>
                  <NoteSansMediumForCategoryTitles
                    children={`블록체인 백서 · 사업계획서 
                    · IR 자료 작성`}
                  />
                </Category>
                <Category style={{ border: "none" }}>
                  <NoteSansMediumForCategoryTitles
                    children={"블록체인 기반 서비스 개발"}
                  />
                </Category>
              </CategoryColumn>
            </DevelopmentRows>
            <IntroductionRows>
              <TitleColumn>
                <GmarketBoldForTitleColumn
                  children={`블록체인
                            기술 도입`}
                />
              </TitleColumn>
              <CategoryColumn>
                <Category>
                  <NoteSansMediumForCategoryTitles
                    children={"블록체인 플랫폼 도입"}
                  />
                </Category>
                <Category>
                  <NoteSansMediumForCategoryTitles
                    children={`블록체인 기반
                    보상 방안 설계`}
                  />
                </Category>
                <Category>
                  <NoteSansMediumForCategoryTitles children={"NFT 개발"} />
                </Category>
                <Category style={{ border: "none" }}>
                  <NoteSansMediumForCategoryTitles
                    children={`블록체인 활용
                    시스템 개발`}
                  />
                </Category>
              </CategoryColumn>
            </IntroductionRows>
          </BodyRows>
        </ServiceTypeColumn>
        <DetailColumn>
          <GmarketMediumForHeadRow
            children={"구축 및 컨설팅 서비스 세부 내용"}
          />
          <BodyRows>
            <DevelopmentRows>
              <CategoryColumn style={{ background: "#fcfcfc", marginLeft: 0 }}>
                <CategoryDescription>
                  <NoteSansLightForCategoryDescriptions
                    children={`안정적이고, 지속 가능한 블록체인 기반 서비스 모델 설계와
                그에 맞는 수익 모델 (리워드 모델, 구독 모델, 수수료 모델, 회원 모델) 수립 또는 구축`}
                  />
                </CategoryDescription>
                <CategoryDescription>
                  <NoteSansLightForCategoryDescriptions
                    children={`블록체인 기반 서비스 사업계획서 또는 IR 자료 작성 지원 서비스 모델에 도입된
                    블록체인 적용과 현행법 (개인정보보호법) 이슈에 대한 검토`}
                  />
                </CategoryDescription>
                <CategoryDescription style={{ borderBottom: "none" }}>
                  <NoteSansLightForCategoryDescriptions
                    children={`블록체인 기반 서비스 UI/UX 설계 및 개발`}
                  />
                </CategoryDescription>
              </CategoryColumn>
            </DevelopmentRows>
            <IntroductionRows>
              <CategoryColumn style={{ background: "#fcfcfc", marginLeft: 0 }}>
                <CategoryDescription>
                  <NoteSansLightForCategoryDescriptions
                    children={`비즈니스 설계자를 위한 블록체인 플랫폼 (프라이빗, 퍼블릭, 컨소시엄) 선정과 도입 컨설팅`}
                  />
                </CategoryDescription>
                <CategoryDescription>
                  <NoteSansLightForCategoryDescriptions
                    children={`다양한 서비스 보상방안 (마일리지 포인트 또는 유틸리티 코인 활용)에 대한 자문`}
                  />
                </CategoryDescription>
                <CategoryDescription>
                  <NoteSansLightForCategoryDescriptions
                    children={`디지털 컨텐츠의 NFT 도입 솔루션 구축`}
                  />
                </CategoryDescription>
                <CategoryDescription style={{ borderBottom: "none" }}>
                  <NoteSansLightForCategoryDescriptions
                    children={`기존 시스템과 API 연계를 통한 블록체인 솔루션 구축`}
                  />
                </CategoryDescription>
              </CategoryColumn>
            </IntroductionRows>
          </BodyRows>
        </DetailColumn>
      </TableContainer>
    </ConsultingSection>
  );
};
