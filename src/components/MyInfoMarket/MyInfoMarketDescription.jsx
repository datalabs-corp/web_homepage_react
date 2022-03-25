import React from "react";
import styled from "styled-components";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";
import { GmarketBold, NoteSansMedium, NoteSansLight } from "../../common/Text/Text";

const DesciptionSection = styled.section`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8rem;
`

const DesciptionContainer = styled.section`
    width: 100%;
    height: 100%;
    box-shadow: inset 0 -10px 10px -10px rgba(0,0,0,0.4);
`

const LogoTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom:3rem;
`

const LogoTitle = styled.div`
    display: flex;
    align-items: center;
`

const ImageContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

export const MyInfoMarketDescription = () => {
    return (
        <DesciptionSection>
            <DesciptionContainer>
                <LogoTitleContainer>
                    <LogoTitle>
                        <img style={{marginRight:"0.5rem",marginBottom:"0.5rem", marginTop:"0.5rem", width: "3vw",height: "3vw"}} src="images/app_logo.png" alt="app logo" />
                        <GmarketBold fontWeight="bold" fontColor={PRIMARY_COLOR} fontSize="2.5vw">마이 인포 마켓</GmarketBold>
                    </LogoTitle>
                    <NoteSansMedium fontColor={PRIMARY_COLOR} fontSize="1.4vw" >개인 정보를 디지털 자산화 합니다.</NoteSansMedium>
                </LogoTitleContainer>
                <ImageContainer >
                    <img style={{width: "20vw"}} src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086089/images/my_info_phone_drqbjm.webp" alt="폰 사진"/>
                    <div style={{width:"25vw", marginLeft:"5rem"}}>
                        <NoteSansLight fontColor={GREY_FONT_COLOR} fontSize="1.2vw">
                            {`마이인포 마켓은 세계 최초의 블록체인 기반
                                개인 데이터 마켓 플랫폼입니다.
                                
                                마이 인포 운영 및 거래를
                                개인이 주도적으로 하며 그에 따른 복상이 주어집니다.
                                블록체인 기술을 활용하여
                                중앙서버 DB에 저장했던 기존 데이터 시스탬보다
                                개인 데이터 보호가 강화됩니다.`}
                        </NoteSansLight>
                        <div style={{marginTop:"2rem", display: "flex", width: "20vw"}}>
                            <a href="https://play.google.com/store/apps/details?id=com.onedaydemo" rel="noreferrer" target="_blank">
                                <img style={{marginRight: "1rem", width: "10vw", height: "3vw"}} src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086085/images/google_button_cyoahz.png" alt="버튼1" /> 
                            </a>
                            <img style={{marginRight: "1rem", width: "10vw", height: "3vw"}} src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086087/images/apple_button_dsxirk.png" alt="버튼2" />
                        </div>
                    </div>
                </ImageContainer>
            </DesciptionContainer>
        </DesciptionSection>
    )
}