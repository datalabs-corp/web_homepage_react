import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { WHITE_FONT_COLOR } from "../../common/color/color";
import { GmarketBold, NoteSansMedium,} from "../../common/Text/Text";
import Lottie from "react-lottie-player";

import lottie1 from "./lottie_item1.json";

const imageData = [
    {
        title: `마이데이터니까 내가 직접 관리!`,
        subTitle: `내 정보의 주권은 데이터 보유사가 아닌 나 자신!`,
        image: lottie1,
    },
    {   
        title: `마이 인포는 내 기기에 저장!`,
        subTitle: `중앙서버 DB가 아닌 내 휴대폰에
        마이 인포를 저장하여 보다 더 안전하게 `,
        image: lottie1,
    },
    {
        title: `블록체인 기술로 더욱 믿을 수 있는 정보!`,
        subTitle: `블록체인을 활용하여 더욱 투명한 마이데이터 관리`,
        image: lottie1,
    }
]

const SlideBannerSection = styled.section`
    & .carousel .slide{
        text-align: start;
    }
`

const arrowStyles = {
    position: "absolute",
    top: 'calc(50%)',
    zIndex: 2,
}

const SlideBackground = styled.div`
    display: flex;
    height: 90vh;
    justify-content: space-between;
    align-items: center;
    padding: 10rem 15rem 10rem 15rem;
    background-image: url(${(props) => props.src});
`

const KeywordStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    border-radius: 10px;
    width: 10rem;
    margin: 10px;
`

const Keyword = () => {
    return (
        <KeywordStyle>
            <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontSize={"1rem"}>마이 인포 마켓</NoteSansMedium>
        </KeywordStyle>
    )
}

export const MyInfoMarketSlideBanner = () => {
    return (
        <SlideBannerSection>
            <Carousel 
                renderItem={(item) => {
                    const { src, title, subTitle, image } = item.props.children.props;
                    return (
                        <SlideBackground src={src}>
                            <div style={{width:"25rem"}}>
                                <Keyword />
                                <GmarketBold fontColor={WHITE_FONT_COLOR} fontSize={"3rem"}>{title}</GmarketBold>
                                <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontSize={"1rem"}>{subTitle}</NoteSansMedium>
                            </div>
                            <div style={{width:"50%"}}>
                                <Lottie animationData={image} play loop></Lottie>
                            </div>
                        </SlideBackground>
                    )
                }}
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
                        <img 
                            src="/images/slide_background_1.png" 
                            title={imageData[0].title} 
                            subTitle={imageData[0].subTitle}
                            image={imageData[0].image}
                            alt="백그라운드 이미지" 
                        />
                    </div>
                    <div>
                        <img 
                            src="/images/slide_background_2.png" 
                            title={imageData[1].title} 
                            subTitle={imageData[1].subTitle} 
                            image={imageData[1].image}
                            alt="백그라운드 이미지" 
                        />
                    </div>
                    <div>
                        <img 
                            src="/images/slide_background_3.png" 
                            title={imageData[2].title} 
                            subTitle={imageData[2].subTitle} 
                            image={imageData[2].image}
                            alt="백그라운드 이미지" 
                        />
                    </div>
            </Carousel>
        </SlideBannerSection>
    )
}