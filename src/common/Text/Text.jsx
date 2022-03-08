import React from "react";
import styled from "styled-components";
import "./Text.css";


const Text = styled.p`
    font-weight: ${props => props.fontWeight || "medium"};
    font-size: ${props => props.fontSize || 16};
    color: ${props => props.fontColor || "black"};
    ${props => ({...props.styles})};
    font-family: ${props => props.family};
`

export const GmarketLight = ({ children, styles, fontSize, fontColor }) => {
    return (
        <Text fontSize={fontSize} styles={styles} fontColor={fontColor} family="GmarketLight">
            {children}
        </Text>
    )
}

export const GmarketMedium = ({ children, styles, fontSize, fontColor }) => {
    return (
        <Text fontSize={fontSize} styles={styles} fontColor={fontColor} family="GmarketMedium">
            {children}
        </Text>
    )
}

export const GmarketBold = ({ children, styles, fontSize, fontColor }) => {
    return (
        <Text fontSize={fontSize} styles={styles} fontColor={fontColor} family="GmarketBold">
            {children}
        </Text>
    )
}

export const NoteSansLight = ({ children, styles, fontSize, fontColor }) => {
    return (
        <Text fontSize={fontSize} styles={styles} fontColor={fontColor} family="NoteSansLight">
            {children}
        </Text>
    )
}

export const NoteSansMedium = ({ children, styles, fontSize, fontColor }) => {
    return (
        <Text fontSize={fontSize} styles={styles} fontColor={fontColor} family="NoteSansMedium">
            {children}
        </Text>
    )
}

export const NoteSansBold = ({ children, styles, fontSize, fontColor }) => {
    return (
        <Text fontSize={fontSize} styles={styles} fontColor={fontColor} family="NoteSansBold">
            {children}
        </Text>
    )
}


// 

export const MyInfoText = ({ children, styles, fontWeight, fontSize, fontColor }) => {
    return (
        <Text fontWeight={fontWeight} fontSize={fontSize} fontColor={fontColor} styles={styles}>
            {children}
        </Text>
    )
}
