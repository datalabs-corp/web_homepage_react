import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MyInfoMarketSlideBanner } from "./MyInfoMarketSlideBanner";
import { MyInfoMarketDescription } from "./MyInfoMarketDescription";
import { MyInfoMarketVideo } from "./MyInfoMarketVideo";
import { MyInfoMarketCharacteristics } from "./MyInfoMarketCharacteristics";


const MyInfoMarket = () => {

    window.scrollTo(0,0);

    return (
        <>
            <MyInfoMarketSlideBanner />
            <MyInfoMarketVideo />
            <MyInfoMarketDescription />
            <MyInfoMarketCharacteristics />
        </>
    )
}

export default MyInfoMarket;