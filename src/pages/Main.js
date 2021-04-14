import React, { Component } from 'react'
import Header from '../components/Header.js';
// import NavBar from '../components/NavBar.js';
import AboutMe from './AboutMe.js';
import MyWork from '../components/MyWork.js';
import ContactMe from './ContactMe.js';
import Footer from '../components/Footer.js';

export default class Main extends Component {
    render() {
        return (
            <div>
                {/* {/* <NavBar />  */}
                <br/>
                <br/>
                <br/>
                <br/> 
                <Header/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <AboutMe id= "AboutMe"/>
                <br/>
                <br/>
                <br/>
                <MyWork id= "MyWork"/>
                <br/>
                <br/>
                <br/>
                <ContactMe id= "ContactMe"/>
                <br/>
                <br/>
                <br/>
                {/* <Footer /> */}
                
            </div>

        )
    }
}
