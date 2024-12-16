import { useState } from 'react'
import languages from './data/languages'

function App() {

  return (
    <>
      <div className="container">
        {/* Header */}
        <header className='pt-4'>
          <h1>Learn Web Development</h1>
        </header>
        {/* Main */}
        <main className="main">
          <div className='pt-4'>
            {/* Buttons */}
            {languages.map(curLanguage => <button key={curLanguage.id} className='btn btn-primary me-3'>{curLanguage.title}</button>)}
            {/* Cards */}
            {languages.map(curLanguage => <div key={curLanguage.id} className='card mt-5'>
              <div className="card-body">
                <h3>{curLanguage.title}</h3>
                <p className='card-text'>{curLanguage.description}</p>
              </div>
            </div>)}
          </div>
        </main>
        {/* Main/ */}
      </div>
    </>
  )
}

export default App
