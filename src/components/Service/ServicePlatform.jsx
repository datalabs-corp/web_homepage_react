import React from "react";
import styled from "styled-components";
import { NoteSansMedium, GmarketBold, NoteSansLight } from "../../common/Text/Text";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";
// 테스트를 위한 주석입니다
// 삭제해도 무방합니다
const PlatformContainer = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
    /* justify-content: center; */
    align-items: center; 
`
const PlatformSection = styled.section`
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

const PlatformDescription = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const ServicePlatform = () => {
  return (
      <>
        <PlatformContainer>
              <PlatformSection>
                <PlatformDescription>
                  <div style={{
                    justifySelf: 'center',
                    alignSelf: 'center',
                    textAlign: 'end'
                  }}>
                    <GmarketBold fontColor={PRIMARY_COLOR} fontSize={"2.2vw"} fontWeight={"bold"}>{`블록체인 서비스를 보다 쉽게,\nBaaS`}</GmarketBold>
                    <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize={"1.0vw"}>
                      {`데이터랩스는 블록체인 서비스를 쉽게 구현할 수 있도록
                        BaaS(Blockchain as a Service)를 제공합니다.
                        \nBaaS는 클라우드 기반 솔루션으로
                        블록체인 서비스 운영에 필요한 대역폭 관리
                        적당한 리소스 할당, 호스팅, 보안 기능을 제공하여
                        블록체인을 쉽게 개발할 수 있는 툴입니다.`}
                    </NoteSansMedium>
                  </div>
                  <img style={{width:"50vw"}} src="https://i.imgur.com/i8GPGhN.png" alt="이미지"/>
                </PlatformDescription>
              </PlatformSection>
          </PlatformContainer>

          <PlatformContainer>
                <PlatformSection>
                  <PlatformDescription>
                    <img style={{width:"50vw"}} src="https://i.imgur.com/E6IfCqr.png" alt="이미지"/>
                    <div style={{
                      justifySelf: 'center',
                      alignSelf: 'center',
                      textAlign: 'start'
                    }}>
                      <GmarketBold fontColor={PRIMARY_COLOR} fontSize={"2.2vw"} fontWeight={"bold"}>{`개발자를 위한 API 서비스`}</GmarketBold>
                      <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize={"1.0vw"}>
                        {`데이터체인 블록체인을 이용해 자신만의 서비스를 만들려면
                        네트워크 노드를 운영해야 합니다.
                        \n블록체인 서비스는 블록체인 네트워크의 데이터를
                        실시간으로 동기화 해야 하기에 고성능의 하드웨어가 필요합니다.
                        \n데이터랩스는 블록체인 서비스에 필요한 개발 시간과 인력,
                        비용 절감을 API 서비스를 통해 해결하였습니다.
                        \n노드 구축, 기능을 직접 구현할 필요가 없이
                        보다 나은 블록체인 서비스에 집중할 수 있도록 하고,
                        계정 키를 관리할 필요가 없어 보안 이슈로부터
                        자유로운 개발을 할 수 있는 환경을 제공해 드립니다.`}
                      </NoteSansMedium>
                    </div>
                  </PlatformDescription>
                </PlatformSection>
            </PlatformContainer>
      </>
  )
}

