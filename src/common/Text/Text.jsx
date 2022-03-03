import React from "react";
import styled from "styled-components";

const Text = styled.p`
    font-weight: ${props => props.fontWeight || "medium"};
    font-size: ${props => props.fontSize || 16};
    color: ${props => props.fontColor || "black"};
    ${props => ({...props.styles})};
`

export const MyInfoText = ({ children, styles, fontWeight, fontSize, fontColor }) => {
    return (
        <Text fontWeight={fontWeight} fontSize={fontSize} fontColor={fontColor} styles={styles}>
            {children}
        </Text>
    )
}