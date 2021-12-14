import React, { Component } from "react";
import './App.css';
import Form from './components/Form/Form';
import Card from './components/Card/Card';

export class App extends Component  {

  constructor(props) {
    super(props)
    this.state = {
        name:"Sara",
        email: "sara@gmail.com",
        picture:"https://media.istockphoto.com/vectors/cute-brown-bear-with-outline-vector-illustration-vector-id1266295995?k=20&m=1266295995&s=170667a&w=0&h=uwK8dWorQtyKeY-SMEC4jgbnqOvtxuzKzGV1oA_RzPs=",
        age:"18"
    }
  };

  setInfo=(name, email,picture,age)=>{
    this.setState({
      name,
      email,
      picture,
      age})

    console.log(name, email,picture,age)
  }

  render() {
    return (<div className="App">      
          <Form setInfo={this.setInfo} />  
          <Card data={this.state}/>  
      </div>
    )
  }
}


export default App
