import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MyInfoMarket from './components/MyInfoMarket/MyInfoMarket';
import Technology from "./components/Technology/Technology";
import Service from "./components/Service/Service";
import Company from "./components/Company/Company";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Recruit from "./components/Recruit/Recruit";

ReactDOM.render(
  <BrowserRouter basename='https://datalabs-corp.github.io/web_homepage_react/'>
    <Navbar />
    <Routes>
      <Route path="/" element={<MyInfoMarket />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/service" element={<Service />} />
      <Route path="/company" element={<Company />} />
      <Route path="/recruit" element={<Recruit />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);
