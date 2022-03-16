import React from "react";
import styled from "styled-components";
import { GREY_FONT_COLOR } from "../../common/color/color";
import { NoteSansMedium } from "../../common/Text/Text";

const FooterContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    padding-top: 1vw;
    padding-bottom: 1vw;
    padding-left:10vw;
    padding-right: 10vw;
`

const FooterDescription = styled.div`
    display: flex;
    align-items: center;
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterDescription>
                <div style={{marginRight: "1.6vw"}}>
                    <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize="1.6vw">Data</NoteSansMedium>
                    <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize="1.6vw">Labs.</NoteSansMedium>
                </div>
                <div>
                    <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize="1.1vw">서울시 강남구 강남대로 패스트파이브 4층 406호</NoteSansMedium>
                    <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize="1.1vw">문의 : contact@data-labs.co.kr</NoteSansMedium>
                </div>
            </FooterDescription>
            <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize="1.1vw">COPYRIGHT &copy; 2022 DATALABS ALL RIGHT RESERVED</NoteSansMedium>
            
        </FooterContainer>
    )
}

export default Footer;