import React from 'react';
import './style.css';

class Table extends React.Component {
  constructor(){
    super();
  }

  render()
  {
    return (
      <div>
      <h1>Endangered Animals</h1>
        <table>
          <tr>
            <th>Common Name</th>
            <th>Scientific Name</th> 
            <th>Conservation Status</th>
          </tr>
          <tr>
            <td><a id = "animal" href = "https://www.worldwildlife.org/species/amur-leopard">Amur Leopard</a></td>
            <td>Panthera pardus orientalis</td>
            <td>Critically Endangered</td>
          </tr>
          <tr>
            <td><a id = "animal" href = "https://www.worldwildlife.org/species/black-rhino">Black Rhino</a></td>
            <td>Diceros bicornis</td>
            <td>Critically Endangered</td>
          </tr>
          <tr>
            <td><a id = "animal" href = "https://www.worldwildlife.org/species/red-panda">Red Panda</a></td>
            <td>Ailurus fulgens</td>
            <td>Endangered</td>
          </tr>
        </table>
        </div>
    );
  }
}

export default Table;