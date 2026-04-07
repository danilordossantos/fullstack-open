import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Anecdotes = ({ anecdotes }) => <p>{anecdotes}</p>

const Vote = ({ anecdotes, vote }) => <strong>{anecdotes} has {vote} votes<br /></strong>

const MostVoted = ({ anecdotes, vote }) => <strong>{anecdotes} has {vote} votes<br /></strong>

const App = () => {
  const anecdotes = [
    'Se fazer algo, dói. Faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(8).fill(0))

  const handleVote = () => {
    const newVote = [...vote]
    newVote[selected] += 1
    setVote(newVote)
  }

  const handleNextAnecdote = () => {
    setSelected(selected + 1)
  }

  const mostVotedIndex = vote.indexOf(Math.max(...vote))

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <Anecdotes anecdotes={anecdotes[selected]} />
        <Vote vote={vote[selected]} />
        <Button handleClick={handleVote} text='vote' />
        <Button handleClick={handleNextAnecdote} text="next anecdote" />
        <br />
        <h2>Anecdote with most votes</h2>
        <Anecdotes anecdotes={anecdotes[mostVotedIndex]} />
        <MostVoted vote={vote[mostVotedIndex]} />
      </div>
    </>
  )
}

export default App