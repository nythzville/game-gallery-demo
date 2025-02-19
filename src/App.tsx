import './App.css'
import { Route, Routes } from 'react-router'
import { GameDetailsPage, HomePage } from './pages'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/games/" element={<HomePage />} />
      <Route path="/games/:gameId" element={<GameDetailsPage />} />
    </Routes>
  )
}

export default App
