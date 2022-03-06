import React from "react";
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