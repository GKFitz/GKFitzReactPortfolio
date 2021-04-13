import React, { Component } from 'react'

export default class IndivProject extends Component {
    render(props) {
        return (
            
            <figure>
                <img src={this.props.projectImgs} alt= {this.props.imgAlt}></img>
                <figcaption>{this.props.caption}</figcaption>
                <div>
                        <a href= {this.props.deployLink} target="_blank" rel="noreferrer">Link to Site</a>
                        <a href= {this.props.deployGithub} target="_blank" rel="noreferrer">Github</a>
                </div>
            </figure>
            
        )
    }
}

