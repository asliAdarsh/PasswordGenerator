import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/ MainLayout'
import Home from './pages/home'
import About from './pages/about'
import Tips from './pages/Tips'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
