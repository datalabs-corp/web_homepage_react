import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyInfoMarket from './components/MyInfoMarket/MyInfoMarket';
import Technology from "./components/Technology/Technology";
import Service from "./components/Service/Service";
import Company from "./components/Company/Company";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Recruit from "./components/Recruit/Recruit";

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" Component={MyInfoMarket} />
      <Route path="/technology" Component={Technology} />
      <Route path="/service" Component={Service} />
      <Route path="/company" Component={Company} />
      <Route path="/recruit" Component={Recruit} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);
