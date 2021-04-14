import React, { Component } from 'react'
import HelpingOutImg from "../assets/hw2-images/helpingOut.jpg"
import WeatherDashboardImg from "../assets/hw2-images/profileWeatherDash.jpg"
import CodingQuizImg from "../assets/hw2-images/codingQuizProfile.jpg"
import BurgerLoggerImg from "../assets/hw2-images/BurgerLogger2.jpg"
import DogHouseImg from "../assets/hw2-images/DogHouse.jpg"
import WorkDaySchedulerImg from "../assets/hw2-images/WorkDaySchedulerSS.jpg"
import IndivProject from "../components/IndivProject.js"

export default class MyWork extends Component {
    render() {
        return (
            <div>
                <section id="myWorkPage">
                <h2>My Work</h2>
                <IndivProject projectImgs={HelpingOutImg} imgAlt="HelpingOut" caption= "Project Helping Out" deployLink= "https://joelstraley.github.io/Project-1-Helping-Out/" deployGithub= "https://github.com/Joelstraley/Project-1-Helping-Out"/>
                    {/* <figure>
                        <img src= {HelpingOutImg}alt="Gillian HS"></img>
                        <figcaption>HelpingOut</figcaption>
                        <div>
                        <a href= "https://joelstraley.github.io/Project-1-Helping-Out/" target="_blank" rel="noreferrer">Link to Site</a>
                        <a href= "https://github.com/Joelstraley/Project-1-Helping-Out">Github</a>
                        </div>
                    </figure> */}
                    <IndivProject projectImgs={DogHouseImg} imgAlt="Project DogHouse" caption= "Project DogHouse" deployLink= "https://infinite-falls-44776.herokuapp.com/" deployGithub= "https://github.com/GKFitz/jediCoderz"/>
                    <IndivProject projectImgs={WeatherDashboardImg} imgAlt="Weather DashBoard" caption= "Weather Dashboard" deployLink= "https://gkfitz.github.io/GKFitzHW06.github.io/" deployGithub= "https://github.com/GKFitz/GKFitzHW06.github.io"/>
                    {/* <figure>
                        <img src="../assets/hw2-images/profileWeatherDash.jpg" alt="Weather DashBoard"/>
                        <figcaption>Weater Dashboard</figcaption>
                        <div>
                        <a href="https://gkfitz.github.io/GKFitzHW06.github.io/">Link to Site</a>
                        <a href="https://github.com/GKFitz/GKFitzHW06.github.io">Github </a>
                        </div>
                        
                    </figure> */}
                    <IndivProject projectImgs={CodingQuizImg} imgAlt="Coding Quiz" caption= "Coding Quiz" deployLink= "https://gkfitz.github.io/GKFitzHW04.github.io/" deployGithub= "https://github.com/GKFitz/GKFitzHW04.github.io"/>
                    {/* <figure>
                        <img src="../assets/hw2-images/codingQuizProfile.jpg" alt="Coding Quiz"/>
                        <figcaption>Coding Quiz</figcaption>
                        <div>
                        <a href="https://gkfitz.github.io/GKFitzHW04.github.io/">Link to Site:</a>
                        <a href="https://github.com/GKFitz/GKFitzHW04.github.io">Github</a>
                        </div>
                        
                    </figure> */}
                    <IndivProject projectImgs={BurgerLoggerImg} imgAlt="Burger Logger" caption= "Burger Logger" deployLink= "https://quiet-crag-96519.herokuapp.com/" deployGithub= "https://github.com/GKFitz/GKFitzBurgerLoggerHB"/>
                    {/* <figure>
                        <img src="../assets/hw2-images/BurgerLogger.jpg" alt="Burger Logger"/>
                        <figcaption>Burger Logger</figcaption>
                        <div>
                        <a href="https://quiet-crag-96519.herokuapp.com/">Link to Site:</a>
                        <a href="https://github.com/GKFitz/GKFitzBurgerLoggerHB">Github</a>
                        </div>
                        
                    </figure> */}
                    
                    {/* <figure>
                        <img src="../assets/hw2-images/DogHouse.jpg" alt="Project DogHouse"/>
                        <figcaption>Project DogHouse</figcaption>
                        <div> 
                        <a href="https://infinite-falls-44776.herokuapp.com/">Link to Site:</a>
                        <a href="https://github.com/GKFitz/jediCoderz">Github</a>
                        </div>
                    </figure> */}
                    <IndivProject projectImgs={WorkDaySchedulerImg} imgAlt="Work Day Scheduler" caption= "Work Day Scheduler" deployLink= "https://github.com/GKFitz/GKFitzHW05.github.io" deployGithub= "https://gkfitz.github.io/GKFitzHW05.github.io/"/>
                    {/* <figure>
                        <img src="../assets/hw2-images/WorkDaySchedulerSS.jpg" alt="Work Day Scheduler"/>
                        <figcaption>Word Day Scheduler</figcaption>
                        <div>
                            <a href="https://github.com/GKFitz/GKFitzHW05.github.io">Link to Site</a>
                            <a href= "https://gkfitz.github.io/GKFitzHW05.github.io/">Github</a>
                        </div>
                    </figure> */}
                    {/* <figure>
                        <img src="../assets/hw2-images/GilliansNoteTakerSS.jpg" alt="Note Taker"/>
                        <figcaption>Note Taker</figcaption>
                        <div>
                            <a href= "https://gkf-notetakerex.herokuapp.com/">Link to Site</a>
                            <a href= "https://github.com/GKFitz/GKFitzNoteTakerEx">Github</a>
                        </div>
                    </figure>
                    <figure>
                        <img src="../assets/hw2-images/EmployeeTrackerSS.jpg" alt="Employee Tracker"/>
                        <figcaption>Database Employee Traker</figcaption>
                        <div>
                            <a href= "https://drive.google.com/file/d/135mgR_argPejLxDFny5Rno7CG4mciD83/view">Link to Demo</a>
                            <a href= "https://github.com/GKFitz/GKFitzEmployeeTrackerSQL">Github</a>
                        </div>
                    </figure> */}

                </section>
            </div>
        )
    }
}
