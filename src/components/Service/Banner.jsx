import React from "react";
import styled from "styled-components";
import { WHITE_FONT_COLOR } from "../../common/color/color";
import { MyInfoText } from "../../common/Text/Text";

const BannerContainer = styled.div`
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/service_banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  height:30rem;
  padding: 20vw;
  align-items: center;
`

export const Banner = () => {
  return (
    <BannerContainer>
      <div>
        <MyInfoText fontColor={WHITE_FONT_COLOR} fontWeight={"bold"} fontSize={"2.8rem"}>Service</MyInfoText>
        <MyInfoText fontColor={WHITE_FONT_COLOR} fontSize={"1.2rem"}>데이터랩스는 블록체인 기반 서비스를 쉽고 빠르게 만들수 있는 환경을 제공합니다.</MyInfoText>
      </div>
    </BannerContainer>
  )
}