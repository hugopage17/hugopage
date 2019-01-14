import React, { Component } from 'react'
import html_logo from '../Images/html.png'
import react_logo from '../Images/React-Logo.png'
import python_logo from '../Images/python_logo.png'

class Portfolio_Sidebar extends Component {
  render() {
    return (
      <div id='sidebar_wrapper'>
        <img src={html_logo} height={48} onClick={this.props.show_html}/>
        <img src={react_logo} height={38} onClick={this.props.show_react}/>
        <img src={python_logo} height={48} onClick={this.props.show_py}/>
      </div>
    );
  }
}

export default Portfolio_Sidebar;
