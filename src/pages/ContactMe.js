import React, { Component } from 'react'
import StormKingImg from "../assets/hw2-images/gkfhw02_portfolio_stormking.jpg"
import Resume from "../assets/hw2-images/gillianFitzgeraldResumeD3.pdf"
export default class ContactMe extends Component {
    render() {
        return (
            
            <section id="contactMe">
                <h2>Contact Me!</h2>
                <figure>
                    <img src= {StormKingImg} alt="Storm King"/>
                    <figcaption>Gillian K Fitzgerald</figcaption>
                    <figcaption>Email:<a href= "gkf2103@gmail.com">"gkf2103@gmail.com"</a></figcaption>
                    <figcaption>Phone: 201-951-2677</figcaption>
                    <a href= {Resume}>See My Resume</a>
                </figure>
        
            </section>
            
        )
    }
}
