import React from "react";
import styled from "styled-components";
import { MyInfoText } from "../../common/Text/Text";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";

const DataChainSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10rem;
`

export const DataChain = () => {
    return (
        <DataChainSection>
            <div style={{marginBottom: "3rem", display:"flex", justifyContent:"center", alignItems: "center", flexDirection: "column"}}>
                <MyInfoText fontColor={PRIMARY_COLOR} fontSize={"3rem"} fontWeight={"bold"} >Data Chain</MyInfoText>
                <MyInfoText fontColor={GREY_FONT_COLOR} fontSize={"1.4rem"}>데이터체인의 특징</MyInfoText>
            </div>
            <img style={{width:"90%"}} src="/images/data_chain_char.png" alt="이미지"/>
        </DataChainSection>
    )
}
