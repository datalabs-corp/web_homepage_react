import React from "react";
import styled from "styled-components";
import {
  GmarketBold,
  GmarketMedium,
  NoteSansBold,
  NoteSansLight,
} from "../../common/Text/Text";
import { PRIMARY_COLOR } from "../../common/color/color";

const HistorySection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem;
  background-color: #f6f6f9;
`;

const TitleContainer = styled.div`
  width: 27vw;
  height: 5vw;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 7.5vw;
`;

const HistoryContainer = styled.div`
  width: 50vw;
  height: 45vw;
  display: flex;
  flex-direction: row;
`;

const YearColumn = styled.div`
  flex: 2.7;
  display: flex;
  flex-direction: column;
`;

const ScaleColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const DescriptionColumn = styled.div`
  flex: 25;
  display: flex;
  flex-direction: column;
  margin-left: 0.5vw;
`;

const History2021 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const History2022 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const ScaleUnit = styled.div`
  flex: 1;
  border-bottom: #0d00aa 2px solid;
  border-left: #0d00aa 3px solid;
  margin-right: 1vw;
  position: relative;
`;

const BulletinButton = styled.div`
  position: absolute;
  width: 0px;
  left: 0;
  top: 0;
  border: 0.4vw solid #0d00aa;
  border-radius: 0.4vw;
  transform: translateY(-50%) translateX(-65%);
`;

const ArrowHead = styled.div`
  position: absolute;
  width: 2vw;
  left: 0;
  bottom: 0;
  transform-origin: bottom left;
  transform: rotate(-45deg);
  border-bottom: 0.2vw solid #0d00aa;
`;

const LeftBottomAlignCell = ({
  children,
  flexRatio = 1,
  fontSize,
  fontType,
  fontColor = "#737373",
}) => {
  return (
    <div style={{ position: "relative", flex: flexRatio }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          transform: `translateY(50%)`,
        }}
      >
        {fontType === "NoteSansLight" && (
          <NoteSansLight fontSize={fontSize}>{children}</NoteSansLight>
        )}
        {fontType === "GmarketBold" && (
          <GmarketBold fontSize={fontSize} fontColor={fontColor}>
            {children}
          </GmarketBold>
        )}
        {fontType === "GmarketMedium" && (
          <GmarketMedium fontSize={fontSize}>{children}</GmarketMedium>
        )}
      </div>
    </div>
  );
};

const history2021Dates = ["11", "12", ""];
const history2022Dates = ["2", "3", "4", "6", "8", "8","9","10","11",""];

const description2021List = [
  "(주) 데이터랩스 창립",
  "다인리더스와 대학 정보 공유 커리어 마이데이터 서비스 업무 협약 체결",
  "2022",
];
const description2022List = [
  "부산시와 블록체인 국제비지니스센터 투자 업무 협약 체결",
  `"블록체인 기반 마이데이터 "마이 인포 마켓" 안드로이드 버전 오픈)`,
  "부산시 기술창업 인큐베이팅 사업 선정",
  `인천테크노파크 기술개발 실증사업(공유주자 서비스) 선정`,
  "부산대학교 초기창업패키지 선정 ",
  "기술보증기금 벤처캠프 11기 선정",
  `"블록체인 기반의 마이데이터 거래 방법 및 장치" 특허 출원`,
  "서울창조경제센터 공공데이터 활용 디지털뉴딜 창업경진대회 최우수상 선정",
  "한국산업기술진흥협회의 데이터랩스 기업부설연구소 설립 인증",
  "",
];

export const History = () => {
  return (
    <HistorySection>
      <TitleContainer>
        <GmarketBold
          fontColor={PRIMARY_COLOR}
          fontSize={"3vw"}
          fontWeight={"bold"}
        >
          데이터랩스 연혁
        </GmarketBold>
      </TitleContainer>
      <HistoryContainer>
        <YearColumn>
          <History2021>
            {history2021Dates.map((val, idx) => {
              if (idx === 0) {
                return (
                  <LeftBottomAlignCell
                    children={val}
                    fontSize={"1.3vw"}
                    fontColor="#0D00AA"
                    fontType="GmarketBold"
                  />
                );
              }
              if (idx === 2) {
                // 12.9 다음에 조금 떨어트려야 하는 구간
                return (
                  <LeftBottomAlignCell
                    children={val}
                    flexRatio={1.3}
                    fontSize={"1.5vw"}
                  />
                );
              }
              return (
                <LeftBottomAlignCell
                  children={val}
                  fontSize={"1.3vw"}
                  fontType={"GmarketMedium"}
                />
              );
            })}
          </History2021>
          <History2022>
            {history2022Dates.map((val, idx) => {
              return (
                <LeftBottomAlignCell
                  children={val}
                  fontSize={"1.3vw"}
                  fontType={"GmarketMedium"}
                />
              );
            })}
          </History2022>
        </YearColumn>
        <ScaleColumn>
          <History2021>
            <ScaleUnit>
              <BulletinButton />
            </ScaleUnit>
            <ScaleUnit />
            <ScaleUnit style={{ borderBottom: "none", flex: 1.3 }} />
          </History2021>
          <History2022>
            <ScaleUnit>
              <BulletinButton />
            </ScaleUnit>
            <ScaleUnit />
            <ScaleUnit />
            <ScaleUnit />
            <ScaleUnit />
            <ScaleUnit style={{ borderBottom: "none" }}>
              <ArrowHead />
            </ScaleUnit>
          </History2022>
        </ScaleColumn>
        <DescriptionColumn>
          <History2021>
            {description2021List.map((val, idx) => {
              if (idx === 0) {
                //2021 들어갈 곳
                return (
                  <div style={{ position: "relative", flex: 1 }}>
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: `translateY(-50%)`,
                      }}
                    >
                      <GmarketBold fontSize={"2vw"} fontColor="#0D00AA">
                        2021
                      </GmarketBold>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        transform: `translateY(50%)`,
                      }}
                    >
                      <NoteSansBold fontSize={"1.3vw"} fontColor="#0D00AA">
                        {val}
                      </NoteSansBold>
                    </div>
                  </div>
                );
              }
              if (idx === 2)
                // 2022 들어갈 곳
                return (
                  <LeftBottomAlignCell
                    children={val}
                    flexRatio={1.3}
                    fontSize={"2vw"}
                    fontType={"GmarketBold"}
                    fontColor="#0D00AA"
                  />
                );
              return (
                <LeftBottomAlignCell
                  children={val}
                  fontSize={"1.3vw"}
                  fontType={"NoteSansLight"}
                />
              );
            })}
          </History2021>
          <History2022>
            {description2022List.map((val, idx) => {
              return (
                <LeftBottomAlignCell
                  children={val}
                  fontSize={"1.3vw"}
                  fontType={"NoteSansLight"}
                />
              );
            })}
          </History2022>
        </DescriptionColumn>
      </HistoryContainer>
    </HistorySection>
  );
};

export default History;
