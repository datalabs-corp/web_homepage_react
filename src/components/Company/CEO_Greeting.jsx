import React from "react";
import styled from "styled-components";
import { MyInfoText } from "../../common/Text/Text";
import { PRIMARY_COLOR, GREY_FONT_COLOR, WHITE_FONT_COLOR} from "../../common/color/color";

const GreetingSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: 10rem;
`

const GreetingDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;

`

export const CEOGreeting = () => {
    return (
        <GreetingSection>
            <MyInfoText fontColor={PRIMARY_COLOR} fontSize={"3rem"} fontWeight={"bold"}>CEO 인사말</MyInfoText>
            <GreetingDescription>
                <div>
                    <img src="/images/ceo_profile.png" alt="프사"/>
                    <div style={{display: "flex"}}>
                        <MyInfoText fontColor={PRIMARY_COLOR} fontSize={"1.5rem"}>블록체인이 세상을 바꾼다</MyInfoText>
                        <MyInfoText fontColor={GREY_FONT_COLOR} fontSize={"1rem"}>저자</MyInfoText>
                        <MyInfoText fontColor={PRIMARY_COLOR} fontSize={"1.5rem"} fontWeight={"bold"}>김종현</MyInfoText>
                    </div>
                </div>
                <div style={{width:"30%"}}>
                    <MyInfoText fontColor={GREY_FONT_COLOR} fontSize={"2.3rem"}>"인터넷이 온라인 세상에서 우리를 연결해주었다면,</MyInfoText>
                    <MyInfoText fontColor={GREY_FONT_COLOR} fontSize={"2.3rem"}>블록체인은 중간 매개자 없이 개인간 직접 거래가 가능하도록 신뢰를 제공하며 세상을 바꿔주고 있다.</MyInfoText>
                    <MyInfoText fontColor={GREY_FONT_COLOR} fontSize={"1rem"}>
                        과거에는 페이스북 또는 구글과 같은 IT 공룡과 금융, 통신기업이
                        데이터 기득권을 가지고, 데이터 판매 수익을 독점하였습니다.
                        마이데이터는 개인정보 주권을 기업에서 개인으로 회복시켜주는 새로운 패러다임 입니다.
                        하지만 진정한 마이데이터는 데이터에 대한 전송요구 뿐만
                        아니라 개인이 직접 정보를 보낼 수 있어야 합니다.
                        블록체인은 정보 중개자 없는 데이터 거래를 통해 데이터 직거래를
                        구현하고 개인의 정보 주권을 회복시켜줍니다.
                        데이터랩스는 정보주체의 데이터 주권을 보장하는 블록체인을
                        활용한 플랫폼을 통해 데이터 거래 마켓을 확산하고자 합니다.
                    </MyInfoText>
                </div>
            </GreetingDescription>
        </GreetingSection>
    )
}

export default CEOGreeting;