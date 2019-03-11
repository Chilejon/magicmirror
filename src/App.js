import React, { Component } from 'react';
import Time from './components/Time'
import Weather from './components/Weather'
import News from './components/News'
import './App.css'

class App extends Component {
  render() {
    return (
      <fragment>
        <Time />
        <Weather />
        <News />
      </fragment>
    );
  }
}

export default App;
