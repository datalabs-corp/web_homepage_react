import React from "react";
import { Carousel } from "react-responsive-carousel";

const ImageData = [
    {
        image: "/images/slide_background_1.png"
    },
    {
        image: "/images/slide_background_2.png"
    },
    {
        image: "/images/slide_background_3.png"
    }
]

const arrowStyles = {
    position: "absolute",
    top: 'calc(50%)',
    zIndex: 2,
}

export const MyInfoMarketSlideBanner = () => {
    return (
        <>
            <Carousel 
                renderArrowPrev={(onClickHandler, hasPrev, label) => {
                    return (<div
                        onClick={onClickHandler}
                        style={{
                            ...arrowStyles,
                            left: "11rem",
                        }} ><img src="/images/left_arrow.png"></img></div>)
                }}
                renderArrowNext={(onClickHandler, hasPrev, label) => {
                    return (<div 
                        type="button" 
                        onClick={onClickHandler}
                        style={{
                            ...arrowStyles,
                            right: "11rem",
                        }} ><img src="/images/right_arrow.png"></img></div>)
                    }}
                    showThumbs={false}
                    renderIndicator={false}
                    infiniteLoop={true}
                >
                <div>
                    <img src="/images/slide_background_1.png"></img>
                </div>
                <div>
                    <img src="/images/slide_background_2.png"></img>
                </div>
                <div>
                    <img src="/images/slide_background_3.png"></img>
                </div>
            </Carousel>
        </>
    )
}