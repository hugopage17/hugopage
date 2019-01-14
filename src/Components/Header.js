import React, { Component } from 'react'
import github_logo from '../Images/github.png'
import linkedin_logo from '../Images/linkedin_logo.png'

class Header extends Component{
  render(){
    return(
      <div>
        <div id='top_header'>
          <span>
            <h1>Hugo Page</h1>
            <img src={github_logo} id='git_logo' class='social_but'
              onClick={()=>{window.open('https://github.com/hugopage17/')}}
            />
            <img src={linkedin_logo} id='link_logo' class='social_but'
              onClick={()=>{window.open('https://www.linkedin.com/in/hugo-page-9804b7157/')}}
            />
          </span>
        </div>
        <div id='nav'>
          <ul>
            <li onClick={this.props.home}>Home</li>
            <li onClick={this.props.port}>Portfolio</li>
            <li onClick={this.props.cv}>Resume</li>
            <li onClick={this.props.contact}>Contact</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
