import React from "react";
import { Banner } from "./Banner";
import { CEOGreeting } from "./CEO_Greeting";
import { Introduction } from "./Introduction";
import { History } from "./History";

const Company = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Banner />
      <CEOGreeting />
      <History />
      <Introduction />
    </div>
  );
};

export default Company;
