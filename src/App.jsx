import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ConfirmedMessage from './pages/MessageConfirmed'


const App = () => {
   
  return (
    <Router >

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirmedMessage" element={<ConfirmedMessage />} />
      </Routes>

    </Router>
  )
}

export default App
