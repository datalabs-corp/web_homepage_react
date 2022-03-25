import React from "react";
import styled from "styled-components";
import { Banner } from "./Banner";
import { Description } from "./Description";
import { OurBenefits } from "./OurBenefits";


const ServiceSection = styled.section`
    
`

const Service = () => {
    window.scrollTo(0,0);
    return (
        <ServiceSection>
            <Banner />
            <Description />
            <OurBenefits />
        </ServiceSection>
    )
}

export default Service;