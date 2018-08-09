import React, { Component } from 'react';

export default class Filter extends Component{

  handleSelectChange = (event) => {
    this.props.filterHogs(event.target.value)
  }

  handleGreasedCheck = (event) => {
    this.props.filterGreasedHogs()
  }


  render(){
    return(
      <div id="filter">
        <div id="sortby-filter">
          <label>Sort By </label>
          <select onChange={this.handleSelectChange}>
            <option value="name">Name </option>
            <option value="weight">Weight </option>
          </select>
        </div>
        <div id="greased-filter">
          <label>Greased Pigs Only? </label>
            <input type="checkbox" onClick={this.handleGreasedCheck}/>
        </div>
        <div id="hidden-filter">
          Show Hidden
        </div>
      </div>
    )
  }
}
