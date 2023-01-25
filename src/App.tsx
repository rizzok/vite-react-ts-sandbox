import TextField from './TextField'

function App() {
  return (
    <div>
      <h1>Vite React TS</h1>
      <TextField text="hello" person={{ firstName: 'John', lastName: 'Doe' }} />
    </div>
  )
}

export default App
