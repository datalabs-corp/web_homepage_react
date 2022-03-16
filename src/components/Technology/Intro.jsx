import React from "react";
import styled from "styled-components";
import { GmarketBold, GmarketLight, NoteSansLight } from "../../common/Text/Text";
import { DEEP_BLUE_COLOR, PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";

const IntroContainer = styled.div`
    display: flex;
    justify-content: right;
    position: absolute;
    background-color: ${DEEP_BLUE_COLOR};
    width: 80vw;
    height: 29vw;
    padding: 6rem;
    left: 10%;
    bottom: -25vw;
`

const IntroDescription = styled.div`
    position: absolute;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4vw;
    left: 7vw;
    top: -5rem;
`

const IntroTitle = styled.div`
    display: flex;
`

export const Intro = () => {
    return (
        <IntroContainer>
            <IntroDescription>
                <div>
                    <GmarketBold styles={{marginBottom: "1rem"}} fontColor={PRIMARY_COLOR} fontWeight={"bold"} fontSize={"2.6vw"}>Block-Chain</GmarketBold>
                    <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize={"1vw"}>
                        {`블록체인은 거래의 기록 및 관리에 대한 권한을
                        중앙기관없이 P2P 네트워크를 통해 분산하여
                        원장(Ledger)을 블록에 기록하고 관리하는 기술입니다.

                        여러 유저들이 P2P 네트워크에 참여하여
                        원장이 담긴 블록을 생성하여, 유효성을 검증함으로써 
                        정보의 위변조를 방지할 수 있습니다.

                        또한 정보 주체가 직접 정보를 관리하여
                        기존의 플랫폼 사업자의 독점을 해결하는
                        솔루션을 제공합니다.`}
                    </NoteSansLight>
                </div>
            </IntroDescription>
            <IntroTitle>
                <div style={{display: "flex", alignItems: "flex-end"}}>
                    <GmarketLight
                        fontColor={"white"}
                        fontSize={"2.2vw"}
                    >
                        {`데이터 랩스는
                        블록체인 기술을 이용하여
                        진정한 마이데이터 
                        어플리케이션을 구현합니다.`}
                    </GmarketLight>
                </div>
            </IntroTitle>
        </IntroContainer>
    )
}
