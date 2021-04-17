import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios';

import Home from './components/home';
import Admin from './components/admin/home';

const url = process.env.REACT_APP_DEV_SERVER_URL!;

class App extends React.Component {
  componentDidMount() {
    axios.get(url).then((res: { data: any; }) => {
      return res.data;
    })
  }

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