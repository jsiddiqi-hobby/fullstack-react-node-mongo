import React from "react"


const Note = ({ parts }) => {
const titles = parts.map( part => <p>{part.name} {part.exercises}</p>)
    return titles
}

export default Note