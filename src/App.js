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

        <div className="about">
          <p>
            This project is built on a <a href="https://github.com/Codaisseur/SentimentsAPI">NodeJS Express API</a>,
            a <a href="https://github.com/Codaisseur/Sentimentel">React Front-end</a>, using Twitter for search,
            and Microsoft Azure's <a href="https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/overview">Text Analytics API</a>.
          </p>
          <p>Made with ♥ in ✖✖✖ by <a href="https://www.codaisseur.com">Codaisseur</a></p>
        </div>
      </div>
    );
  }
}

export default App;
