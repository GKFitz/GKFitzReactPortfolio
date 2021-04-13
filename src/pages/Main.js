import React, { Component } from 'react'
import Header from '../components/Header.js';
import NavBar from '../components/NavBar.js';
import MyWork from '../components/MyWork.js';
import ContactMe from '../components/ContactMe.js';

export default class Main extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <br/>
                <br/>
                <br/>
                <br/>
                <Header />
                <br/>
                <br/>
                <br/>
                <MyWork />
                <br/>
                <br/>
                <br/>
                <ContactMe />
                
            </div>

        )
    }
}
