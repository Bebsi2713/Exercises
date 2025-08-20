const Header = (props) => {
  // const-definitions
}
const Content = props => {
 return (
    
      <>
      <Part name={props.part1} exercises={props.exercises1}/>
      <Part name={props.part2} exercises={props.exercises2}/>
      <Part name={props.part3} exercises={props.exercises3}/>
 
  </>
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
}
const Total = props => {

   
      return (
       <div>
      <h1>{course}</h1>
      <p>{part1} {exercises1} </p>
      <p>{part2} {exercises2} </p>
      <p>{part3} {exercises3} </p>
       <p>Total exercises {exercises1 + exercises2 + exercises3} </p>
    </div>
  )
}


export default App
