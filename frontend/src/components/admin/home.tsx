import React, { useState } from 'react'
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Sample from '../../api/sample'

import { PostList } from '../characters';

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
    return <Admin dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}>
            <Resource name="posts" list={PostList} />
          </Admin>;
  }
}
export default Home;