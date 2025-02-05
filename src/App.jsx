import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import PageMeConheca from './pages/PageMeConheca'
import PageCardapio from './pages/PageCardapio'
import PageContato from './pages/PageContato'
import PageGaleria from './pages/PageGaleria'
import ConfirmedMessage from './pages/confirmedMessage'


const App = () => {
   
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagemeconheca" element={<PageMeConheca />} />
        <Route path="/pagecardapio" element={<PageCardapio />} />
        <Route path="/pagecontato" element={<PageContato />} />
        <Route path="/pagegaleria" element={<PageGaleria />} />
        <Route path="/confirmedMessage" element={<ConfirmedMessage />} />
      </Routes>
    </Router>
  )
}

export default App
