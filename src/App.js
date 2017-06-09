import React, { Component } from 'react'
import Search from './components/Search'
import Result from './components/Result'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Sentimentel</h1>
          <p>How does Twitter feel?</p>
        </div>
        <p className="App-intro">
          To get started, type a topic below and hit the button.
        </p>
        <Search />
        <Result />
      </div>
    );
  }
}

export default App;
