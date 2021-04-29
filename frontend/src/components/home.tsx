import React, { useState } from 'react'
import MaterialTable from 'material-table';

class Home extends React.Component {
  render() {
    const colums = [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ]
    const data = [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    ]

    return (
      <div>
        <h2>Home</h2>
        <MaterialTable title="Basic Sorting Preview" columns={ colums } data={ data }
          options={{
            sorting: true
          }}
        />
      </div>
    );
  }
  
}
export default Home;