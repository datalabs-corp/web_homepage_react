import React from "react";
import styled from "styled-components";
import { GmarketBold, NoteSansLight } from "../../common/Text/Text";
import { WHITE_FONT_COLOR } from "../../common/color/color";

const BannerContainer = styled.div`
    display: flex;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(17, 39, 97, 0.3)), url("https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086088/images/company_banner_pndtgn.webp");
    background-repeat: no-repeat;
    background-size: cover;
    height:35vw;
    padding-left: 15vw;
    align-items: center;
`

export const Banner = () => {
    return (
        <BannerContainer>
            <div>
                <GmarketBold fontColor={WHITE_FONT_COLOR} fontWeight={"bold"} fontSize={"2.8vw"}>Company</GmarketBold>
                <NoteSansLight fontColor={WHITE_FONT_COLOR} fontSize={"1.2vw"}>블록체인으로 세상을 바꿉니다.</NoteSansLight>
            </div>
            <div style={{position: "absolute", right: "10rem"}}>
                <GmarketBold fontColor={WHITE_FONT_COLOR} fontSize={"15vw"} styles={{opacity: 0.15}}>Data</GmarketBold>
                <GmarketBold fontColor={WHITE_FONT_COLOR} fontSize={"15vw"} styles={{opacity: 0.15}}>Labs</GmarketBold>
            </div>
        </BannerContainer>
    )
}

export default Banner;