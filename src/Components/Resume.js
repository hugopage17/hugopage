import React, { Component } from 'react'

class Resume extends Component{
  render(){
    return(
      <div id='resume_wrapper'>
        <h1 style={{textAlign:'center', fontSize:40}}>Curriculum Vitae</h1>
        <div id='exp'>
          <h1>Experience</h1>
          <div class='res_sec'>
            <h2>Web Developer, Production Management Services: September - December 2018</h2>
            <p>I worked on a 3-month contract as a Web developer responsible for
            building multiple websites using Nopcommerce and CS-Cart. As a developer I was required
            to write HTML/CSS/Javascript from scratch as well as edit the source code of the CMS written in C# and PHP.</p>
          </div>
          <div class='res_sec'>
            <h2>Customer Consultant, Booster Kiwisaver: January - September 2018</h2>
            <p>I was responsible for contacting any members who were potentially looking to transfer their kiwi saver
             accounts to another provider and convince them to stay with Booster by explaining the benefits
             our kiwi saver provider had to offer</p>
          </div>
          <div class='res_sec'>
            <h2>Telemarketer, One Contact: August 2014 - April 2017</h2>
            <p>Fundraised for Australian Charities by selling raffle tickets over the phone.
            To be successful in this role, I was required to constantly meet and exceed KPI's and other sales targets
            when both cold and warm calling residents of New South Wales</p>
          </div>
        </div>
        <div id='edu'>
          <h1>Education</h1>
          <div class='res_sec'>
            <h3>Diploma in Web Development - Computer Power plus 2018</h3>
            <h3>Bachelors of Science - University of Otago 2017</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
