import React from "react";
import styled from "styled-components";
import { GREY_FONT_COLOR } from "../../common/color/color";
import { NoteSansLight, NoteSansMedium } from "../../common/Text/Text";

const FooterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding-top: 1vw;
  padding-bottom: 1vw;
  padding-left: 10vw;
  padding-right: 10vw;
`;

const FooterDescription = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  width: 2.4vw;
  height: 2.4vw;
  border-radius: 1.2vw;
  background-color: #cbcbcb;
  background-color: black;
  margin-right: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconContainerTwo = styled.div`
  width: 2.4vw;
  height: 2.4vw;
  border-radius: 1.2vw;
  background-color: #cbcbcb;
  margin-right: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterDescription>
        <div style={{ marginRight: "1.6vw" }}>
          <NoteSansLight
            fontColor={GREY_FONT_COLOR}
            fontSize="1.6vw"
            styles={{ margin: 0 }}
          >
            Data
          </NoteSansLight>
          <NoteSansLight
            fontColor={GREY_FONT_COLOR}
            fontSize="1.6vw"
            styles={{ margin: 0 }}
          >
            Labs.
          </NoteSansLight>
        </div>
        <div>
          <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize="1.1vw">
            서울특별시 강남구 도산대로 145 패스트파이브 3층
          </NoteSansMedium>
          <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize="1.1vw">
            문의 : admin@data-labs.co.kr
          </NoteSansMedium>
        </div>
      </FooterDescription>
      <div style={{ display: "flex" }}>
      <a
          href="https://www.facebook.com/My-info-market-100401495996682/"
          target={"_blank"}
          rel="noreferrer"
        >
          <IconContainer>
            <img
              src="../images/logo_facebook.png"
              alt="facebook-logo"
              width="100%"
            />
          </IconContainer>
        </a>
        <a
          href="https://www.instagram.com/my_info_market/?hl=ko"
          target={"_blank"}
          rel="noreferrer"
        >
          <IconContainer>
            <img
              src="../images/logo_instagram.png"
              alt="instagram-logo"
              width="100%"
            />
          </IconContainer>
        </a>
        <a
          href="https://www.youtube.com/channel/UCcGJ1KLpOW3xrw2OwTowRFg"
          target={"_blank"}
          rel="noreferrer"
        >
          <IconContainer>
            <img
              src="../images/logo_youtube.png"
              alt="youtube-logo"
              width="100%"
            />
          </IconContainer>
        </a>
        <a
          href="https://blog.naver.com/data-labs"
          target={"_blank"}
          rel="noreferrer"
        >
          <IconContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "0.2vw",
              }}
            >
              <img
                src="../images/logo_naver_blog.png"
                alt="blog-logo"
                width="100%"
              />
            </div>
          </IconContainer>
        </a>
        <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize="1.1vw">
          COPYRIGHT &copy; 2022 DATALABS ALL RIGHT RESERVED
        </NoteSansMedium>
      </div>
    </FooterContainer>
  );
};

export default Footer;
