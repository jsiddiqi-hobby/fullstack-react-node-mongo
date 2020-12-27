import React from "react"
import Note from './components/Note'


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

const Course = ({ course }) => (
  <div>
    <Header courseName={course.name} />
    <Note parts = {course.parts}/>
    <Total parts = {course.parts}/>
  </div>
)

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'MongoDb',
      id: 2,
      parts: [
        {
          name: 'Db basic',
          exercises: 5,
          id: 1
        },
        {
          name: 'Db connection',
          exercises: 7,
          id: 2
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const courseList = courses.map( c => {
    return(
    <div>
      <Course course={c}/>
    </div>)
  })

  return courseList

  //return <Course course={courses} />
}

export default App