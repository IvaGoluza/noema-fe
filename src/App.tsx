import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RationalizationStep1Page from './pages/RationalizationStep1Page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rationalization/1" element={<RationalizationStep1Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
