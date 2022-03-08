import React from "react";
import styled from "styled-components";
import { GmarketBold, GmarketMedium, NoteSansMedium } from "../../common/Text/Text";
import { WHITE_FONT_COLOR } from "../../common/color/color";

const BannerContainer = styled.div`
    display: flex;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(17, 39, 97, 0.3)), url("/images/company_banner.png");
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
                <GmarketBold fontColor={WHITE_FONT_COLOR} fontWeight={"bold"} fontSize={"2.8rem"}>Company</GmarketBold>
                <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontSize={"1.2rem"}>블록체인으로 세상을 바꿉니다.</NoteSansMedium>
            </div>
            <div style={{position: "absolute", right: "10rem"}}>
                <GmarketBold fontColor={WHITE_FONT_COLOR} fontSize={"17.5rem"} styles={{opacity: 0.15}}>Data</GmarketBold>
                <GmarketBold fontColor={WHITE_FONT_COLOR} fontSize={"17.5rem"} styles={{opacity: 0.15}}>Labs</GmarketBold>
            </div>
        </BannerContainer>
    )
}

export default Banner;