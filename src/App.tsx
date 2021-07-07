import React from 'react'
import './App.scss'
import ArticlePreviewComponent from './components/ArticlePreviewComponent'
import Attribution from './components/Attribution'

function App() {
  return (
    <div className="App">
      <article>
        <ArticlePreviewComponent />
      </article>
      <Attribution />
    </div>
  )
}

export default App
