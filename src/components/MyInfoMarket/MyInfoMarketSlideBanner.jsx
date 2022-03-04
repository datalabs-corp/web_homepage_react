import React from "react";
import { Carousel } from "react-responsive-carousel";

// const ImageData = [
//     {
//         image: "/images/slide_background_1.png"
//     },
//     {
//         image: "/images/slide_background_2.png"
//     },
//     {
//         image: "/images/slide_background_3.png"
//     }
// ]

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
                        }} ><img src="/images/left_arrow.png" alt="왼쪽 화살표"/></div>)
                }}
                renderArrowNext={(onClickHandler, hasPrev, label) => {
                    return (<div 
                        type="button" 
                        onClick={onClickHandler}
                        style={{
                            ...arrowStyles,
                            right: "11rem",
                        }} ><img src="/images/right_arrow.png" alt="오른쪽 화살표"/></div>)
                    }}
                    showThumbs={false}
                    renderIndicator={false}
                    infiniteLoop={true}
                >
                <div>
                    <img src="/images/slide_background_1.png" alt="백그라운드 이미지" ></img>
                </div>
                <div>
                    <img src="/images/slide_background_2.png" alt="백그라운드 이미지" ></img>
                </div>
                <div>
                    <img src="/images/slide_background_3.png" alt="백그라운드 이미지" ></img>
                </div>
            </Carousel>
        </>
    )
}