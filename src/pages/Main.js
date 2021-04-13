import React, { Component } from 'react'
import NavBar from '../components/NavBar.js';
import MyWork from '../components/MyWork.js';

export default class Main extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <MyWork />
            </div>
        )
    }
}
