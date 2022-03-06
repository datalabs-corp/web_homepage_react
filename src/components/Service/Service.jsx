import React from "react";
import styled from "styled-components";
import { Banner } from "./Banner";
import { Description } from "./Description";
import { OurBenefits } from "./OurBenefits";


const ServiceSection = styled.section`
    
`

const Service = () => {
    return (
        <ServiceSection>
            <Banner />
            <Description />
            <OurBenefits />
        </ServiceSection>
    )
}

export default Service;