import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

const axios = require('axios');
const url = process.env.REACT_APP_DEV_SERVER_URL;

class App extends React.Component {
  state = {
    title: ""
  }

  componentDidMount() {
    axios.get(url)
      .then((res: { data: any; }) => {
        const title = res.data.title;
        this.setState({ title });
      })
  }

  render() {
    return (
      <div className="App"> 
        <header className="App-header"> 
          <img src={logo} className="App-logo" alt="logo" /> 
          <span>{ this.state.title }</span>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a>
        </header>
      </div>
    );
  }
}

export default App;