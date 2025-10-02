const Header = (props) => {
        return (
            <header>
                <h1>{props.course}</h1>
            </header>
        )
    }

const Part = (props) => {
    return (
        <article>
            <h2>{props.part1} {props.exercises1}</h2>
            <h2>{props.part2} {props.exercises2}</h2>
            <h2>{props.part3} {props.exercises3}</h2>
        </article>
    )
}

const Content = (props) => {
    return (
        <article>
            <Part part1={props.part1} exercises1={props.exercises1}/>
            <Part part2={props.part2} exercises2={props.exercises2}/>
            <Part part3={props.part3} exercises3={props.exercises3}/>
        </article>
    )
}

const Total = (props) => {
    return (
        <footer>
            <h2>Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</h2>
        </footer>
    )
}

const App = () => {
    const course = 'Desenvolvimento de aplicação Half Stack'
    const part1 = 'Fundamentos da biblioteca React'
    const exercises1 = 10
    const part2 = 'Usando props para passar dados'
    const exercises2 = 7
    const part3 = 'Estado de um componente'
    const exercises3 = 14    

    return (
        <>
            <Header course={course} />
            <Content part1={part1} exercises1={exercises1}
            part2={part2} exercises2={exercises2}
            part3={part3} exercises3={exercises3}/>
            <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
        </>
    )
}

export default App