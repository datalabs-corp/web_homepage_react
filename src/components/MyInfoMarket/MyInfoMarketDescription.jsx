import React from "react";
import styled from "styled-components";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";
import { MyInfoText } from "../../common/Text/Text";

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
`

const LogoTitle = styled.div`
    display: flex;
    align-items: center;
`

const ImageContainer = styled.div`
    
`

export const MyInfoMarketDescription = () => {
    return (
        <DesciptionSection>
            <DesciptionContainer>
                <LogoTitleContainer>
                    <LogoTitle>
                        <img style={{marginRight:"0.5rem",marginBottom:"0.5rem", marginTop:"0.5rem"}} src="images/app_logo.png" alt="app logo" />
                        <MyInfoText fontWeight="bold" fontColor={PRIMARY_COLOR} fontSize="2.5rem">마이 인포 마켓</MyInfoText>
                    </LogoTitle>
                    <MyInfoText fontColor={PRIMARY_COLOR} fontSize="1.4rem" >개인 정보를 디지털 자산화 합니다.</MyInfoText>
                </LogoTitleContainer>

                <ImageContainer >
                    
                </ImageContainer>
            </DesciptionContainer>
        </DesciptionSection>
    )
}