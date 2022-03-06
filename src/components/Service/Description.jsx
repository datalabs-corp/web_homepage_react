import React from "react";
import styled from "styled-components";
import { PRIMARY_COLOR, GREY_FONT_COLOR, WHITE_FONT_COLOR } from "../../common/color/color";
import { MyInfoText } from "../../common/Text/Text";

const DescriptionContainer = styled.div`
    padding-top:10rem;
`

const Description1 = styled.div`
    display: flex;
    margin-left: 10rem;
    height:37rem;
    justify-content: space-between;
    align-items:center;
    margin-bottom:10rem;
`

const Description2 = styled.div`
    display: flex;
    margin-right: 10rem;
    height:37rem;
    justify-content: space-between;
    align-items:center;
    margin-bottom:10rem;
`


export const Description = () => {
    return (
        <DescriptionContainer>
            <Description1>
                <div style={{width:"30rem", textAlign:"right"}}>
                    <MyInfoText fontColor={GREY_FONT_COLOR} fontSize={"2.4rem"} >블록체인 서비스를 보다 쉽게,</MyInfoText>
                    <MyInfoText fontColor={GREY_FONT_COLOR} fontSize={"2.4rem"} >BaaS</MyInfoText>
                    <MyInfoText fontColor={GREY_FONT_COLOR} fontSize={"1.2rem"} >
                        데이터랩스는 블록체인 서비스를 쉽게 구현할 수 있도록
                        BaaS(Blockchain as a Service)를 제공합니다.
                        BaaS는 클라우드 기반 솔루션으로 블록체인 서비스 운영에 필요한 대역폭 관리,
                        적당한 리소스 할당, 호스팅, 보안 기능을 제공하여
                        블록체인은 쉽게 개발할 수 있는 툴입니다.
                    </MyInfoText>
                </div>
                <div style={{position:"relative", width:"70%", height: "100%"}}>
                    <img style={{ width: "100%", height: "100%", objectFit: "cover",float:"right"}}  src="/images/service_description1.png" alt="서비스 설명 1"/>
                    <MyInfoText styles={{position: "absolute", bottom: 0, opacity: 0.1, right:0}} fontColor={WHITE_FONT_COLOR} fontWeight={"bold"} fontSize={"18.75rem"}>BaaS</MyInfoText>
                </div>
            </Description1>
            <Description2>
                <div style={{position:"relative", width:"70%", height: "100%"}}>
                    <img style={{ width: "100%", height: "100%", objectFit: "cover",float:"right"}}  src="/images/service_description2.png" alt="서비스 설명 2"/>
                    <MyInfoText styles={{position: "absolute", top:100, opacity: 0.1, left:100}} fontColor={WHITE_FONT_COLOR} fontWeight={"bold"} fontSize={"18.75rem"}>API</MyInfoText>
                </div>
                <div style={{width:"30rem", textAlign:"left"}}>
                    <MyInfoText fontColor={GREY_FONT_COLOR} fontSize={"2.4rem"} >개발자를 위한 API 서비스</MyInfoText>
                    <MyInfoText fontColor={GREY_FONT_COLOR} fontSize={"1.2rem"} >
                        데이터체인 블록체인을 이용해 자신만의 서비스를 만들려면
                        네트워크 노드를 운영해야 합니다.
                        블록체인 서비스는 블록체인 네트워크의 데이터를
                        실시간으로 동기화 해야 하기에 고성능의 하드웨어가 필요합니다.
                        데이터랩스는 블록체인 서비스에 필요한 개발 시간과 인력,
                        비용 절감을 API 서비스를 통해 해결하였습니다.
                        노드 구축, 기능을 직접 구현할 필요가 없이
                        보다 나은 블록체인 서비스에 집중할 수 있도록 하고,
                        계정 키를 관리할 필요가 없어 보안 이슈로부터
                        자유로운 게발을 할 수 있는 환경을 제공해 드립니다.
                    </MyInfoText>
                </div>
            </Description2>
        </DescriptionContainer>
    )
}