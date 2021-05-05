import React from 'react'

import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { CharacterList, CharacterShow, CharacterEdit, CharacterCreate } from './characters';

const Home = () => (
  <Admin dataProvider={jsonServerProvider("https://onepiece-db.herokuapp.com/api/v1")}>
    <Resource name="characters" list={CharacterList} show={CharacterShow} />
  </Admin>
)
export default Home;