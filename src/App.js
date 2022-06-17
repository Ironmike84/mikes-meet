// src/App.js

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { mockData } from './mock-data'
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  state = {
    events: mockData
  }
  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList events={this.state.events}/>
        <NumberOfEvents/>
        </div>
    );
  }
}

export default App;