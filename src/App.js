import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchUserFromApi } from './actions'

class App extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <button onClick={() => this.props.dispatch(fetchUserFromApi())}>Get me data</button>
      </div>
    );
  }
}

export default connect()(App);
