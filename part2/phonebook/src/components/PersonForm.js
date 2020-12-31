import React, {useState} from 'react'
import RequestHandler from '../services/RequestHandler'

const PersonForm = (props) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')


    const addPerson = (event) =>{
        event.preventDefault()
        const found = props.persons.findIndex( el => el.name.toUpperCase() === newName.toUpperCase() )
    
        if (found === -1) {
          const personObj = {
            name: newName,
            number: newNumber
          }
          
          RequestHandler.addNewEntry(personObj)
          .then( response => {
            props.setPersons(props.persons.concat(personObj))
            setNewName('')
            setNewNumber('')
          })

          
        }
        else {
          window.alert(`${newName} is already added to phonebook`)
        }
      }
    
      const handleNameChange = (event) => {
        event.preventDefault()
        setNewName(event.target.value)
      }
    
      const handleNumberChange = (event) => {
        event.preventDefault()
        setNewNumber(event.target.value)
      }

    return(
        <div>
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
      </div>
    )
}

export default PersonForm