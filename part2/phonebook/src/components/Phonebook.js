import RequestHandler from '../services/RequestHandler'

const Button = ({handleClicked}) =>{
  return(
    <button onClick={handleClicked}>Delete</button>
  )
}

const PhoneBook = (props) => {
    const list = props.personsToShow.map( (person, index) => {
      return(
          <div>
              <label key={person.name}>{person.name} {person.number}  </label>
              <Button handleClicked={() =>{
                if (window.confirm("Do you really want to delete?")) {
                  RequestHandler.deleteEntry(person.id)
                  .then( () =>{
                    props.persons.splice(index,1)
                })
                }
              }}/>
          </div>
      )
    })
  
    return list
  }

  export default PhoneBook

