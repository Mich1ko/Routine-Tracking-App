import { useState } from 'react'
import Home from './pages/Home'

const initialRoutines = [
  { id: 1, name: 'Morning stretch', done: false },
  { id: 2, name: 'Read 20 pages',   done: false },
  { id: 3, name: 'Drink 8 glasses of water', done: false },
]

function App() {
  const [routines, setRoutines] = useState(initialRoutines)

  const dateLabel = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  })

  function handleToggle(id) {
    setRoutines(prev =>
      prev.map(r => r.id === id ? { ...r, done: !r.done } : r)
    )
  }

  function handleAdd(name) {
    setRoutines(prev => [
      ...prev,
      { id: Date.now(), name, done: false }
    ])
  }

  return (
    <div>
      <Home
        dateLabel={dateLabel}
        routines={routines}
        onToggle={handleToggle}
        onAdd={handleAdd}
        onAddRoutine={handleAddRoutine}
      />
    </div>
  )
}

export default App