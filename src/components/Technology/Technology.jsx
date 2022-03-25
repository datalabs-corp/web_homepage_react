import React from "react";
import styled from "styled-components";
import { Banner } from "./Banner";
import { WhyBlockchain } from "./WhyBlockchain";
import { DataChain } from "./DataChain";
import { Architecture } from "./Architecture";

const TechSection = styled.section`
    width: 100%;
`

const Technology = () => {
    return (
        <TechSection>
            <Banner />
            <WhyBlockchain />
            <DataChain />
            <Architecture />
        </TechSection>
    )
}

export default Technology;