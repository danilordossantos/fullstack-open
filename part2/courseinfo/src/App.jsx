<<<<<<< HEAD
import Courses from './components/Courses'

const Header = ({header}) => {
  return (
    <h1>{header}</h1>
  )
}

const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      id: 2,
      name: 'Node.js',
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
  return (
    <div>      
      <Header header='Web development curriculum' />
      <Courses courses={courses} />
    </div>
=======
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
>>>>>>> 94d7b88d8d6c2cdc86d82abbebdd4a92b218c578
  )
}

export default App