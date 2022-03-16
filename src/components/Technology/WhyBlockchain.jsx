import React, { useState } from "react";
import styled from "styled-components";
import { GmarketBold, GmarketMedium, GmarketLight, NoteSansMedium, NoteSansLight } from "../../common/Text/Text";
import { DEEP_BLUE_COLOR, GREY_FONT_COLOR, PRIMARY_COLOR, WHITE_FONT_COLOR } from "../../common/color/color";
import { Carousel } from "react-responsive-carousel";

const items = [
    {   
        id: 1,
        title: "개인 데이터 주권",
        image: "/images/why_item1.png",
        text: `기존 마이데이터는 유저의 정보를 데이터 보유사의
        중앙 DB에 저장하여 기업의 필요에 따라 관리해왔습니다.

        반면 데이터랩스는 중앙 DB가 아닌 개인 기기에 
        마이인포를 저장하여 유저의 필요에 따라
        마이데이터 관리 및 보상받을 수 있도록
        마켓플랫폼을 제공합니다.
        `,
    },
    {   
        id: 2,
        title: "개인 정보데이터의 탈중앙화",
        image: "/images/why_item2.png",
        text: `개인 정보를 개개인의 기기에 저장함으로써
        중앙 서버에서 DB를 가져오는 기존 방식과는 다르게
        데이터의 탈중앙화 관리가 가능해집니다.

        개인이 주권을 가지고 있는 상태에서
        개인이 직접 기업에 마이데이터 제공 및 보상을 받을 수 있습니다.
        `,
    },
    {
        id: 3,
        title: "투명한 원장",
        image: "/images/why_item3.png",
        text: `마이데이터 거래 내역은 블록체인 원장에 기록되어
        이것은 나의 데이터가 어떻게 이동했는지
        투명하게 확인할 수 있습니다.
        
        블록체인에 저장된 이동건은
        거래내역 조작이 불가능하기 때문에
        마이데이터의 신뢰성이 보장됩니다.
        `,
    }
]

const WhyContainer = styled.section`
    position: relative;
    margin-top: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .carousel {
        position: static;
    }
`

const SlideImageContainer = styled.section`
    width: 100%;
    background-color: #F1F1F1;
`

const arrowStyles = {
    position: "absolute",
    top: 'calc(80%)',
    zIndex: 2,

}

const WhyItemContainer = styled.img`
    position:absolute;
    width:40%;
    top:-4vw;
    left:15vw;
`

const WhyItem = ({ item }) => {
    return (
        <div style={{position:"relative", padding: "10rem", height:'25vw', width:"100%", display:"flex", justifyItems:"center", alignItems:"center"}}>
            <WhyItemContainer src={items[item].image} alt="아이템 사진" />
                <div style={{display:"flex", flex: 1.7}}>
                </div>
                <div style={{display:"flex", flex: 1}}>
                    <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize={"1vw"} >{items[item].text}</NoteSansLight>
                </div>
        </div>
    )
}



export const WhyBlockchain = () => {
    const [item, setItem] = useState(2);

    return (
        <WhyContainer>
            <div style={{textAlign:"center", margin: "2vw"}}>
                <GmarketBold fontColor={PRIMARY_COLOR} fontWeight={"bold"} fontSize={"3vw"} >Why</GmarketBold>
                <GmarketBold fontColor={PRIMARY_COLOR} fontWeight={"bold"} fontSize={"3vw"} >Block chain</GmarketBold>
                <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize={"1vw"} >데이터랩스가 블록체인을 지향하는 이유</NoteSansMedium>
            </div>
            <SlideImageContainer>
                <div style={{display: "flex"}}>
                    <div style={{display: "flex", justifyContent:"center", alignItems:"center", flex: 1, backgroundColor:DEEP_BLUE_COLOR} }>
                        <div>
                            <GmarketLight styles={{opacity: 0.5}} fontColor={WHITE_FONT_COLOR} fontSize={"6vw"}>{`0${items[item].id}`}</GmarketLight>
                            <GmarketMedium fontColor={WHITE_FONT_COLOR} fontSize={"2.5vw"} >{items[item].title}</GmarketMedium>
                        </div>
                    </div>
                    <div style={{flex: 1, height: "100%"}}>
                        <Carousel
                            renderItem={(item) => {
                                const { src } = item.props.children.props;
                                return (
                                    <div style={{height: "100%"}}>
                                        <img src={src} alt="이미지"/>
                                    </div>
                                )
                            }}
                            
                            renderArrowPrev={(onClickHandler, hasPrev, label) => {
                                return (<div
                                    onClick={onClickHandler}
                                    style={{
                                        ...arrowStyles,
                                        left: "8rem",
                                        width: "1vw",
                                    }} ><img src="/images/blue_left_arrow.png" alt="왼쪽 화살표"/></div>)
                            }}
                            renderArrowNext={(onClickHandler, hasNext, label) => {
                                return (<div 
                                    type="button" 
                                    onClick={onClickHandler}
                                    style={{
                                        ...arrowStyles,
                                        right: "8rem",
                                        width: "1vw",
                                    }} ><img src="/images/blue_right_arrow.png" alt="오른쪽 화살표"/></div>)
                                }}
                                onChange={(index)=>{ setItem(index)}}
                                showThumbs={false}
                                renderIndicator={false}
                                infiniteLoop={true}
                            >
                            <div>
                                <img src="/images/why_slide1.png" alt="백그라운드 이미지" ></img>
                            </div>
                            <div>
                                <img src="/images/why_slide2.png" alt="백그라운드 이미지" ></img>
                            </div>
                            <div>
                                <img src="/images/why_slide3.png" alt="백그라운드 이미지" ></img>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <WhyItem item={item}></WhyItem>
            </SlideImageContainer>
        </WhyContainer>
    )
}
