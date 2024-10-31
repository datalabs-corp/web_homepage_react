import React from "react";
import styled from "styled-components";
import { Banner } from "./Banner";
import { WhyBlockchain } from "./WhyBlockchain";
import { DataChain } from "./DataChain";
import { Architecture } from "./Architecture";

const BlockchainSection = styled.section`
    width: 100%;
`

const Blockchain = () => {
    window.scrollTo(0,0);
    return (
        <BlockchainSection>
            <Banner />
            <WhyBlockchain />
            <DataChain />
            <Architecture />
        </BlockchainSection>
    )
}

export default Blockchain;