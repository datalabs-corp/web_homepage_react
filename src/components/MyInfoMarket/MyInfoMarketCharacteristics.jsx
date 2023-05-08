import React from "react";
import styled from "styled-components";
import { NoteSansMedium, GmarketBold } from "../../common/Text/Text";
import { PRIMARY_COLOR, GREY_FONT_COLOR } from "../../common/color/color";


const items = [
    {   
        image: "https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086085/images/chain_kluudm.png", 
        headTitle : "진정한", 
        subTitle : "마이데이터", 
        desciption1 : "마이 인포 마켓은 개인 정보를", 
        desciption2 : "본인의 디바이스에 저장하고", 
        desciption3 : "제공 이력을 관리할 수 있습니다.", 
    },
    {
        image: "https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086090/images/coin_jegdkd.png", 
        headTitle : "보상받는", 
        subTitle : "마이데이터", 
        desciption1 : "제 3의 동의 절차 없이", 
        desciption2 : "마이데이터를 판매하고", 
        desciption3 : "보상받을 수 있습니다.", 
    },
    {
        image: "https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086090/images/handshake_a57e3r.png",
        headTitle : "믿을 수 있는",
        subTitle : "마이데이터",
        desciption1 : "마이데이터를",
        desciption2 : "블록체인 기반 DID로 만들어",
        desciption3 : "디지털 자산화를 가능하게 합니다.",
    }
];


// const CharContainer = styled.section`
//     background-color: #EEEEEE; 
//     padding: 10px; 
//     background-image: url("https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086088/images/my_info_characteristics_background_sfh0iu.webp");
//     @media (max-width: 690px) {
//         .CharContainer {
//             padding: 10px;
//         }
//         .CharItemsContainer {
//             flex-wrap: wrap;
//     }
// }`


const CharContainer = styled.section`
    background-color: #eeeeee;
    padding: 5vw;
    background-image: url("https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648086088/images/my_info_characteristics_background_sfh0iu.webp");
`


const CharTitleContainer = styled.div`
    text-align: center;
`


const CharItemsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;
    @media (max-width: 720px){
        flex-direction: column;
    }
`

const CharItem = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    background-color: white;
    margin: 1rem;
    min-width:13rem;
    min-height: 10rem;
    width: 20vw;
    height: 18vw;
    align-items: center;
    justify-content: center;
`

const CurcleImage = styled.div`
    display:flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    position: absolute;
    top: -5vw;
    background-color: ${PRIMARY_COLOR};
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
`

const Item = ({image, headTitle, subTitle, desciption1, desciption2, desciption3}) => { 
    return ( 
        <CharItem>
            <GmarketBold styles={{marginTop:"4rem"}} fontColor={PRIMARY_COLOR} fontSize={"1.8vw"} fontWeight={"bold"}>{`"${headTitle}"`}</GmarketBold>
            <GmarketBold fontColor={"#979aba"} fontSize={"1.8vw"} fontWeight={"bold"}>{subTitle}</GmarketBold>
            <div style={{marginTop: "1rem",textAlign:"center",marginBottom: "1rem"}}>
                <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize={"1vw"} >{desciption1}</NoteSansMedium>
                <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize={"1vw"} >{desciption2}</NoteSansMedium>
                <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize={"1vw"} >{desciption3}</NoteSansMedium>
            </div>  
            <CurcleImage> 
                <img style={{width:"50%", height:"50%"}} src={image} alt="아이콘 이미지"/> 
            </CurcleImage> 
        </CharItem>
    )
}

export const MyInfoMarketCharacteristics = () => {
    return (
        <CharContainer>
            <CharTitleContainer>
                <GmarketBold fontColor={PRIMARY_COLOR} fontSize={"2.5vw"} fontWeight={"bold"}>마이 인포 마켓만의</GmarketBold>
                <GmarketBold fontColor={PRIMARY_COLOR} fontSize={"2.5vw"} fontWeight={"bold"}>3가지 특징</GmarketBold>
                <NoteSansMedium fontColor={GREY_FONT_COLOR} fontSize={"1.4vw"} >마이 인포 마켓만의 특별한 3가지 장점을 소개합니다.</NoteSansMedium>
            </CharTitleContainer> 
            <CharItemsContainer> 
                {items.map((item,index) => { 
                    const { image, headTitle, subTitle, desciption1, desciption2, desciption3 } = item;
                    return <Item 
                                key={index}
                                image={image}
                                headTitle={headTitle} 
                                subTitle={subTitle} 
                                desciption1={desciption1} 
                                desciption2={desciption2} 
                                desciption3={desciption3}
                            />
                })}
            </CharItemsContainer>
        </CharContainer>
    )
}

