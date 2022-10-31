import React from 'react'
import Person from './Person.js'

const DisplayPerson = ({persons, filterQuery}) => {
  return(
    persons
    .filter(person => person.name.toLowerCase().includes(filterQuery))
    .map(person => (
      <Person key={ person.name } name = {person.name} number = {person.number} />
    ))
  )
}

export default DisplayPerson