import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { WHITE_FONT_COLOR } from "../../common/color/color";
import { NoteSansMedium } from "../../common/Text/Text";

const NavbarContainer = styled.div`
    position: fixed;
    z-index: 1;
    display: flex;
    width: 100%;
    background-color:rgba(3, 3, 3, 0.4);
    padding-top: 1vw;
    padding-bottom: 1vw;
    padding-left:10vw;
    padding-right: 10vw;
    justify-content: space-between;
    align-items: center;
`

const LogoContainer = styled.div`
    width: 4.5vw;
    height: 3vw;
`

const UnOrderList = styled.ul`
    display: flex;
    background-color: "black";
`

const List = styled.li`
    cursor: pointer;
    padding-left:2.5vw ;
    padding-right: 2.5vw;
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <LogoContainer >
                <img src="/images/company__logo.png" alt="회사 로고" style={{width:"100%", height:"100%"}}/>
            </LogoContainer>
            <UnOrderList>
                <List>
                    <Link to="/">
                        <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1.25vw">MyInfo Market</NoteSansMedium>
                    </Link>
                </List>
                <List>
                    <Link to="/technology">
                        <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1.25vw">Technology</NoteSansMedium>
                    </Link>
                </List>
                <List>
                    <Link to="/service">
                        <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1.25vw">Service</NoteSansMedium>
                    </Link>
                </List>
                <List>
                    <Link to="/company">
                        <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1.25vw">Company</NoteSansMedium>
                    </Link>
                </List>
                <List>
                    <Link to="/recruit">
                        <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1.25vw">Recruit</NoteSansMedium>
                    </Link>
                </List>
            </UnOrderList>
        </NavbarContainer>
    )
}

export default Navbar;