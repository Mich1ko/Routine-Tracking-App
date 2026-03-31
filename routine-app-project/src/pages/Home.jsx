import { useState } from 'react'
import StatCard from '../components/StatCard'

function Home({ dateLabel, onAdd, onToggle, routines }) {
  const [newRoutine, setNewRoutine] = useState('')
  const total = routines.length
  const doneCount = routines.filter((r) => r.done).length
  const percent = total === 0 ? 0 : Math.round((doneCount / total) * 100)

  const handleSubmit = () => {
    onAdd(newRoutine)
    setNewRoutine('')
  }

  return (
    <section>
      <header>
        <h1>Good Morning!</h1>
        <p>Ready to start your day?</p>
      </header>

      <p>{dateLabel}</p>

      <div className="stat-grid">
        <StatCard
          title="Daily Summary"
          value={`${doneCount} of ${total} done (${percent}%)`}
        />
        <StatCard title="Streak Preview" value="0 days - no streak yet" />
      </div>

      <div className="routine-form">
        <input
          value={newRoutine}
          onChange={(event) => setNewRoutine(event.target.value)}
          placeholder="Read 10 pages"
        />
        <button type="button" onClick={handleSubmit}>
          Add Routine
        </button>
      </div>

      <ul className="routine-list">
        {routines.map((routine) => (
          <li key={routine.id} className="routine-item">
            <label>
              <input
                type="checkbox"
                checked={routine.done}
                onChange={() => onToggle(routine.id)}
              />
              {routine.name}
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Home