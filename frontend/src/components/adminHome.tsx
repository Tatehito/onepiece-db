import React from 'react'

import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { CharacterList, CharacterShow, CharacterEdit, CharacterCreate } from './characters';

const adminHome = () => (
  <Admin dataProvider={jsonServerProvider(process.env.REACT_APP_DEV_SERVER_URL)}>
    <Resource name="characters" list={CharacterList} edit={CharacterEdit} create={CharacterCreate} show={CharacterShow} />
  </Admin>
)
export default adminHome;