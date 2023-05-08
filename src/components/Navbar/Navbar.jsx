import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { WHITE_FONT_COLOR } from "../../common/color/color";
import { NoteSansMedium } from "../../common/Text/Text";
import { AiOutlineMenu } from "react-icons/ai";



const NavbarContainer = styled.div`
    position: fixed;
    z-index: 1;
    display: flex;
    width: 100%;
    height: 4vw;
    background-color:rgba(3, 3, 3, 0.4);
    padding-top: 1vw;
    padding-bottom: 1vw;
    padding-left:10vw;
    padding-right: 10vw;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 720px) {
        height: 50px;
    }
`

const LogoContainer = styled.div`
    width: 3vw;
    /* height: 2.5vw; */
`

const UnOrderList = styled.ul`
    display: flex;
    background-color: "black";
`

const List = styled.li`
    cursor: pointer;
    padding-left:2.5vw ;
    padding-right: 2.5vw;
    @media (max-width: 720px) {
        display: none;
    }
`
// 메뉴버튼 추가
const MenuBtn = styled.div` 
    display: none;
    @media (max-width: 720px) {
        display: initial;
        width: 30px;
        height: 30px;
    }
`;
const Background = styled.div`
    position: fixed;
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
`;
const Slider = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    right: 0;
    width: 60%;
    height: 100vh;
    background-color: #ffffff;
    z-index: 200;
    transition: right 0.3s ease-in;
    padding: 15% 10%;
`;
const MenuUl = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 5.5vw;
    line-height: 8vw;
    & a {
        color: #000;
    }
    & a:visited {
        color: #000;
    }
`;
// const MenuLi = styled.li`
//     display: flex;
//     justify-content: center;
// `;

const Navbar = () => {
    const [openToggle, setOpenToggle] = useState(false);
    const openSlider = () => {
        setOpenToggle(true);
    }
    const closeSlider = () => {
        setOpenToggle(false);
    }
    return (
        <>
        <Background
            style={{ display: openToggle ? '' : 'none' }}
            onClick={() => closeSlider()}
        />
            <Slider style={{ right: openToggle ? '' : '-60%'}}>
                <MenuUl>
                    <li><Link to="/">My Info Market</Link></li>
                    <li><Link to="/technology">Technology</Link></li>
                    <li><Link to="/service">Sevice</Link></li>
                    <li><Link to="/company">Company</Link></li>
                </MenuUl>
                <MenuUl>
                    <li>+</li>
                    <li><Link to="/recruit">Recruit</Link></li>
                </MenuUl>
            </Slider>
        <NavbarContainer>
            <LogoContainer >
                <img src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086088/images/company__logo_a32s9l.png" alt="회사 로고" style={{width:"100%", height:"100%"}}/>
            </LogoContainer>
            <UnOrderList>
                <MenuBtn onClick={() => openSlider()}>
                    <AiOutlineMenu size={'100%'}/> 
                </MenuBtn>
                <List>
                    <Link to="/">
                        <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1vw">MyInfo Market</NoteSansMedium>
                    </Link>
                </List>
                <List>
                    <Link to="/technology">
                        <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1vw">Technology</NoteSansMedium>
                    </Link>
                </List>
                <List>
                    <Link to="/service">
                        <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1vw">Service</NoteSansMedium>
                    </Link>
                </List>
                <List>
                    <Link to="/company">
                        <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1vw">Company</NoteSansMedium>
                    </Link>
                </List>
                <List>
                    <Link to="/recruit">
                        <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1vw">Recruit</NoteSansMedium>
                    </Link>
                </List>
            </UnOrderList>
        </NavbarContainer>
        </>
    )
}

export default Navbar;