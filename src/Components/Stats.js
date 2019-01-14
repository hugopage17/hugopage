import React, { Component } from 'react';

class Stats extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  calculate = () => {
    let num_string = document.getElementById('num_list').value
    let num_list = num_string.split(",")
    let total = 0
    for(var i=0; i<num_list.length;i++){
      total +=  Number(num_list[i])
    }
    let mean = total/num_list.length
    mean = Math.round(mean * 100) / 100

    var variance = 0
    for(var i=0; i<num_list.length;i++){
        variance += (Math.pow((num_list[i]-mean), 2))
    }
    variance = variance/num_list.length
    variance = Math.round(variance * 100)/100

    var sd = Math.sqrt(variance)
    sd = Math.round(sd * 100)/100

    document.getElementById('mean').innerText = 'Mean: '+mean
    document.getElementById('variance').innerText = 'Variance: ' + variance
    document.getElementById('sd').innerText = 'Standard Deviation: ' + sd
  }


  render(){
    return(
      <div id='stats_wrapper'>
        <div>
          <h1>Normal Distributon</h1>
        </div>
        <div>
          <label>Values <input type='text' id='num_list'/><button onClick={this.calculate}>Calculate</button></label>
        </div>
        <div id='results'>
          <h2 id='mean'></h2>
          <h2 id='variance'></h2>
          <h2 id='sd'></h2>
        </div>
      </div>
    )
  }
}

export default Stats
