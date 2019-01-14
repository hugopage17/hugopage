import React, { Component } from 'react'
import Sidebar from './Portfolio_Sidebar'
import Python from './Python.js'
import React_Apps from './React.js'
import Websites from './Websites.js'

class Portfolio extends Component {
  constructor(props){
    super(props)
    this.state = {
      showHTML:'block',
      showReact:'none',
      showPy:'none'
    }
  }

  show_html = () => {
    this.setState({showHTML:'block'})
    this.setState({showReact:'none'})
    this.setState({showPy:'none'})
  }

  show_react = () => {
    this.setState({showHTML:'none'})
    this.setState({showReact:'block'})
    this.setState({showPy:'none'})
  }

  show_py = () => {
    this.setState({showHTML:'none'})
    this.setState({showReact:'none'})
    this.setState({showPy:'block'})
  }

  render() {
    return (
      <div>
        <div id='sidebar'>
          <Sidebar show_html={this.show_html} show_react={this.show_react} show_py={this.show_py}/>
        </div>
        <div id='main_sec'>
          <div style={{display:this.state.showHTML}}>
            <Websites/>
          </div>
          <div style={{display:this.state.showReact}}>
            <React_Apps/>
          </div>
          <div style={{display:this.state.showPy}}>
            <Python/>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
