import React from "react";
import styled from "styled-components";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color"
import { NoteSansMedium, GmarketBold } from "../../common/Text/Text";
import ReactPlayer from "react-player/youtube";


const VideoSection = styled.section`
    padding:6rem;
    background-color: #F5F9FF;
`

const VideoContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MyInfoMarketVideo = () => {
    return (
        <VideoSection>
            <VideoContainer>
                <div style={{textAlign:"center", marginBottom:40}}>
                    <GmarketBold fontColor={PRIMARY_COLOR} fontWeight="bold" fontSize="2.5rem">마이인포 마켓을</GmarketBold>
                    <GmarketBold fontColor={PRIMARY_COLOR} fontWeight="bold" fontSize="2.5rem">영상으로 만나보세요</GmarketBold>
                    <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize="1.4rem">영상 소개</NoteSansMedium>
                </div>
                <ReactPlayer 
                    url="https://youtu.be/WxDCunYnkrU&origin=http://localhost:3000"
                    controls={true}
                    width={858}
                    height={482}
                />
            </VideoContainer>
        </VideoSection>
    )
}