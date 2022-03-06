import React from "react";
import styled from "styled-components";
import { MyInfoText } from "../../common/Text/Text";
import { WHITE_FONT_COLOR } from "../../common/color/color";

const BannerContainer = styled.div`
    display: flex;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/company_banner.png");
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
                <MyInfoText fontColor={WHITE_FONT_COLOR} fontWeight={"bold"} fontSize={"2.8rem"}>Company</MyInfoText>
                <MyInfoText fontColor={WHITE_FONT_COLOR} fontSize={"1.2rem"}>블록체인으로 세상을 바꿉니다.</MyInfoText>
            </div>
            <div style={{position: "absolute", right: "10rem"}}>
                <MyInfoText fontColor={WHITE_FONT_COLOR} fontSize={"17.5rem"} styles={{opacity: 0.15}}>Data</MyInfoText>
                <MyInfoText fontColor={WHITE_FONT_COLOR} fontSize={"17.5rem"} styles={{opacity: 0.15}}>Labs</MyInfoText>
            </div>
        </BannerContainer>
    )
}

export default Banner;