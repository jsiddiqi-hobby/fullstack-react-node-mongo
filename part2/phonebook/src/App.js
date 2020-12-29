import React, {useState} from 'react'
import PhoneBook from './components/Phonebook'
import PersonForm from './components/PersonForm'
import PersonFilter from './components/Filter'


const App = () => {
  
  const [persons, setPersons] = useState(
    [{name: "Alice",
      number: "123"}]
  )

  const [filterText, setFilterText] = useState('')

  const personsToShow = filterText === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))

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