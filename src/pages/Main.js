import React, { Component } from 'react'
import SearchBar from '../components/NavBar.js';
import SearchBar from '../components/MyWork.js';

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
