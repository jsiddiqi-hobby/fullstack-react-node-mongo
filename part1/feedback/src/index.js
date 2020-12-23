import React, {useState} from 'react'
import ReactDOM from 'react-dom'

// EX Part 1
const ResultHeader = () => {
  return(
  <h1>Statistics</h1>
  )
}

const Result = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Percentage = (props) => {
  if( props.allValue !== 0){
    return(
      <tr>
        <td>{props.text}</td>
        <td>{(props.goodValue * 100)/props.allValue}%</td>
      </tr>
    )
  }

  return(
    <tr>
      <td>{props.text}</td>
      <td>0%</td>
    </tr>
  )

}

const Statistics = (props) => {
  if( props.allState === 0 ) {
    return(
      <p>No feedback given</p>
    )
  }

  return(
    <div>
      <table>
      <Result text = "Good" value = {props.goodState}/>
      <Result text = "Neutral" value = {props.neutralState}/>
      <Result text = "Bad" value = {props.badState}/>
      <Result text = "all" value = {props.allState}/>
      <Result text = "average" value = {props.allState/3}/>
      <Percentage text = "positive" goodValue = {props.goodState} allValue={props.allState}/>
    </table>
  </div>
  )
}

const Title = () =>(
  <div>
    <h1> Give feedback</h1>
  </div>
)

const App = () => {
  
  const [goodState, setGood] = useState(0)
  const [neutralState, setNeutral] = useState(0)
  const [badState, setBad] = useState(0)

  let allState = goodState + neutralState + badState

  
  return (
    <div>
      <Title/>
      <Button handleClick = {() => {setGood(goodState +1)}} text="good"/>
      <Button handleClick = {() => {setNeutral(neutralState +1)}} text="neutral"/>
      <Button handleClick = {() => {setBad(badState +1)}} text="bad"/>
      <ResultHeader/>
      <Statistics goodState = {goodState} neutralState = {neutralState} badState = {badState} allState={allState}/>
    </div>
  )
}


const Button = (props) =>(
    <button onClick={props.handleClick}>{props.text}</button>
)

ReactDOM.render(<App />, document.getElementById('root'))