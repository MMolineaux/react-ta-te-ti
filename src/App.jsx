import './App.css'

const TURNS = {
  X: 'x',
  O: 'o',
}

const board = array(9).fill(null)

function App() {
  return (
    <main className="board">
      <h1>tateti</h1>
      <section className="game"></section>
    </main>
  )

}

export default App
