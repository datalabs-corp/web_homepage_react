import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { PRIMARY_COLOR, WHITE_FONT_COLOR } from "../../common/color/color";
import { GmarketBold, NoteSansMedium,} from "../../common/Text/Text";
import Lottie from "react-lottie-player";


import lottie1 from "./lottie_item1.json";
import lottie3 from "./lottie_item3.json"

const imageData = [
    {
        title: `마이데이터니까 
        내가 직접 관리!`,
        subTitle: `내 정보의 주권은 데이터 보유사가 아닌 나 자신!`,
        image: lottie1,
    },
    {   
        title: `마이 인포는 
        내 기기에 저장!`,
        subTitle: `중앙서버 DB가 아닌 내 휴대폰에
        마이 인포를 저장하여 보다 더 안전하게 `,
        image: lottie1,
    },
    {
        title: `블록체인 기술로 
        더욱 믿을 수 있는 정보!`,
        subTitle: `블록체인을 활용하여 더욱 투명한 마이데이터 관리`,
        image: lottie3,
    }
]





const SlideBannerSection = styled.section`
    & .carousel .slide{
        text-align: start;
        /* @media (min-width: 856px) {
                display: flex;
                .SlideBackground {
                    width : 100%;
                    height : 100%;
                }
            } */
        }`
//x
const arrowStyles = {
    position: "absolute",
    top: 'calc(50%)',
    zIndex: 2,
}
//x
const SlideBackground = styled.div`
    display: flex;
    height: 35vw;
    justify-content: space-between;
    align-items: center;
    padding: 10vw 15vw 10vw 15vw;
    background-image: url(${(props) => props.src});`
//x
const KeywordStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${props => props.color};
    border-radius: 10px;
    width: 10rem;
    margin: 10px;
`
//x
const Keyword = ({ color }) => {
    return (
        <KeywordStyle color={color}>
            <NoteSansMedium fontColor={color} fontSize={"1rem"}>마이 인포 마켓</NoteSansMedium>
        </KeywordStyle>
    )
}

export const MyInfoMarketSlideBanner = () => {
    return (
        <SlideBannerSection>
            <Carousel 
                renderItem={(item) => {
                    const { src, title, subTitle, image } = item.props.children.props;
                    const flag = typeof image;
                    return (
                        <SlideBackground src={src}>
                            
                            {flag !== "string" ?
                                <>
                                <div style={{width:"35vw"}}>
                                    <Keyword color={WHITE_FONT_COLOR}/>
                                    <GmarketBold fontColor={WHITE_FONT_COLOR} fontSize={"3vw"}>{title}</GmarketBold>
                                    <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontSize={"1vw"}>{subTitle}</NoteSansMedium>
                                </div>
                                <div style={{width:"50%"}}>
                                    <Lottie animationData={image} play loop></Lottie>
                                </div>
                                </>
                                
                            :
                            <>  
                                <div style={{width:"35vw"}}>
                                    <Keyword color={PRIMARY_COLOR}/>
                                    <GmarketBold fontColor={PRIMARY_COLOR} fontSize={"3vw"}>{title}</GmarketBold>
                                    <NoteSansMedium fontColor={PRIMARY_COLOR} fontSize={"1vw"}>{subTitle}</NoteSansMedium>
                                </div>
                                <div style={{width:"50%"}}>
                                    <img style={{width:"100%", height:"100%"}} src={image} alt="두번째 아이템" />
                                </div>
                            </>
                            }
                        </SlideBackground>
                    )
                }}
                renderArrowPrev={(onClickHandler, hasPrev, label) => {
                    return (<div
                        onClick={onClickHandler}
                        style={{
                            ...arrowStyles,
                            left: "10vw",
                            width: "1vw",
                        }} ><img src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086085/images/left_arrow_qu9a0j.png" alt="왼쪽 화살표"/></div>)
                }}
                renderArrowNext={(onClickHandler, hasPrev, label) => {
                    return (<div 
                        type="button" 
                        onClick={onClickHandler}
                        style={{
                            ...arrowStyles,
                            right: "10vw",
                            width: "1vw",
                        }} ><img src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086086/images/right_arrow_zmp3ut.png" alt="오른쪽 화살표"/></div>)
                    }}
                    showThumbs={false}
                    renderIndicator={false}
                    infiniteLoop={true}
                    autoPlay={true}
                >
                    <div>
                        <img 
                            src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086086/images/slide_background_1_f0bivy.png" 
                            title={imageData[0].title} 
                            subTitle={imageData[0].subTitle}
                            image={imageData[0].image}
                            alt="백그라운드 이미지" 
                            style={{width: "100%", height: "auto", margin: "0 auto"}}
                        />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086088/images/slide_background_2_apbdo6.webp" 
                            title={imageData[1].title} 
                            subTitle={imageData[1].subTitle} 
                            image="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648088973/images/slide_item2_phone_pheruj.webp"
                            alt="백그라운드 이미지" 
                            style={{width: "100%", height: "auto", margin: "0 auto"}}
                        />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086086/images/slide_background_3_flqbtm.png"
                            title={imageData[2].title} 
                            subTitle={imageData[2].subTitle} 
                            image={imageData[2].image}
                            alt="백그라운드 이미지" 
                            style={{width: "100%", height: "auto", margin: "0 auto"}}
                        />
                    </div>
            </Carousel>
        </SlideBannerSection>
    )
}