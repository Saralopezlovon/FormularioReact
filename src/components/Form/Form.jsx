import React, { Component } from "react";

class Form extends Component {
  render() {
    return <div>
        <h2>Formulario</h2>
          <form >
              <label>Nombre:</label>
                  <input type="text" id="name" name="name" /> <br /><br />
              <label>Precio:</label>
                  <input type="number" id="price" name="price" /><br /><br />                        
              <label>Proveedor:</label>
                  <input type="text" id="supplier" name="supplier" /><br /><br />
              <label>Imagen:</label>
                  <input type="url" id="picture" name="picture" /><br /><br />                        
              <input type="submit" />
          </form>
    </div>;
  }
}

export default Form;