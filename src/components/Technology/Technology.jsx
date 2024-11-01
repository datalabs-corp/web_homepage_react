import React from "react";
import styled from "styled-components";
import { Banner } from "./Banner";
import { PreTraining } from "./PreTraining";
import { FineTuning } from "./FineTuning";
import { Architecture } from "./Architecture";

const TechSection = styled.section`
    width: 100%;
`

const Technology = () => {
    window.scrollTo(0,0);
    return (
        <TechSection>
            <Banner />
            <PreTraining />
            <FineTuning />
            <Architecture />
        </TechSection>
    )
}

export default Technology;