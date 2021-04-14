import React from "react";
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import Main from './pages/Main.js';
import NavBar from './components/NavBar.js';
import Header from './components/Header.js';
import AboutMe from './pages/AboutMe.js';
import MyWorkPage from './pages/MyWorkPage.js';
import ContactMe from './pages/ContactMe.js';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <HashRouter>
      <div className= "app">
        <NavBar />
        <Route exact path="/" component= {Main}/>
        {/* <Route exact path="/aboutMe" component={AboutMe} /> */}
        <Route exact path="/myWorkPage" component={MyWorkPage} />
        {/* <Route path="/contactMe" component={ContactMe} /> */}
      </div>
      <Footer />
    </HashRouter>
   
    </div>
    
  );
  
}

export default App;
