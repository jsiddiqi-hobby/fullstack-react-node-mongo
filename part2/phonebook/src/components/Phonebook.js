
const PhoneBook = ({personsToShow}) => {
    const list = personsToShow.map( person => {
      return(
          <div>
              <p key={person.name}>{person.name} {person.number}</p>
          </div>
      )
    })
  
    return list
  }

  export default PhoneBook

