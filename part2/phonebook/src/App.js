import React, {useState, useEffect} from 'react'
import PhoneBook from './components/Phonebook'
import PersonForm from './components/PersonForm'
import PersonFilter from './components/Filter'
import axios from 'axios'


const App = () => {
  
  const [persons, setPersons] = useState([])

  const [filterText, setFilterText] = useState('')

  const personsToShow = filterText === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))

    useEffect( () => {
      axios
        .get("http://localhost:3001/db")
        .then( response => {
          setPersons(response.data.notes)
        })
    }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonFilter setFilterText = {setFilterText}/>
      <PersonForm persons = {persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <PhoneBook personsToShow = {personsToShow}/>
    </div>
  )
}

export default App