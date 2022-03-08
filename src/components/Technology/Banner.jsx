import React from "react";
import styled from "styled-components";
import { GmarketBold, NoteSansMedium } from "../../common/Text/Text";
import { WHITE_FONT_COLOR } from "../../common/color/color";
import { Intro } from "./Intro";

const BannerContainer = styled.div`
    display: flex;
    position: relative;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(17, 39, 97, 0.3)), url("/images/technology_background.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 30rem;
    padding: 20vw;
    align-items: center;
`

export const Banner = () => {
    return (
        <BannerContainer>
            <div>
                <GmarketBold fontColor={WHITE_FONT_COLOR} fontWeight={"bold"} fontSize={"2.8rem"}>Technology</GmarketBold>
                <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontSize={"1.2rem"}>차별화 된 블록체인 플랫폼, 데이터체인</NoteSansMedium>
            </div>
            <div style={{position: "absolute", right: "10rem"}}>
                <GmarketBold fontColor={WHITE_FONT_COLOR} fontSize={"17.5rem"} styles={{opacity: 0.15}}>Tech</GmarketBold>
                <GmarketBold fontColor={WHITE_FONT_COLOR} fontSize={"17.5rem"} styles={{opacity: 0.15}}>-nology</GmarketBold>
            </div>
            <Intro />
        </BannerContainer>
    )
}
