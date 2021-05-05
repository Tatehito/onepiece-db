import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios';

import Home from './components/home';
import Admin from './components/adminHome';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/admin' component={Admin} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;