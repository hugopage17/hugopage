import React, { Component } from 'react'
import WebApps_Sidebar from './WebApps_Sidebar'
import Stats from './Stats.js'

class WebApps extends Component {
  constructor(props){
    super(props)
    this.state = {
      showStats:'block',
      showFinance:'none',
      showCompiler:'none'
    }
  }

  render() {
    return (
      <div>
        <div id='sidebar'>
          <WebApps_Sidebar/>
        </div>
        <div id='main_sec'>
          <div>
            <Stats/>
          </div>
        </div>
      </div>
    );
  }
}

export default WebApps;
