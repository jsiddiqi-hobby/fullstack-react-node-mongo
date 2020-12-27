import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const notes = [
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

ReactDOM.render(<App notes={notes} />,document.getElementById('root'));

