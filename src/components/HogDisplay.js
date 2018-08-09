import React, { Component } from 'react';
import HogCard from './HogCard'

export default class HogDisplay extends Component{

  decideHogs = () => {
    if (this.props.greased){
    
    }
    else {
      return this.props.hogsArray
    }
  }

  decidedHogs = this.decideHogs()

  weightOf = this.props.weight

  formatHogs = () => {
   return this.props.hogsArray.map(hog => {
       return <HogCard key={ hog.name} name={ hog.name} specialty={ hog.specialty } weight={hog.weightOf} greased={ hog.greased} medal={hog['higest medal achieved']} />
     }
   )
 }


  render(){

    return(
      <div>
        {this.formatHogs()}
      </div>

    )
  }
}
