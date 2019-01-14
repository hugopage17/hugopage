import React, { Component } from 'react'

class Home extends Component{
  render(){
    return(
      <div id='home_wrapper'>
        <div id='intro_para'>
          <p>Welcome to my website, here you will find a portfolio showcasing my skill set I have gained through my studies and work experience.
          There are links to my CV as well as general knowledge about me! All my contact details are provided below so feel free to get in touch
          with me</p>
        </div>
        <div id='heading_websites'>
          <p>Below are my most recent website I have developed professionally</p>
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
      </div>
    )
  }
}

export default Home
