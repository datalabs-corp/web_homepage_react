import React from "react";
import styled from "styled-components";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";
import { GmarketBold, NoteSansMedium, NoteSansLight } from "../../common/Text/Text";
const VideoSection = styled.section`
    padding:1rem;
    /* background-color: #F5F9FF; */
`

const VideoContainer = styled.div`
    /* display:flex; */
    width: 100%;
    height: 100%;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center;  */
`
const DesciptionSection = styled.section`
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    margin-bottom: 4rem;
    @media (max-width: 720px) {
        flex-direction: column;
        padding: 30%;
    }
`
const MyInfoMarketDesc = styled.text`
    color: #0D00AA;
    text-align: center;
    font-size: 1.4vw;
`
const DesciptionContainer = styled.section`
    width: 60%;
    height: 60%;
    /* box-shadow: inset 0 -10px 10px -10px rgba(0,0,0,0.4); */
`
// const DescriptionText = styled.section`
//     width: 100%;
//     height: 100%;
// `
const LogoTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom:2rem;
`;

const LogoTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const YouTubeContainer = styled.div`
display:flex;
    align-items: center;
    justify-content: center;
`;
const ImageContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const MyInfoMarketDescription = () => {
    return (
        <DesciptionSection>
            <DesciptionContainer>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <LogoTitleContainer>
                    <LogoTitle>
                        <img style={{marginRight:"0.5rem",marginBottom:"0.5rem", marginTop:"0.5rem", width: "3vw",height: "3vw"}} src="images/app_logo.png" alt="app logo" />
                        <GmarketBold fontWeight="bold" fontColor={PRIMARY_COLOR} fontSize="2.5vw">마이 인포 마켓</GmarketBold>
                    </LogoTitle>
                    <MyInfoMarketDesc>개인 정보를 디지털 자산화 합니다.</MyInfoMarketDesc> 
                </LogoTitleContainer>
                <ImageContainer >
                    <img style={{width: "20vw"}} src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086089/images/my_info_phone_drqbjm.webp" alt="폰 사진"/>                     
                </ImageContainer>
            </DesciptionContainer>
                <VideoSection>
                    <VideoContainer>
                        <div style={{textAlign:"center", marginBottom:40}}>
                        <LogoTitle>
                            <GmarketBold fontWeight="bold" fontColor={PRIMARY_COLOR} fontSize="2.0vw">마이 인포 마켓</GmarketBold>
                        </LogoTitle>
                            <GmarketBold fontColor={PRIMARY_COLOR} fontWeight="bold" fontSize="1.2vw">마이 인포 마켓을 영상으로 만나보세요</GmarketBold>
                            {/* <GmarketBold fontColor={PRIMARY_COLOR} fontWeight="bold" fontSize="2.5vw">영상으로 만나보세요</GmarketBold> */}
                            {/* <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize="1.2vw">영상 소개</NoteSansMedium> */}
                            <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize="0.8vw">
                    {`마이인포 마켓은 세계 최초의 블록체인 기반
                    개인 데이터 마켓 플랫폼입니다.`}
                    </NoteSansLight>  
                        </div>
                        {/* <YouTubeContainer> */}
                            <div class="video">
                                <div class="video-container">
                                    <iframe 
                                        title="YouTube video player"
                                        width="350rem" 
                                        height="350rem" 
                                        // showinfo="0"
                                        src="https://www.youtube.com/embed/gIkRQJbZf84?controls=0" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        {/* </YouTubeContainer> */}
                    </VideoContainer>
                </VideoSection>   
                <div style={{width:"53vw",textAlign:"center"}}>
                <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize="1.2vw">
                {`  마이 인포 운영 및 거래를
                    개인이 주도적으로 하며 그에 따른 보상이 주어집니다.

                    블록체인 기술을 활용하여
                    중앙서버 DB에 저장했던 기존 데이터 시스템보다
                    개인 데이터 보호가 강화됩니다.`}            
                </NoteSansLight>
                    <div style={{marginTop:"20px", display: "flex", justifyContent: 'center', flexDirection: 'column'}}>
                    <a href="https://play.google.com/store/apps/details?id=com.onedaydemo" rel="noreferrer" target="_blank">
                    <img style={{marginRight: "1rem", width: "10vw", height: "3vw"}} src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086085/images/google_button_cyoahz.png" alt="버튼1" /> 
                    </a>
                    <a href="https://apps.apple.com/us/app/%EB%A7%88%EC%9D%B4%EC%9D%B8%ED%8F%AC%EB%A7%88%EC%BC%93/id1612552713" rel="noreferrer" target="_blank">
                    <img style={{marginTop: "10px",marginRight: "1rem", width: "10vw", height: "3vw"}} src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086087/images/apple_button_dsxirk.png" alt="버튼2" />
                    </a>
                    </div>
                    </div> 
                </DesciptionSection>
        
            )
}
