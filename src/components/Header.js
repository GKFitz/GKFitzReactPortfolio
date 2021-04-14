import React, { Component } from 'react'
import GillianHS from "../assets/hw2-images/gillianSmileHS.jpg"

export default class Header extends Component {
    render() {
        return (
            
            <header>
                <figure>
                    <img src= {GillianHS} alt="Gillisn HS"/>
                    <figcaption>Gillian K. Fitzgerald</figcaption>
                    <figcaption> Freelance Full Stack Developer</figcaption>
                </figure>
            </header>
            
        )
    }
}
