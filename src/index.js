import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blockchain from "./components/Blockchain/Blockchain";
import Company from "./components/Company/Company";
import Footer from "./components/Footer/Footer";
import Recruit from "./components/Recruit/Recruit";
import Service from './components/Service/Service';
import Technology from './components/Technology/Technology';
import NavbarLayout from './components/Navbar/Navbar';

ReactDOM.render(
  <Router>
    <NavbarLayout />
      <Routes>
        <Route path="/" Component={Service} />
        <Route path="/technology" Component={Technology} />
        <Route path="/blockchain" Component={Blockchain} />
        <Route path="/company" Component={Company} />
        <Route path="/recruit" Component={Recruit} />
      </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);
