const Name = ({ name }) => (<h2>{name}</h2>)

const Courses = (props) => {
  return (
    props.courses.map(course => (<Course key={course.id} course={course} />))
  )
}

const Part = ({ part }) => (<p>{part.name} {part.exercises}</p>)

const Content = ({ parts }) => (
  <article>
    {parts.map(part => (<Part key={part.id} part={part} />))}
  </article>
)

const Total = ({ parts }) => {
  const total = parts.reduce((acc, item) => acc + item.exercises, 0)
  return (
    <article>
      <p>total of {total} exercises</p>
    </article>
  )
}

const Course = ({ course }) => (
  <article>
    <Name name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </article>
)

export default Courses