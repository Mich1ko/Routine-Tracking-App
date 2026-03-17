import './App.css'
import Home from './pages/Home'

function App() {
  const today = new Date()
  const dataLabel = today.toLocaleDateString('en-US', { 
     weekday: 'long',
     month: 'long',
     day: 'numeric',
     year: 'numeric'
    })

  const handleAddRoutine = () => {
    alert('!Add routine flow coming soon!')
  }
  return (
    <div className="app-container">
      <Home dateLabel={dateLabel} onAddRoutine={handleAddRoutine}></Home>
    </div>
  )
}
export default App
