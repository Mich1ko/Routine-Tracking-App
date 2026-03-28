import { useState } from 'react'
import StatCard from '../components/StatCard'

const total = routines.length
const doneCount = routines.filter((r) => r.done).length
const percent = total === 0 ? 0 : Math.round((doneCount / total) * 100)


function Home({ dateLabel, onAddRoutine, routines }) {
  return (
    // ✅ Fixed structure
<section>
  <header>
    <h1>Good Morning! 👋</h1>
    <p>Ready to start your day?</p>
  </header>

  <p>{dateLabel}</p>
  <button type="button" onClick={onAddRoutine}>
    Add Routine
  </button>

  <div className="stat-grid">
    <StatCard
      title="Daily Summary"
      value={`${doneCount} of ${total} done (${percent}%)`}
    />
    <StatCard
      title="Streak Preview"
      value="0 days — no streak yet"
    />
  </div>
</section>
  )
}

export default Home