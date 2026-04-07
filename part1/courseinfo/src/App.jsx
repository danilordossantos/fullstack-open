const Header = (props) => {
    return (
        <header>
            <h1>{props.course}</h1>
        </header>
    )
}

const Content = (props) => {
    const Part = (props) => {
        return (
            <article>
                <h2>{props.name}: {props.exercises}</h2>
            </article>
        )
    }
    return (
        <article>
            <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
            <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
            <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
        </article>
    )
}

const Total = (props) => {
    return (
        <footer>
            <h2>Number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</h2>
        </footer>
    )
}

const App = () => {
    const course = {
        name: 'Desenvolvimento de aplicação Half Stack',
        parts: [
            {
                name: 'Fundamentos da biblioteca React',
                exercises: 10
            },
            {
                name: 'Usando props para passar dados',
                exercises: 7
            },
            {
                name: 'Estado de um componente',
                exercises: 14
            }
        ]
    }

    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

export default App

