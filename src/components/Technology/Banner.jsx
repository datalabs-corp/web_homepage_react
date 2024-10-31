import React from "react";
import styled from "styled-components";
import { GmarketBold, NoteSansLight } from "../../common/Text/Text";
import { WHITE_FONT_COLOR } from "../../common/color/color";
import { Intro } from "./PreTraining";

const BannerContainer = styled.div`
    display: flex;
    position: relative;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(17, 39, 97, 0.3)), url("https://i.imgur.com/GbaUcIw.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    height:35vw;
    padding-left: 15vw;
    align-items: center;
`

export const Banner = () => {
    return (
        <BannerContainer>
            <div>
                <GmarketBold
                    fontColor={WHITE_FONT_COLOR}
                    fontWeight={"bold"}
                    fontSize={"2.8vw"}
                >
                    LLM Pre-Training
                </GmarketBold>
                <NoteSansLight fontColor={WHITE_FONT_COLOR} fontSize={"1.2vw"}>
                    차별화된 LLM Pre-Training, 데이터체인
                </NoteSansLight>
            </div>
            <div style={{ position: "absolute", left: "10rem", bottom: "0rem" }}>
                <GmarketBold
                fontColor={WHITE_FONT_COLOR}
                fontSize={"13vw"}
                styles={{ opacity: 0.15 }}
                >
                    Pre-training
                </GmarketBold>
            </div>
        </BannerContainer>
    )
}
