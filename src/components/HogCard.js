import React from 'react';


export default class HogCard extends React.Component {
  nameOfPig = this.props.name


  //getting the images
  formatName = (nameOfPig) => {
    return nameOfPig.toLowerCase().split(' ').join("_")
  }

  formattedName = this.formatName(this.nameOfPig)
  formattedUrl = require("../hog-imgs/" + this.formattedName + ".jpg")

  render()
    {
    return(
      <div>
        <img alt={this.props.name} src={this.formattedUrl} />
        <h1>{this.props.name}</h1>
        <p>{this.props.specialty}</p>
      </div>

    )
  }
}
