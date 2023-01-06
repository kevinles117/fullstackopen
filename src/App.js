import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FilterQuery from './components/FilterQuery.js'
import PersonForm from './components/PersonForm.js'
import DisplayPerson from './components/DisplayPerson.js'

const App = () => {  
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterQuery, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const handleAddNewPerson = (event) => {
    event.preventDefault()

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = { name: newName, number: newNumber }
      setPersons(persons.concat(newPerson))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterQuery filterQuery = {filterQuery} handleFilterChange = {handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm handleAddNewPerson = {handleAddNewPerson} newName = {newName} handleNewNameChange = {handleNewNameChange} newNumber = {newNumber} handleNewNumberChange = {handleNewNumberChange} />
      <h2>Numbers</h2>
      <DisplayPerson persons = {persons} filterQuery = {filterQuery} />
    </div>
  )
}

export default App;