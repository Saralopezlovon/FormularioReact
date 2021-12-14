import React, { Component } from "react";

class Card extends Component {
  render() {
    const info = this.props.data
    
    return <div>
      <p>{info.name}</p>
      <p>{info.email}</p>
      <p>{info.age}</p>
      <img src={info.picture} alt={info.name}/>
    </div>;
  }
}

export default Card;
