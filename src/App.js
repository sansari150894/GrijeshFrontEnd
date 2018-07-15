import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";

import Admin from './Admin/Admin'; 

class App extends Component {
  render() {
    return (
      <div>
         <Route path="/admin" component={Admin} />
      </div>
    );
  }
}

export default App;
