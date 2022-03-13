import React from "react";
import styled from "styled-components";
import { Banner } from "./Banner";
import { Intro } from "./Intro";
import { Recruitment } from "./Recruitment"

const RecruitSection = styled.section`

`

const Recruit = () => {
    return (
        <RecruitSection>
            <Banner />
            <Intro />
            <Recruitment />
        </RecruitSection>
    )
}

export default Recruit;