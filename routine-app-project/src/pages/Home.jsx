function Home() {
  return (
    <section>
      <header>
        <h1>Good Morning! User</h1>
        <p>Ready to start your day?</p>
      <div>
        <p>{dateLabel}</p>
      </div>
      <button type="button" onClick={onAddRoutine}>
        Add Routine
      </button>
     </header>
    </section>
  )
}

export default Home