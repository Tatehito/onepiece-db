import React, { useState } from 'react'
import Sample from '../../api/sample'

class Home extends React.Component {
  state = {
    title: ""
  }

  componentDidMount() {
    Sample.get("/").then((res: { data: any; }) => {
      this.setState({ title : res.data.title });
    });
  }

  render() {
    return <h2>{ this.state.title }</h2>;
  }
}
export default Home;