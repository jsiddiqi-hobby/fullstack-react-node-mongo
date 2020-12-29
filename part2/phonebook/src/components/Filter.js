import React, {useState} from 'react'

const PersonFilter = (props) => {
    const [searchName, setSearchName] = useState('')
    
    const handleNameChange = (event) => {
        props.setFilterText(event.target.value)
        setSearchName(event.target.value)
      }


    return(
        <div>
            Filter shown with: <input value={searchName} onChange={handleNameChange} />
        </div>
    )
}

export default PersonFilter