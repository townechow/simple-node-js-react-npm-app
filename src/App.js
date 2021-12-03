import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          dadadadadadadateang
          docker run -d  --rm   -u root   -p 8080:8080   -v jenkins-data:/var/jenkins_home   -v /var/run/docke
          r.sock:/var/run/docker.sock   -v "$HOME":/home   jenkinsci/blueocean
        </p>
      </div>
    );
  }
}

export default App;
