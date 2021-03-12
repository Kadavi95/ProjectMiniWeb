
import React, { Component } from "react";

class contactUs extends Component {
  state = {
      name: '',
      surName: '',
      telephoneNumber: '',
      day: '',
      hour: ' ',
      rodoClausule: false,
      messages: {
        wrongName: 'Twoje imię musi zawierać conajmniej dwa imiona i nie zawierać cyfr ani znaków specjalnych',
        wrongSurname: 'Twoje nazwisko musi zawierać conajmniej dwa imiona i nie zawierać cyfr ani znaków specjalnych',
        wrongTelephoneNumber: 'Twój numer telefon musi składać sie conajmniej z 5 cyfr',
        wrongDay: 'Musisz zaznaczyć to pole',
        wrongOur: 'Musisz wybrać godzinę z zakresu od 8 do 16',
        wrongRodoClausule: 'Musisz zaznaczyć to pole. aby wysłać formularz',
        

      }
  };

  changeName = (e) => {
    const name = e.target.value;
    this.setState({
      name: name
    })
  }

  changeSurname = (e) => {
    const surName = e.target.value;
    this.setState({
      surName: surName
    })
  }
  
  changeTelephoneNumber = e => {
    const telephoneNumber = e.target.value;
    this.setState({
      telephoneNumber: telephoneNumber
    })
  }
  changeHour = (e) => {
    const hour = e.target.value;
    this.setState({
      hour: hour
    })
  }
  acceptRODO = (e) => {
    
  }


  render() {
    console.log(this.state.hour);
    console.log(this.state.telephoneNumber);
    console.log(this.state.surName);
    console.log(this.state.name);
    return (
      <>
        <form action="">
            <label htmlFor="">
                <input type="text" value={this.state.name} onChange={this.changeName}/>
            </label>
            <label htmlFor="">
                <input type="text" value={this.state.surName} onChange={this.changeSurname}/>
            </label>
            <label htmlFor="">
                <input type="number" value={this.state.telephoneNumber} onChange={this.changeTelephoneNumber}/>
            </label>
            <select value={this.state.hour} onChange= {this.changeHour}>
              <option value=" "> </option>
              <option value="8:00">8:00</option>
              <option value="9:00">9:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
            </select>
            <label htmlFor="">
              <input type="checkbox"checked={this.state.rodoClausule} value={this.state.rodoClausule} onChange={this.acceptRODO}/>
            </label>
          

        </form>
      </>
    );
  }
}

export default contactUs;
