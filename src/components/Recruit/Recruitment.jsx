import { useState } from "react";
import styled from "styled-components";
import {GmarketBold, GmarketMedium, NoteSansLight, NoteSansBold} from "../../common/Text/Text";
import {PRIMARY_COLOR, DEEP_BLUE_COLOR, WHITE_FONT_COLOR, } from "../../common/color/color";

const data = {
    developer: {
        mainTask: [
            "블록체인 기반 금융/의료 정보공유 서비스 개발",
            "신규 서비스/플랫폼 전반 요구사항 분석/설계 및 개발",
            "Android / iOS App / React Native 개발",
            "미들웨어, 웹서버개발, Frontend 개발"
        ],
        description: {
            basic: {
                backEnd: [
                    "Java, NodeJs, Python, Golang 중 한 개 이상의 언어, 환경에서 개발을 경험하신 분",
                    "RDS, NoSQL 테이블 설계/개발 경험이 있으신 분",
                ],
                frontEnd: [
                    "ReactJS, VueJS, AngularJs 등 SPA 개발을 경험하신 분",
                    "상태관리 라이브러리(Redux, recoil)에 대한 실무 경험과 이해가 있으신 분",
                    "HTML, CSS 등 W3C 웹 표준 규격에 대한 이해가 있으신 분",
                ]
            },
            common: [
                "스스로 성장에 관심이 많으며, 새로운 기술을 접하는데에 거부감이 없으신 분",
                "블록체인에 대한 관심이 있거나 활용한 경험이 있으신 분",
                "RESTful API에 대한 실무 경험과 이해가 있으신 분",
                "소프트웨어 공학에 대한 기본 지식을 보유하고 계신 분",
                "제품의 설계, 구현, 배포 및 유지 관리 경험이 있으신 분",
                "능동적인 업무 진행 및 결과 보고서 표현력 및 전달력이 있으신 분",
                "유관부서와 원활한 협업 및 커뮤니케이션 능력이 있으신 분",
                "문제를 파악, 정의하고 해결 방안을 제시하는 것을 좋아하는 분"
            ]
        },
    },
    planner: {
        mainTask: [
            "블록체인 기반 금융/의료정보 공유 서비스 기획 및 확장",
            "신제품/서비스 기획 및 기존 서비스 개선 방안 수립",
            "서비스/플랫폼 전반 요구사항 분석 및 설계",
            "사업 기획서 및 과제 보고서 작성",
        ],
        description: {
            basic: [
                "능동적인 업무 수행력 및 문서작성력 및 전달력 (PPT 활용)이 있으신 분",
                "유관부서와 원활한 협업 및 커뮤니케이션 능력이 있으신 분",
                "신사업/신제품 마케팅 컨텐츠 기획 경험이 있으신 분",
                "명확한 커뮤니케이션/의사표현, 스토리텔링(컨텐츠) 능력이 있으신 분",
            ],
            common: [
                "블록체인/인공지능 관련 업무수행 경력이 있으신 분",
                "프로젝트 제안 및 기획 보고서 작성 경험이 있으신 분",
                "아이디어 경진대회 또는 해커톤 입상자이 있으신 분",
                "새로운 기술 및 트렌드에 대한 빠른 학습 역량이 있으신 분",
                "소프트웨어 공학에 대한 기본 지식이 있으신 분",
                "다양한 테스트 프로세스 수립/개선 경험이 있으신 분",
            ]
        },
    }
}

const RecruitmentSection = styled.section`
    padding: 10vw;
    background-color: #F5F5F5;
`

const ButtonStyle = styled.div`
    display: flex;
    flex: 0.5;
    justify-content: center;
    align-items: center;
    border: 1px solid #112761;
    padding: 1.5vw 0vw 1.5vw 0vw;
    cursor: pointer;

    background-color: ${(props) => {
        if(props.flag === props.target) return DEEP_BLUE_COLOR;
        else return "none";
    }};

    & p {
        color: ${(props) => {
            if(props.flag === props.target) return WHITE_FONT_COLOR;
            else return DEEP_BLUE_COLOR;
        }};
    };
`

const UnOrderListStyle = styled.ul`
    margin-bottom: 2vw;
    & li {
        list-style: disc;
        margin-left: 1vw;
    }

    & li::before {
        color: blue;
    }
`
const ItemTitle = styled.div`
    margin: 3vw 0vw 1vw 0;
`

const SubTitle = styled.div`
    margin-top: 2vw;
`

const DevAndPlanner = ({ job }) => {
    const { mainTask, description } = job;
    return (
        <div>
            <ItemTitle>
                <NoteSansBold fontColor={PRIMARY_COLOR} fontSize={"1.5vw"}>주요 업무</NoteSansBold>
            </ItemTitle>
            <UnOrderListStyle>
                {mainTask.map((list, index) => {
                    return(
                        <li key={index}>
                            <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                {list}
                            </NoteSansLight>
                        </li>
                    )
                })}
            </UnOrderListStyle>
            <ItemTitle>
                <NoteSansBold fontColor={PRIMARY_COLOR} fontSize={"1.5vw"}>채용 상세</NoteSansBold>
            </ItemTitle>
            <UnOrderListStyle>
                {description.basic.backEnd ?
                    <div>
                        <SubTitle>
                            <NoteSansBold fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                [기본사항]
                            </NoteSansBold>
                            <NoteSansBold fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                - Front-End Developer
                            </NoteSansBold>
                        </SubTitle>
                        {
                            description.basic.frontEnd.map((list,index) => {
                                return (
                                    <li key={index}>
                                        <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                            {list}
                                        </NoteSansLight>
                                    </li>
                                )
                            })
                        }
                        <SubTitle>
                            <NoteSansBold fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                - Back-End Developer
                            </NoteSansBold>
                        </SubTitle>
                        {
                            description.basic.backEnd.map((list,index) => {
                                return (
                                    <li key={index}>
                                        <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                            {list}
                                        </NoteSansLight>
                                    </li>
                                )
                            })
                        }
                        <SubTitle>
                            <NoteSansBold fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                [우대 사항]
                            </NoteSansBold>
                        </SubTitle>
                        {
                            description.common.map((list,index) => {
                                return (
                                    <li key={index}>
                                        <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                            {list}
                                        </NoteSansLight>
                                    </li>
                                )
                            })
                        }
                    </div>
                    :
                    <div>
                        <SubTitle>
                            <NoteSansBold fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                [기본사항]
                            </NoteSansBold>
                        </SubTitle>
                        {
                            description.basic.map((list,index) => {
                                return (
                                    <li key={index}>
                                        <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                            {list}
                                        </NoteSansLight>
                                    </li>
                                )
                            })
                        }
                        <SubTitle>
                            <NoteSansBold fontColor={DEEP_BLUE_COLOR}>
                                [우대 사항]
                            </NoteSansBold>
                        </SubTitle>
                        {
                            description.common.map((list,index) => {
                                return (
                                    <li key={index}>
                                        <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                            {list}
                                        </NoteSansLight>
                                    </li>
                                )
                            })
                        }
                    </div>
                }
            </UnOrderListStyle>
        </div>
    )
}

export const Recruitment = () => {
    const [jobFlag, setJobFlag] = useState(0);

    const handleFlag = (flag) => {
        setJobFlag(flag);
    }

    return (
        <RecruitmentSection>
            <div style={{display: "flex", justifyContent:"center", alignItems:"center", width:"100%",marginBottom: "4vw"}}>
                <GmarketBold fontColor={PRIMARY_COLOR} fontSize={"2.5vw"}>모집 분야</GmarketBold>
            </div>
            <div style={{display: "flex", justifyContent:"center", alignItems:"center", width:"100%"}}>
                <ButtonStyle onClick={() => handleFlag(0)} flag={jobFlag} target={0}>
                    <GmarketMedium fontSize={"1.2vw"} fontColor={DEEP_BLUE_COLOR} >IT 개발자</GmarketMedium>
                </ButtonStyle>
                <ButtonStyle onClick={() => handleFlag(1)} flag={jobFlag} target={1}>
                    <GmarketMedium fontSize={"1.2vw"} fontColor={DEEP_BLUE_COLOR} >사업기획</GmarketMedium>
                </ButtonStyle>
            </div>
            <div>
                <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1.2vw"}>
                    {`
                        블록체인을 활용하여 마이데이터의 새로운 지평을 열고 있는 데이터랩스의 서비스를 이끌어 나가실 기획자와 IT 개발자를 모집합니다.
                        금융, 보험 등 국내 여러 협력사들과 협업하여 블록체인을 활용한 다양한 활동으로 새로운 가치 창출에 힘쓸 수 있습니다.
                    `}
                </NoteSansLight>
            </div>
            <div>
                {jobFlag ? <DevAndPlanner job={data.planner}/> : <DevAndPlanner job={data.developer}/>}
                <div>
                    <ItemTitle>
                        <NoteSansBold fontColor={PRIMARY_COLOR} fontSize={"1.5vw"}>근무 환경</NoteSansBold>
                    </ItemTitle>
                    <UnOrderListStyle>
                        <li>
                            <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                주 4일 근무
                            </NoteSansLight>
                        </li>
                        <li>
                            <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                거주지에 따라 유연한 사무실 근무 (신논현 & 공덕)
                            </NoteSansLight>
                        </li>
                        <li>
                            <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                최신 노트북 업무 장비 지원
                            </NoteSansLight>
                        </li>
                        <li>
                            <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                점심 식대 제공
                            </NoteSansLight>
                        </li>
                        <li>
                            <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                수시 연봉 협상 체계
                            </NoteSansLight>
                        </li>
                        <li>
                            <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                연 1회 1주일 연속 휴가
                            </NoteSansLight>
                        </li>
                    </UnOrderListStyle>
                </div>
                <div>
                    <ItemTitle>
                        <NoteSansBold fontColor={PRIMARY_COLOR} fontSize={"1.5vw"}>사무실</NoteSansBold>
                    </ItemTitle>
                    <UnOrderListStyle>
                        <li>
                            <div style={{display: "flex"}}>
                                <NoteSansBold styles={{marginRight:"1vw"}} fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                    신논현
                                </NoteSansBold>
                                <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                    서울 강남구 강남대로 464 패스트파이브 4층 406호
                                </NoteSansLight>
                            </div>
                            <div style={{margin: "1vw", width:"40rem" }}>
                                <img style={{width:"100%",height:"100%"}} src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648171789/images/company1_i9yred.png" alt="신논현지점 지도"/>
                            </div>
                        </li>
                        <li>
                            <div style={{display: "flex"}}>
                                <NoteSansBold styles={{marginRight:"1vw"}} fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"} >
                                    공덕
                                </NoteSansBold>
                                <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"}>
                                    서울 마포구 마포대로 92 (도화동, 효성해링턴스퀘어) A동 7층
                                </NoteSansLight>
                            </div>
                            <div style={{margin: "1vw", width:"40rem" }}>
                                <img style={{width:"100%",height:"100%"}} src="https://res.cloudinary.com/dz7lhzjdh/image/upload/v1648171796/images/company2_moehpv.png" alt="공덕지점 지도"/>
                            </div>
                        </li>
                    </UnOrderListStyle>
                </div>
                <div>
                    <ItemTitle>
                        <NoteSansBold fontColor={PRIMARY_COLOR} fontSize={"1.5vw"}>채용 일정</NoteSansBold>
                    </ItemTitle>
                    <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"} >데이터랩스의 채용은 상시로 진행됩니다. 입사지원을 해주시면 상시로 확인하여 개별연락 드리겠습니다.</NoteSansLight>
                </div>
                <div>
                    <ItemTitle>
                        <NoteSansBold fontColor={PRIMARY_COLOR} fontSize={"1.5vw"}>입사지원 방법</NoteSansBold>
                    </ItemTitle>
                    <NoteSansLight fontColor={DEEP_BLUE_COLOR} fontSize={"1vw"} >이메일 (contact@data-labs.co.kr) 로 자유양식의 이력서를 보내주시면 빠르게 회신드리겠습니다.</NoteSansLight>
                </div>
            </div>
        </RecruitmentSection>
    )
}
