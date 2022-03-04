import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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