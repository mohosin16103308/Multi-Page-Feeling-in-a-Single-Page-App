import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Blog />
        </BrowserRouter>
     
      </div>
    );
  }
}

export default App;
