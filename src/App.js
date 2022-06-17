// src/App.js

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { mockData } from './mock-data'
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList events={mockData}/>
        <NumberOfEvents/>
        </div>
    );
  }
}

export default App;