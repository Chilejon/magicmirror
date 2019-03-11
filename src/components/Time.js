import React, { Component } from 'react';

class Time extends Component {
  render() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    var todaysDate = dd + '/' + mm + '/' + yyyy;

    var h = today.getHours()
    var m = today.getMinutes() //January is 0!
    var theTime = h + ':' + m

    var goodMessage = ''

    switch (h) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
        goodMessage = "morning"
        break;
      case 12:
      case 13:
      case 14:
      case 15:

        goodMessage = "afternoon"
        break;
      default:
        goodMessage = "evening"
    }


    return (
      <fragment>
        <p>Good {goodMessage}</p>
        <p>{theTime}</p>
        <p>{todaysDate}</p>
      </fragment>
    );
  }
}

export default Time;