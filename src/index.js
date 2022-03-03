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
import Service from "./components/MyInfoMarket/MyInfoMarket";
import Company from "./components/Company/Company";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<MyInfoMarket />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/service" element={<Service />} />
      <Route path="/company" element={<Company />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);
