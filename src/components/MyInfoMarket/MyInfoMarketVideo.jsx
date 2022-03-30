import React from "react";
import styled from "styled-components";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color"
import { NoteSansMedium, GmarketBold } from "../../common/Text/Text";
import Youtube from "react-youtube";

const youTubeOptions = {
    width: '858',
    height: '482',
}

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
                    <GmarketBold fontColor={PRIMARY_COLOR} fontWeight="bold" fontSize="2.5vw">마이 인포 마켓을</GmarketBold>
                    <GmarketBold fontColor={PRIMARY_COLOR} fontWeight="bold" fontSize="2.5vw">영상으로 만나보세요</GmarketBold>
                    <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize="1.4vw">영상 소개</NoteSansMedium>
                </div>
                <Youtube
                    videoId="gIkRQJbZf84"
                    opts={youTubeOptions}
                />
            </VideoContainer>
        </VideoSection>
    )
}