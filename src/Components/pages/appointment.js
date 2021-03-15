import React, { Component } from "react";
import "../../sass/appointment.scss";

class Appointment extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    name: "",
    surName: "",
    telephoneNumber: "",
    day: this.minDate,
    hour: " ",
    messageValue: "",
    rodoClausule: false,
    messages: {
      wrongName:
        "Twoje imię musi zawierać conajmniej dwa znaki i nie zawierać cyfr",
      wrongSurname:
        "Twoje nazwisko musi zawierać conajmniej dwa znaki i nie zawierać cyfr ",
      wrongTelephoneNumber:
        "Twój numer telefon musi składać sie conajmniej z 5 cyfr",
      wrongDay: "Musisz zaznaczyć to pole",
      wrongOur: "Musisz wybrać godzinę z zakresu od 8 do 16",
      wrongRodoClausule: "Musisz zaznaczyć to pole. aby wysłać formularz",
    },
    placeHolders: {
        name: 'Wpisz swoje imię',
        surName: 'Wpisz swoje nazwisko',
        telephoneNumber: 'Podaj swój numer',
        hour: 'Zaznacz godzinę wizyty',
        message: 'Tu możesz wpisać swoje uwagi'
    }
   
  };
  submitForm = (e) => {
    e.preventDefault();
    if (
      this.state.name !== false &&
      (this.state.name.length < 2 ||
        this.state.name.indexOf(0) > -1 ||
        this.state.name.indexOf(1) > -1 ||
        this.state.name.indexOf(2) > -1 ||
        this.state.name.indexOf(3) > -1 ||
        this.state.name.indexOf(4) > -1 ||
        this.state.name.indexOf(5) > -1 ||
        this.state.name.indexOf(6) > -1 ||
        this.state.name.indexOf(7) > -1 ||
        this.state.name.indexOf(8) > -1 ||
        this.state.name.indexOf(9) > -1)
    ) {
      this.setState({
        name: false,
      });
    }
    if (
      this.state.surName !== false &&
      (this.state.surName.length < 2 ||
        this.state.surName.indexOf(0) > -1 ||
        this.state.surName.indexOf(1) > -1 ||
        this.state.surName.indexOf(2) > -1 ||
        this.state.surName.indexOf(3) > -1 ||
        this.state.surName.indexOf(4) > -1 ||
        this.state.surName.indexOf(5) > -1 ||
        this.state.surName.indexOf(6) > -1 ||
        this.state.surName.indexOf(7) > -1 ||
        this.state.surName.indexOf(8) > -1 ||
        this.state.surName.indexOf(9) > -1)
    ) {
      this.setState({
        surName: false,
      });
    }
    if (
      this.state.telephoneNumber !== false &&
      (this.state.telephoneNumber.length > 16 ||
        this.state.telephoneNumber.length < 5)
    ) {
      this.setState({
        telephoneNumber: false,
      });
    }
    if (this.state.hour !== false && this.state.hour.length < 2) {
      this.setState({
        hour: false,
      });
    } else if (
      this.state.name !== false &&
      this.state.name.indexOf(0) === -1 && 
      this.state.name.indexOf(1) === -1 && 
      this.state.name.indexOf(2) === -1 && 
      this.state.name.indexOf(3) === -1 && 
      this.state.name.indexOf(4) === -1 && 
      this.state.name.indexOf(5) === -1 && 
      this.state.name.indexOf(6) === -1 && 
      this.state.name.indexOf(7) === -1 && 
      this.state.name.indexOf(8) === -1 && 
      this.state.name.indexOf(9) === -1 && 
      this.state.surName !== false &&
      this.state.surName.indexOf(0) === -1 && 
      this.state.surName.indexOf(1) === -1 && 
      this.state.surName.indexOf(2) === -1 && 
      this.state.surName.indexOf(3) === -1 && 
      this.state.surName.indexOf(4) === -1 && 
      this.state.surName.indexOf(5) === -1 && 
      this.state.surName.indexOf(6) === -1 && 
      this.state.surName.indexOf(7) === -1 && 
      this.state.surName.indexOf(8) === -1 && 
      this.state.surName.indexOf(9) === -1 && 
      this.state.telephoneNumber !== false &&
      this.state.hour !== false &&
      this.state.rodoClausule === true
    ) {
      alert("Formularz został wysłany");
      const primaryClearValue = "";
      const secondaryClearValue = " ";
      this.setState({
        name: primaryClearValue,
        surName: primaryClearValue,
        telephoneNumber: primaryClearValue,
        day: this.minDate,
        hour: secondaryClearValue,
        messageValue: primaryClearValue,
        rodoClausule: false,
      });
    }
  };

  changeName = (e) => {
    const name = e.target.value;
    this.setState({
      name: name,
    });
  };

  changeSurname = (e) => {
    const surName = e.target.value;
    this.setState({
      surName: surName,
    });
  };

  changeTelephoneNumber = (e) => {
    const telephoneNumber = e.target.value;
    this.setState({
      telephoneNumber: telephoneNumber,
    });
  };
  changeDay = (e) => {
    const day = e.target.value;
    this.setState({
      day: day,
    });
  };
  changeHour = (e) => {
    const hour = e.target.value;
    this.setState({
      hour: hour,
    });
  };
  writeMessage = (e) => {
    const text = e.target.value;
    this.setState({
      messageValue: text,
    });
  };
  acceptRODO = (e) => {
    this.setState({
      rodoClausule: !this.state.rodoClausule,
    });
  };

  render() {
    console.log(this.state.name);
    console.log(this.state.hour);
    console.log(this.state.telephoneNumber);
    console.log(this.state.surName);
    console.log(this.state.day);
    console.log(this.state.messageValue);
    console.log(this.state.rodoClausule);
    let maxDate = this.minDate.slice(0, 4) * 1;
    maxDate = maxDate + "-12-31";
    return (
      <>
        <form id="contactUsForm" onSubmit={this.submitForm}>
          <label id="contactUsNameLabel" htmlFor="name">
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.changeName}
              placeholder={this.state.placeHolders.name}
            />
            <div id="nameWarningDiv">
              <p>
                {this.state.name === false ? this.state.messages.wrongName : ""}
              </p>
            </div>
          </label>

          <label id="contactUsSurnameLabel" htmlFor="surName">
            <input
              id="surName"
              type="text"
              value={this.state.surName}
              onChange={this.changeSurname}
              placeholder={this.state.placeHolders.surName}
              
            />
            <div id="surnameWarningDiv">
              <p>
                {this.state.surName === false
                  ? this.state.messages.wrongSurname
                  : ""}
              </p>
            </div>
          </label>

          <label id="contactUsTelephoneLabel" htmlFor="number">
            <input
              id="number"
              type="number"
              value={this.state.telephoneNumber}
              onChange={this.changeTelephoneNumber}
              placeholder={this.state.placeHolders.telephoneNumber}
            />
            <div id="numberWarningDiv">
              <p>
                {this.state.telephoneNumber === false
                  ? this.state.messages.wrongTelephoneNumber
                  : ""}
              </p>
            </div>
          </label>

          <div id="selectHourContainer">
            <select
              id="contactUsSelect"
              value={this.state.hour}
              onChange={this.changeHour}
              placeholder
            >
              <option value=" " disabled>Wybierz godzinę</option>
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
            <div id="contactUsSelectWarning">
              <p>
                {this.state.hour === false ? this.state.messages.wrongOur : ""}
              </p>
            </div>
          </div>
          <label id="contactUsDateLabel" htmlFor="date">
            <input
              id="data"
              type="date"
              value={this.state.day}
              min={this.minDate}
              max={maxDate}
              onChange={this.changeDay}
            />
          </label>
          <div id="writeMessageContainer">
            <textarea
              id="writeMessage"
              onChange={this.writeMessage}
              value={this.state.messageValue}
            ></textarea>
          </div>
          <label id="contactUsRodoLabel" htmlFor="rodoClausuleInput">
            <input
              id="rodoClausuleInput"
              type="checkbox"
              checked={this.state.rodoClausule}
              value={this.state.rodoClausule}
              onChange={this.acceptRODO}
            />
            <div id="rodoClauseWarningDiv">
              <p>
                {this.state.rodoClausule === false
                  ? this.state.messages.wrongRodoClausule
                  : ""}
              </p>
            </div>
          </label>
          <div id="contactUsButtonContainer">
            <button id='contactUsMainButton'>Wyślij!</button>
          </div>
        </form>
      </>
    );
  }
}

export default Appointment;
