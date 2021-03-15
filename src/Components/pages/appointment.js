import React, { Component } from "react";

class Appointment extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    name: "",
    surName: "",
    telephoneNumber: "",
    day: this.minDate,
    hour: " ",
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
    console.log(this.state.rodoClausule);
    let maxDate = this.minDate.slice(0, 4) * 1;
    maxDate = maxDate + "-12-31";
    return (
      <>
        <form onSubmit={this.submitForm}>
          <label htmlFor="">
            <input
              type="text"
              value={this.state.name}
              onChange={this.changeName}
            />
          </label>
          <p>
            {this.state.name === false ? this.state.messages.wrongName : ""}
          </p>
          <label htmlFor="">
            <input
              type="text"
              value={this.state.surName}
              onChange={this.changeSurname}
            />
          </label>
          <p>
            {this.state.surName === false
              ? this.state.messages.wrongSurname
              : ""}
          </p>
          <label htmlFor="">
            <input
              type="number"
              value={this.state.telephoneNumber}
              onChange={this.changeTelephoneNumber}
            />
          </label>
          <select value={this.state.hour} onChange={this.changeHour}>
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
            <input
              type="date"
              value={this.state.day}
              min={this.minDate}
              max={maxDate}
              onChange={this.changeDay}
            />
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              checked={this.state.rodoClausule}
              value={this.state.rodoClausule}
              onChange={this.acceptRODO}
            />
          </label>
          <button>Umów!</button>
        </form>
      </>
    );
  }
}

export default Appointment;
