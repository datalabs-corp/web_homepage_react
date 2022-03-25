import React from "react";
import styled from "styled-components";
import { GREY_FONT_COLOR, WHITE_FONT_COLOR } from "../../common/color/color";
import { GmarketMedium,GmarketBold, NoteSansLight } from "../../common/Text/Text";

const DescriptionContainer = styled.div`
    padding-top:10vw;
`

const Description1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom:5vw;
`

const Description2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom:5vw;
`

export const Description = () => {
    return (
        <DescriptionContainer>
            <Description1>
                <div style={{ display: "flex",textAlign:"right", flex: 1, flexDirection:"column",margin: "5vw"}}>
                    <GmarketMedium styles={{marginBottom:"1vw"}} fontColor={GREY_FONT_COLOR} fontSize={"2.4vw"} >{
                        `블록체인 서비스를 보다 쉽게,
                        BaaS`
                    }</GmarketMedium>
                    <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize={"1vw"} >
                        {`데이터랩스는 블록체인 서비스를 쉽게 구현할 수 있도록
                        BaaS(Blockchain as a Service)를 제공합니다.

                        BaaS는 클라우드 기반 솔루션으로 
                        블록체인 서비스 운영에 필요한 대역폭 관리,
                        적당한 리소스 할당, 호스팅, 보안 기능을 제공하여
                        블록체인은 쉽게 개발할 수 있는 툴입니다.`}
                    </NoteSansLight>
                </div>
                <div style={{position:"relative", flex:1.7, display:"flex"}}>
                    <img style={{ width: "100%", height: "100%", objectFit: "cover",float:"right"}}  src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086090/images/service_description1_herb4a.webp" alt="서비스 설명 1"/>
                    <GmarketBold styles={{position: "absolute", bottom: 0, opacity: 0.1, right:0}} fontColor={WHITE_FONT_COLOR} fontWeight={"bold"} fontSize={"18.75vw"}>BaaS</GmarketBold>
                </div>
            </Description1>
            <Description2>
                <div style={{position:"relative", flex:1.7, display:"flex"}}>
                    <img style={{ width: "100%", height: "100%", objectFit: "cover",float:"right"}}  src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086087/images/service_description2_j4rhst.webp" alt="서비스 설명 2"/>
                    <GmarketBold styles={{position: "absolute", top:100, opacity: 0.1, left:100}} fontColor={WHITE_FONT_COLOR} fontWeight={"bold"} fontSize={"18.75vw"}>API</GmarketBold>
                </div>
                <div style={{ display: "flex",textAlign:"left", flex: 1, flexDirection:"column",margin: "5vw"}}>
                    <GmarketMedium styles={{marginBottom:"1vw"}} fontColor={GREY_FONT_COLOR} fontSize={"2.4vw"} >개발자를 위한 API 서비스</GmarketMedium>
                    <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize={"1vw"} >
                        {`데이터체인 블록체인을 이용해 자신만의 서비스를 만들려면
                        네트워크 노드를 운영해야 합니다.

                        블록체인 서비스는 블록체인 네트워크의 데이터를
                        실시간으로 동기화 해야 하기에 고성능의 하드웨어가 필요합니다.

                        데이터랩스는 블록체인 서비스에 필요한 개발 시간과 인력,
                        비용 절감을 API 서비스를 통해 해결하였습니다.

                        노드 구축, 기능을 직접 구현할 필요가 없이
                        보다 나은 블록체인 서비스에 집중할 수 있도록 하고,
                        계정 키를 관리할 필요가 없어 보안 이슈로부터
                        자유로운 게발을 할 수 있는 환경을 제공해 드립니다.`}
                    </NoteSansLight>
                </div>
            </Description2>
        </DescriptionContainer>
    )
}