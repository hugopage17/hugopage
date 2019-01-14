import React, { Component } from 'react'
import python_logo from '../Images/python_logo.png'

class Python extends Component{
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    fetch('https://api.jsonbin.io/b/5c354a922c87fa273069b00f/4')
      .then(res => res.json())
      .then(json => {
        this.setState({data:json})
    })
  }

  show_data = () => {
    let data = this.state.data
    return(
      <div>
        <div id='all_projects'>
          {data.map(project => (
            <div id='each_project' onClick={()=>{
              fetch(project.view)
                .then(function(response){
                  return response.text()
                })
                .then(function(text){
                  document.getElementById('code_display').value = text
                })
            }}>
              <h1>{project.name} <img src={python_logo} height={48}/></h1>
              <p>{project.description}</p>
              <button onClick={() =>{window.open(project.source)}}>Download</button>
            </div>
          ))}
        </div>
        <div id='code_sec'>
          <textarea id='code_display' rows={44} cols={88} value='click on a project to display its code...'/>
        </div>
      </div>
    )
  }

  render(){
    return(
      <div>
        {this.show_data()}
      </div>
    )
  }
}

export default Python
