import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { WHITE_FONT_COLOR } from "../../common/color/color";
import { MyInfoText } from "../../common/Text/Text";

const NavbarContainer = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    background-color: black;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left:10rem;
    padding-right: 10rem;
    justify-content: space-between;
    align-items: center;
`

const LogoContainer = styled.div`
    width: 4.5rem;
    height: 3rem;
`

const UnOrderList = styled.ul`
    display: flex;
    background-color: "black";
`

const List = styled.li`
    cursor: pointer;
    padding-left:2.5rem ;
    padding-right: 2.5rem;
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <LogoContainer >
                <img src="/images/company__logo.png" style={{width:"100%", height:"100%"}}/>
            </LogoContainer>
            <UnOrderList>
                <List>
                    <Link to="/">
                        <MyInfoText fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1.25rem">MyInfo Market</MyInfoText>
                    </Link>
                </List>
                    <List>
                        <Link to="/technology">
                        <MyInfoText fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1.25rem">Technology</MyInfoText>
                    </Link>
                </List>
                    <List>
                        <Link to="/service">
                        <MyInfoText fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1.25rem">Service</MyInfoText>
                    </Link>
                </List>
                    <List>
                        <Link to="/company">
                        <MyInfoText fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1.25rem">Company</MyInfoText>
                    </Link>
                </List>
            </UnOrderList>
        </NavbarContainer>
    )
}

export default Navbar;