
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
                <input type="text" value={this.state.name}/>
            </label>
            <label htmlFor="">
                <input type="text" value={this.state.name}/>
            </label>
            <label htmlFor="">
                <input type="number" value={this.state.telephoneNumber}/>
            </label>
            <select name="" id="">
              <option value="">8:00</option>
              <option value="">9:00</option>
              <option value="">10:00</option>
              <option value="">11:00</option>
              <option value="">12:00</option>
              <option value="">13:00</option>
              <option value="">14:00</option>
              <option value="">15:00</option>
              <option value="">15:00</option>
              <option value="">16:00</option>
            </select>
          

        </form>
      </>
    );
  }
}

export default contactUs;
