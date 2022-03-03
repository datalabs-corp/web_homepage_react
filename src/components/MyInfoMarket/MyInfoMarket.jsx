import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { WHITE_FONT_COLOR, PRIMARY_COLOR } from "../../common/color/color";
import { Carousel } from "react-responsive-carousel";

const ImageData = {
    
}


const MyInfoMarket = () => {
    return (
        <Carousel>
            <div>
                {/* <img src="/images/company__logo.png"></img> */}
                <p className="legend">Legend 1</p>
            </div>
            <div>
                {/* <img src="/images/company__logo.png"></img> */}
                <p className="legend">Legend 2</p>
            </div>
            <div>
                {/* <img src="/images/company__logo.png"></img> */}
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    )
}

export default MyInfoMarket;