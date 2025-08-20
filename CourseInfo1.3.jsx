const Header = (props) => {
 return <h1>{props.course}</h1>
}

const Part = props => {
 return (
    <p>
        {props.name} {props.exercises}
    </p>
 )
}
const Content = props => {
    return (
     <>
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
 
  </>
  )
}
const Total = props => {
    return (
        <p>
            Number of exercises('')
            {props.exercises1 + props.exercises2 + props.exercises3}
        </p>
    )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
   
      return (
       <div>
      <Header course={course}/>
      <Content 
      part1={part[0].name} 
      part2={part[1].name} 
      part3={part[2].name} 
      exercises1={part[0].exercises}
      exercises2={part[1].exercises}
      exercises3={part[2].exercises} 
      />
    <Total 
    exercises1={part[0].exercises1} 
    exercises2={part[1].exercises2}
    exercises3={part[2].exercises3}
    />
    </div>
  )
}


export default App
