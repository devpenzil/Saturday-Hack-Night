import React from 'react'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">

      <Router>
        <Route path="/" exact>
        <HomePage />
        </Route>
        <Route path="/profile">
        <ProfilePage />
        </Route>
      </Router>
      
      
    </div>
  )
}

export default App
