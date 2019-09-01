import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={ () => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })  

  return <tbody>{rows}</tbody>
}      

// class Table extends Component {   //NotMe
  // render() {    //NotMe
const Table = (props) => {   //Me
    // const { characterData, removeCharacter } = this.props  //NotMe
    const { characterData, removeCharacter } = props  //Me

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      </table>
    )
   // }   //NotMe
}

export default Table