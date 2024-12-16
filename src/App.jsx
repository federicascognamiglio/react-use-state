import { useState } from 'react'
import languages from './data/languages'

function App() {

  return (
    <>
      <div className="container">
        <header className='pt-4'>
          <h1>Learn Web Development</h1>
        </header>
        <main className="main">
          <section className='pt-4'>
            {languages.map(curLanguage => <button key={curLanguage.id} className='btn btn-primary me-3'>{curLanguage.title}</button>)}
          </section>
        </main>
      </div>
    </>
  )
}

export default App
