import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ServiceSlideBanner } from "./ServiceSlideBanner";
import { ServiceDescription } from "./ServiceDescription";
import { ServiceVideo } from "./ServiceVideo";
import { ServiceCharacteristics } from "./ServiceCharacteristics";
import { ServiceLLM } from "./ServiceLLM";
import { ServicePlatform } from "./ServicePlatform";
import { ServiceProcess } from "./ServiceProcess";


const Service = () => {

    window.scrollTo(0,0);

    return (
        <>
            <ServiceSlideBanner />
            <ServiceLLM />
            <ServiceVideo />
            <ServiceDescription />
            <ServicePlatform />
            <ServiceProcess />
        </>
    )
}

export default Service;