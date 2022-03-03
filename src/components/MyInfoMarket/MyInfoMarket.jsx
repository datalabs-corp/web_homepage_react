import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { WHITE_FONT_COLOR, PRIMARY_COLOR } from "../../common/color/color";
import { MyInfoMarketSlideBanner } from "./MyInfoMarketSlideBanner";
import { MyInfoMarketDescription } from "./MyInfoMarketDescription";
import { MyInfoMarketVideo } from "./MyInfoMarketVideo";
import { MyInfoMarketCharacteristics } from "./MyInfoMarketCharacteristics";

const MyInfoMarket = () => {
    return (
        <>
            <MyInfoMarketSlideBanner />
            <MyInfoMarketDescription />
            <MyInfoMarketVideo />
            <MyInfoMarketCharacteristics />
        </>
    )
}

export default MyInfoMarket;