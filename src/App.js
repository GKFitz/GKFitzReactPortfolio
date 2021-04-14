import React from "react";
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import Main from './pages/Main.js';
import NavBar from './components/NavBar.js';
import Header from './components/Header.js';
import AboutMe from './pages/AboutMe.js';
import MyWork from './pages/MyWork.js';
import ContactMe from './pages/ContactMe.js';

function App() {
  return (
    <div>
    <HashRouter>
      <div className= "app">
        <NavBar />
        {/* <Route exact path="/" component={Header} /> */}
        <Route exact path="/aboutMe" component={AboutMe} />
        <Route exact path="/myWork" component={MyWork} />
        <Route path="/contactMe" component={ContactMe} />
      </div>
    </HashRouter>
    <Main />
    </div>
    
  );
  
}

export default App;
