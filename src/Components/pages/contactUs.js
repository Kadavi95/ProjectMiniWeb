
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
                <input type="text"/>
            </label>

        </form>
      </>
    );
  }
}

export default contactUs;
