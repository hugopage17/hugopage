import React, { Component } from 'react'

class React_Apps extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    fetch('https://api.jsonbin.io/b/5c356eda81fe89272a872900')
      .then(res => res.json())
      .then(json => {
        this.setState({data:json})
    })
  }

  show_apps = () => {
    let data = this.state.data
    return(
      <div id='web_apps_wrapper'>
        {data.map(project => (
          <div id='web_apps' onClick={() =>{window.open(project.link)}}>
            <img src={project.image} height={256}/>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.show_apps()}
      </div>
    )
  }
}

export default React_Apps;
