import React from "react"


const Titles = ({ parts }) => {
const titles = parts.map( part => <p>{part.name} {part.exercises}</p>)
    return titles
}

const Header = ({ courseName }) => (
    <h1>
      {courseName}
    </h1>
  )
  
  const Total = ({ parts }) => {
    const exList = parts.map(part => part.exercises)
    const sum = exList.reduce( (total, curValue) => { return total + curValue} )
    return(
    <h3>
      total of {sum} exercises
    </h3>)
  
  }
  
  const Note = ({ note }) => (
    <div>
      <Header courseName={note.name} />
      <Titles parts = {note.parts}/>
      <Total parts = {note.parts}/>
    </div>
  )

export default Note