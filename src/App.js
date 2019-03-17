import React, { Component } from 'react';
import Time from './components/Time'
import Weather from './components/Weather'
import News from './components/News'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: 'Jon'
    };
}

  render() {
    return (
      <fragment>
       
        
        

        <div className="wrapper">
        <div className="box a">
        <Time name={this.state.name} />
        
        </div>
        <div className="box b">
        <Weather />
        </div>
        <div className="box c">
        <News />
        </div>
        </div>


      </fragment>
    );
  }
}

export default App;
