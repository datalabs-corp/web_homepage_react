import React from "react";
import styled from "styled-components";
import { GREY_FONT_COLOR } from "../../common/color/color";
import { MyInfoText } from "../../common/Text/Text";

const FooterContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left:10rem;
    padding-right: 10rem;
    /* height: 6rem; */
`

const FooterDescription = styled.div`
    display: flex;
    align-items: center;
    /* width: ; */
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterDescription>
                <div style={{marginRight: "1.6rem"}}>
                    <MyInfoText fontColor={GREY_FONT_COLOR} fontSize="1.6rem">Data</MyInfoText>
                    <MyInfoText fontColor={GREY_FONT_COLOR} fontSize="1.6rem">Labs.</MyInfoText>
                </div>
                <div>
                    <MyInfoText fontColor={GREY_FONT_COLOR} fontSize="1.1rem">서울시 강남구 강남대로 패스트파이브 4층 406호</MyInfoText>
                    <MyInfoText fontColor={GREY_FONT_COLOR} fontSize="1.1rem">문의 : contact@data-labs.co.kr</MyInfoText>
                </div>
            </FooterDescription>
            <MyInfoText fontColor={GREY_FONT_COLOR} fontSize="1.1rem">COPYRIGHT &copy; 2022 DATALABS ALL RIGHT RESERVED</MyInfoText>
            
        </FooterContainer>
    )
}

export default Footer;