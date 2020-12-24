import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const anecdotes = [
  'How does a project get to be a year late?... One day at a time.',
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => {
  return(
  <button onClick={props.handleClick}>{props.text}</button>
  )
}

const PopularAnecdote = (props) => {
  const max = Math.max(...props.votes)
  const indexofMax = props.votes.indexOf(max)
  if( indexofMax >= 0  && max > 0) {
    return(
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{props.anecdotes[indexofMax]}</p>
        </div>
      )
  }

  return null
}

const App = (props) => {
  const points = Array(props.anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)

  return (
    <div>
      <h1>Anecdote of the date</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button text="vote" handleClick = {() => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
        }}/>
      
      <Button text="next anecdote" handleClick = {() => {setSelected(Math.floor(Math.random() * props.anecdotes.length))}}/>

      <PopularAnecdote anecdotes={anecdotes} votes={votes}/>
    </div>

  )
}


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)