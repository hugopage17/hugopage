import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import Portfolio from './Components/Portfolio.js'
import WebApps from './Components/Web_Apps.js'
import Resume from './Components/Resume.js'
import Footer from './Components/Footer.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showHome:'block',
      showPort:'none',
      showCV:'none'
    }
  }

  show_home = () => {
    this.setState({showHome:'block'})
    this.setState({showPort:'none'})
    this.setState({showCV:'none'})
  }

  show_port = () => {
    this.setState({showHome:'none'})
    this.setState({showPort:'block'})
    this.setState({showCV:'none'})
  }

  show_cv = () => {
    this.setState({showHome:'none'})
    this.setState({showPort:'none'})
    this.setState({showCV:'block'})
  }

  show_contact = () => {
    window.scrollTo(0,document.body.scrollHeight);
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header home={this.show_home} port={this.show_port} cv={this.show_cv} contact={this.show_contact}/>
        </div>
        <div style={{display:this.state.showHome}}>
          <Home/>
          <Footer/>
        </div>
        <div style={{display:this.state.showPort}}>
          <Portfolio/>
        </div>
        <div style={{display:this.state.showCV}}>
          <Resume/>
        </div>
      </div>
    );
  }
}

export default App;
