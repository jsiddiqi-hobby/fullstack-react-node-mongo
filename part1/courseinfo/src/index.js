import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
  <h1>{props.name}</h1>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.name} {props.number}
    </p>
  )
}

const Total = (props) => {
  return(
  <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name = {course}/>
      <Part name = {part1} number = {exercises1} />
      <Part name = {part2} number = {exercises3} />
      <Part name = {part3} number = {exercises3} />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))