import React from "react";
import styled from "styled-components";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color"
import { MyInfoText } from "../../common/Text/Text";


const VideoSection = styled.section`
    padding:6rem;
    background-color: #F5F9FF;
`

const VideoContainer = styled.div`
    
`

export const MyInfoMarketVideo = () => {
    return (
        <VideoSection>
            <VideoContainer>
                <div style={{textAlign:"center", marginBottom:10}}>
                    <MyInfoText fontColor={PRIMARY_COLOR} fontWeight="bold" fontSize="2.5rem">마이인포 마켓을</MyInfoText>
                    <MyInfoText fontColor={PRIMARY_COLOR} fontWeight="bold" fontSize="2.5rem">영상으로 만나보세요</MyInfoText>
                    <MyInfoText fontColor={GREY_FONT_COLOR} fontSize="1.4rem">영상 소개</MyInfoText>
                </div>
                {/* <video controls
                style={{width:"100%", height:"30rem"}}>
                    <source src="https://youtu.be/JTOEcc3TPyc"/>
                </video> */}
            </VideoContainer>
        </VideoSection>
    )
}