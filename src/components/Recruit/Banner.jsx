import React from "react";
import styled from "styled-components";
import { GmarketBold, NoteSansLight } from "../../common/Text/Text";
import { WHITE_FONT_COLOR } from "../../common/color/color";

const BannerContainer = styled.div`
    display: flex;
    background-image: linear-gradient(rgba(4, 18, 55, 0.5), rgba(4, 18, 55, 0.5)), url("/images/recruit_banner.png");
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
                <GmarketBold fontColor={WHITE_FONT_COLOR} fontWeight={"bold"} fontSize={"2.8rem"}>Recruit</GmarketBold>
                <NoteSansLight fontColor={WHITE_FONT_COLOR} fontSize={"1.2rem"}>데이터랩스와 함께 성장할 분을 찾습니다.</NoteSansLight>
            </div>
        </BannerContainer>
    )
}
