import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MyInfoMarketSlideBanner } from "./MyInfoMarketSlideBanner";
import { MyInfoMarketDescription } from "./MyInfoMarketDescription";
import { MyInfoMarketVideo } from "./MyInfoMarketVideo";
import { MyInfoMarketCharacteristics } from "./MyInfoMarketCharacteristics";
import {MyInfoMarketBlog} from "./MyInfoMarketBlog";


const MyInfoMarket = () => {

    window.scrollTo(0,0);

    return (
        <>
            <MyInfoMarketSlideBanner />
            {/* <MyInfoMarketBlog /> */}
            <MyInfoMarketVideo />
            <MyInfoMarketDescription />
            <MyInfoMarketCharacteristics />
        </>
    )
}

export default MyInfoMarket;