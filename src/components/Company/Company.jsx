import React from "react";
import styled from "styled-components";
import { MyInfoText } from "../../common/Text/Text";
import { PRIMARY_COLOR, GREY_FONT_COLOR, WHITE_FONT_COLOR} from "../../common/color/color";
import { Banner } from "./Banner";
import { CEOGreeting } from "./CEO_Greeting";
import { Introduction } from "./Introduction";


const Company = () => {
    return (
        <div>
            <Banner />
            <CEOGreeting />
            <Introduction />
        </div>
    )
}

export default Company;