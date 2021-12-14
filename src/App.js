import React, { Component } from "react";
import './App.css';
import Form from './components/Form/Form';
import Card from './components/Card/Card';

//Componente padre
export class App extends Component  {

  //Añadir el primer estado al componente padre 
  constructor(props) {
    super(props)
    this.state = {
        name:"",
        email: "",
        picture:"",
        age:""
    }
  };

  //Declarar una función que modifique el estado del padre y se cambie por lo que recoja el hijo
  //Desde el hijo se pasa como parámetros lo recogido del formulario y se cambia el estado con un setState
  setInfo=(name, email,picture,age)=>{
    this.setState({
      name,
      email,
      picture,
      age})
  }

  //Pasar las props:
  //Al contenedor hijo1->form la función
  //Al contenedor hijo2->la información que reside en el state
  render() {
    return (<div className="App">      
          <Form setInfo={this.setInfo} />  
          <Card data={this.state}/>  
      </div>
    )
  }
}


export default App
