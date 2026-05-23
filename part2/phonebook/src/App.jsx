import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState({ message: null, type: null })

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (personsObject) => {
    personService
      .create(personsObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setNotification({ message: `Added ${returnedPerson.name}`, type: 'success' })
        setTimeout(() => {
          setNotification({ message: null, type: null })
        }, 5000)
      })
  }

  const handlePersonsChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumbersChange = (event) => {
    const value = event.target.value
    const numberIsValid = Array.from(value).every(char => char === '-' || !isNaN(Number(char)))
    if (numberIsValid) {
      setNewNumber(value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const includedPerson = persons.find(person => person.name === newName)

    const personsObject = {
      name: newName,
      number: newNumber
    }

    if (includedPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(includedPerson.id, personsObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== includedPerson.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
            setNotification({ message: `Updated ${returnedPerson.name}`, type: 'success' })
            setTimeout(() => {
              setNotification({ message: null, type: null })
            }, 5000)
          })
          .catch(error => {
            setNotification({ message: `Information of ${includedPerson.name} has already been removed from server`, type: 'error' })
          })
      }
    } else {
      addPerson(personsObject)
    }
  }

  const handleDeleteChange = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .exclude(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification.message} type={notification.type} />
      <Filter
        filter={filter}
        onFilterChange={(event) => setFilter(event.target.value)}
        persons={persons}
      />
      <PersonForm
        onSubmit={handleSubmit}
        newName={newName}
        onNameChange={handlePersonsChange}
        newNumber={newNumber}
        onNumberChange={handleNumbersChange}
      />
      <h3>Numbers</h3>
      <div>
        <Persons persons={persons} onDelete={handleDeleteChange} />
      </div>
    </div>
  )
}

export default App