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
    padding-top: 1vw;
    padding-bottom: 1vw;
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
const DropDownItems = styled.div`
    display: none;
    position: absolute;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
    padding: 10px 0px;
    margin-top: 5px;
`
const DropDownItem = styled.div`
    display: block;
    padding: 10px 15px;
`
const DropDownTitle = styled.a`
    display: block;
    text-decoration: none;
    color: #fff;
`
const DropDownMenu = styled.div`
    display: inline-block;
    position: relative;
    padding-left:2.5vw ;
    padding-right: 2.5vw;
    padding-top: 1vw;
    padding-bottom: 1vw;
    &:hover > ${DropDownItems} {
        display: block;
        background-clip: padding-box;
    }
`;
// .menu > li:hover .dropdown-content {
//   display: block;
// }

// const MenuLi = styled.li`
//     display: flex;
//     justify-content: center;
// `;

const NavbarLayout = () => {
    const [openToggle, setOpenToggle] = useState(false);
    const openSlider = () => {
        setOpenToggle(true);
    }
    const closeSlider = () => {
        setOpenToggle(false);
    }
    const [optLanguage, setOptLanguage] = useState('Korea');


    const ChangeToEnglish = () => {
        setOptLanguage('English');
        
    }
    const ChangeToKorea = () => {
        setOptLanguage('Korea');
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
                    <li><Link to="/service">Service</Link></li>
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
                    <Link to="/" styles={{height: '30px', display: "content"}}>
                        <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1vw">Service</NoteSansMedium>
                    </Link>
                </List>
                {/* <List>
                    <Link to="/technology">
                        <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1vw">Technology</NoteSansMedium>
                    </Link>
                </List> */}
                <DropDownMenu>
                    <DropDownTitle>
                        <Link to="/technology">
                            <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1vw">Technology</NoteSansMedium>
                        </Link>
                    </DropDownTitle>
                    <DropDownItems>
                        <DropDownItem>
                            <Link to="/technology">
                                <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1vw">LLM Pre-training</NoteSansMedium>
                            </Link>
                        </DropDownItem>
                        <DropDownItem>
                            <Link to="/blockchain">
                                <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1vw">Blockchain</NoteSansMedium>
                            </Link>
                        </DropDownItem>
                    </DropDownItems>
                </DropDownMenu>

                {/* 여행대로 메뉴 추가 */}
                <DropDownMenu>
                    <DropDownTitle>
                        <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1vw">여행대로</NoteSansMedium>
                    </DropDownTitle>
                    <DropDownItems>
                        <DropDownItem>
                            <a href="https://dltour.data-labs.co.kr/admin-login" target="_blank" rel="noopener noreferrer">
                                <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1vw">여행대로 관리자</NoteSansMedium>
                            </a>
                        </DropDownItem>
                        <DropDownItem>
                            <a href="https://m.blog.naver.com/PostList.naver?blogId=data-labs" target="_blank" rel="noopener noreferrer">
                                <NoteSansMedium fontColor={WHITE_FONT_COLOR} fontWeight="bold" fontSize="1vw">여행대로 블로그</NoteSansMedium>
                            </a>
                        </DropDownItem>
                    </DropDownItems>
                </DropDownMenu>

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

export default NavbarLayout;