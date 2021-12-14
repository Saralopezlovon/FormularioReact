import React, { Component } from "react";

class Card extends Component {
  render() {
    //Aqui se reciben las props que el padre ha pasado como "data" que es el this.state
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
