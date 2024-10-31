import React from "react";
import styled from "styled-components";
import { WHITE_FONT_COLOR } from "../../common/color/color";
import { GmarketBold, NoteSansLight } from "../../common/Text/Text";

const BannerContainer = styled.div`
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(17, 39, 97, 0.3)),
    url("https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086090/images/service_banner_qqmnof.webp");
  background-repeat: no-repeat;
  background-size: cover;
  height: 35vw;
  padding-left: 15vw;
  align-items: center;
`;

export const Banner = () => {
  return (
    <BannerContainer>
      <div>
        <GmarketBold
          fontColor={WHITE_FONT_COLOR}
          fontWeight={"bold"}
          fontSize={"2.8vw"}
        >
          Service
        </GmarketBold>
        <NoteSansLight fontColor={WHITE_FONT_COLOR} fontSize={"1.2vw"}>
          데이터랩스는 블록체인 기반 서비스를 쉽고 빠르게 만들수 있는 환경을
          제공합니다.
        </NoteSansLight>
      </div>
    </BannerContainer>
  );
};
