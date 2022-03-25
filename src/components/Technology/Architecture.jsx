import React from "react";
import styled from "styled-components";
import { MyInfoText } from "../../common/Text/Text";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";

const ArchSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10rem;
    padding-top: 0;
`

export const Architecture = () => {
    return (
        <ArchSection>
            <div style={{marginBottom: "3rem", display:"flex", justifyContent:"center", alignItems: "center", flexDirection: "column"}}>
                <MyInfoText fontColor={PRIMARY_COLOR} fontSize={"3rem"} fontWeight={"bold"}>Architecture</MyInfoText>
                <MyInfoText fontColor={GREY_FONT_COLOR} fontSize={"1.4rem"}>데이터체인 3 - Layer</MyInfoText>
            </div>
            <img style={{width:"70vw"}} src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086090/images/Arch_image_mkw4gk.webp" alt="이미지"/>
        </ArchSection>
    )
}
