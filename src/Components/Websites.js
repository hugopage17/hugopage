import React, { Component } from 'react'

class Websites extends Component{
  render(){
    return(
      <div id='home_wrapper'>
          <div id='iframe_sites'>
            <div class='iframe_site'>
              <h2><a href='http://xtm.co.nz/' target='_blank'>Xtreme Threat Management</a></h2>
              <iframe src='http://xtm.co.nz/' height="400" width="800" />
            </div>
            <div class='iframe_site'>
              <h2><a href='http://merinie.com.au' target='_blank'>Merinie</a></h2>
              <iframe src='http://merinie.com.au/' height="400" width="800"/>
            </div>
          </div>
      </div>
    )
  }
}

export default Websites
