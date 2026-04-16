const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return (
    <div>
      <Course course={course} />      
    </div>

  )
}

const Course = (props) => {
  return (
    <article>      
      <Header course={props.course} />
      <Content course={props.course}/>
    </article>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  return (
    <article>
      {props.course.parts.map(part => (<Part key={part.id}part={part}/>))}
    </article>
  )
}

const Part = (props) => {
  return (
    <article>
      <p>{props.part.name} {props.part.exercises}</p>
    </article>
  )
}

export default App