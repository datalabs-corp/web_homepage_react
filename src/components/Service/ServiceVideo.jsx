import React from "react";
import styled from "styled-components";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";
import { GmarketBold, NoteSansMedium, NoteSansLight } from "../../common/Text/Text";


// const DesciptionSection = styled.section`
//     /* background-color: white; */
//     background-color: #f0faff;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 1rem;
//     padding: 3rem 1rem;
//     @media (max-width: 720px) {
//         flex-direction: column;
//         padding: 30%;
//     }
// `
const DesciptionSection = styled.section`
    background-color: white;
    background-color: #f0faff;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 3rem 1rem;
    margin-bottom: 1rem;
    @media (max-width: 720px) {
        flex-direction: column;
        padding: 30%;
    }
`

const DesciptionContainer = styled.section`
    width: 27%;
    height: 50%;
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

const TourAppDesc = styled.text`
    color: #25B1FA;
    font-size: "1.2vw";
    text-align: center;
    @media (max-width: 720px) {
        font-size: "1vw";
    }
`;

const LogoTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
`;

const ImageContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Contain = styled.div`
    flex-direction: row;
    justify-content: center;
`;
const DescContainer = styled.div`
    align-items: center;
    justify-content: center;
    width:"53vw";
    text-align: center;
`;
const VideoSection = styled.section`
    /* padding:1rem; */
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


export const ServiceVideo = () => {
    return (
        <DesciptionSection>
            <DesciptionContainer>
                <Contain>
                        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <LogoTitleContainer>
                        <LogoTitle>
                            <img style={{marginRight:"0.5rem",marginBottom:"0.5rem", marginTop:"0.5rem", width: "3vw",height: "3vw", alignItems:"center"}} src="images/tourAppLogo2.png" alt="app logo" />
                            <img style={{marginRight:"0.5rem",marginBottom:"0.5rem", marginTop:"0.5rem", width: "12vw",height: "3vw", alignItems:"center"}} src="images/tourAppLogo.png" alt="app logo" />
                            {/* <GmarketBold fontWeight="bold" fontColor={PRIMARY_COLOR} fontSize="2.5vw">여행대로</GmarketBold> */}
                        </LogoTitle>
                    <TourAppDesc>당일치기 여행과 NFT 저장</TourAppDesc>
                    </LogoTitleContainer>
                    <ImageContainer >
                        <img style={{width: "20vw"}} src="images/tourAppPhone.png" alt="폰 사진"/>                     
                    </ImageContainer>
                </Contain>
            </DesciptionContainer>
                <VideoSection>
                    <VideoContainer>
                        <div style={{textAlign:"center", marginBottom:40}}>
                        <LogoTitle>
                            {/* <GmarketBold fontWeight="bold" fontColor={"#25B1FA"} fontSize="2.0vw">여행대로</GmarketBold> */}
                            <img style={{marginBottom:"0.5rem", marginTop:"0.5rem", width: "12vw",height: "3vw", alignItems:"center", justifyContent:"center"}} src="images/tourAppLogo.png" alt="app logo" />
                        </LogoTitle>
                            <GmarketBold fontColor={"#25B1FA"} fontWeight="bold" fontSize="1.2vw" textAlign="center">여행대로를 영상으로 만나보세요</GmarketBold>
                            {/* <GmarketBold fontColor={PRIMARY_COLOR} fontWeight="bold" fontSize="2.5vw">영상으로 만나보세요</GmarketBold> */}
                            {/* <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize="1.2vw">영상 소개</NoteSansMedium> */}
                            <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize="0.8vw">
                                {`여행 MBTI 결과에 따른
                                여행지 추천받고 여행떠나자.`}
                            </NoteSansLight>  
                        </div>
                        <div class="video">
                            <div class="video-container">
                                <iframe  
                                    title="YouTube video player"
                                    width="400px" 
                                    height="250px" 
                                    // showinfo="0"
                                    src="https://www.youtube.com/embed/CfccL5rCilM?si=qpWM1GdkbWjMdYzt"
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                        <div class="video" style={{marginTop: 10}}>
                            <div class="video-container">
                                <iframe  
                                    title="YouTube video player"
                                    width="400px" 
                                    height="250px" 
                                    // showinfo="0"
                                    src="https://www.youtube.com/embed/FhQcip0Mfns?si=rW3qMZiXMwi-xFvm"
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </VideoContainer>
                </VideoSection>   
                <div>
                    <DescContainer>
                        <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize="1.2vw">
                        {`  여행 당일치기 모집과 일정수립을 쉽고, 편하게
                            저 비용으로! 내 마음대로, 내 발길닿은 대로 
                            나와 동행하는 여행대로!

                            블록체인 기반 NFT를 활용하여 여행대로
                            멤버쉽을 가진 여행자에게 특별한 경험을
                            공유할 기회를 제공하는 서비스`}            
                        </NoteSansLight>
                    </DescContainer>
                    <div style={{marginTop: "20px", display: "flex", justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                    <a href="https://play.google.com/store/apps/details?id=com.datatourapp" rel="noreferrer" target="_blank">
                    <img style={{ width: "10vw", height: "3vw"}} src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086085/images/google_button_cyoahz.png" alt="버튼1" /> 
                    </a>
                    <a href="https://itunes.apple.com/app/id6458978344" rel="noreferrer" target="_blank">
                    <img style={{marginLeft: "1vw", width: "10vw", height: "3vw"}} src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086087/images/apple_button_dsxirk.png" alt="버튼2" />
                    </a>
                    </div>
                </div> 
            </DesciptionSection>
    )
}

