
import React, { Component } from "react";

class contactUs extends Component {
  state = {
      name: '',
      surName: '',
      telephoneNumber: '',
      day: '',
      hour: '',
      rodoCalusue: ''
  };
  render() {
    return (
      <>
        <form action="">
            <label htmlFor="">
                <input type="text"/>
            </label>
            <label htmlFor="">
                <input type="text"/>
            </label>
            <label htmlFor="">
                <input type="number"/>
            </label>
            <label htmlFor="">
              <input type='month' name="" id=""/>
            </label>
          

        </form>
      </>
    );
  }
}

export default contactUs;
