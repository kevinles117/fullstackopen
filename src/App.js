import { useState } from 'react'
import FilterQuery from './components/FilterQuery.js'
import PersonForm from './components/PersonForm.js'
import DisplayPerson from './components/DisplayPerson.js'

const App = () => {  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterQuery, setNewFilter] = useState('')

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