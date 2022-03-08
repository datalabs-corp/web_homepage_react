import React from "react";
import styled from "styled-components";
import { MyInfoText } from "../../common/Text/Text";
import { DEEP_BLUE_COLOR, GREY_FONT_COLOR, PRIMARY_COLOR, WHITE_FONT_COLOR } from "../../common/color/color";
import { Carousel } from "react-responsive-carousel";

const WhyContainer = styled.section`
    margin-top: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SlideImageContainer = styled.section`
    width: 100%;
    background-color: pink;
    height: 62rem;
`

const arrowStyles = {
    position: "absolute",
    top: 'calc(50%)',
    zIndex: 2,
}

export const WhyBlockchain = () => {
    return (
        <WhyContainer>
            <div style={{textAlign:"center", margin: "2rem"}}>
                <MyInfoText fontColor={PRIMARY_COLOR} fontWeight={"bold"} fontSize={"3rem"} >Why</MyInfoText>
                <MyInfoText fontColor={PRIMARY_COLOR} fontWeight={"bold"} fontSize={"3rem"} >Block chain</MyInfoText>
                <MyInfoText fontColor={GREY_FONT_COLOR} fontSize={"1rem"} >데이터랩스가 블록체인을 지향하는 이유</MyInfoText>
            </div>
            <SlideImageContainer>
                
            </SlideImageContainer>
        </WhyContainer>
    )
}
