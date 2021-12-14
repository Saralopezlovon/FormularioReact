import React, { Component } from "react";

class Form extends Component {  

    

    handleSubmit = (event) =>{
        event.preventDefault();
        const name = event.target.elements.name.value
        const email = event.target.elements.email.value
        const picture = event.target.elements.picture.value
        const age = event.target.elements.age.value
        this.props.setInfo(name,email, picture,age) //Aqui el hijo para al padre como parametro los valores del formulario a través de una función
    }


  render() {
    return <div>
        <h2>Formulario</h2>
          <form onSubmit={this.handleSubmit} >
              <label>Nombre:</label>
                  <input type="text" id="name" name="name" /> <br /><br />
              <label>Email:</label>
                  <input type="email" id="email" name="email" /><br /><br />                      
              <label>Imagen:</label>
                  <input type="url" id="picture" name="picture" /><br /><br />                      
              <label>Edad:</label>
                  <input type="number" id="age" name="age" /><br /><br />
              <input type="submit" /> 
          </form>
    </div>;
  }
}

export default Form;