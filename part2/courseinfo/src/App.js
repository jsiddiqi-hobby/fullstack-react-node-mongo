import React from "react"
import Note from './components/Note'


const NoteList = ({notes}) =>{
  const noteList = notes.map( note => {
    return(
    <div>
      <Note note={note}/>
    </div>)
  })

  return noteList
}

const App = ({notes}) => (
  <div>
    <NoteList notes ={notes}/>
  </div>
)

export default App