import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './layout/Footer'
import Header from './layout/Header'

const App = () => {


  return (
    <Router >
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
