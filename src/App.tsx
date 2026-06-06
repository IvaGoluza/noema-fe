import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import HomePage from './pages/HomePage'
import RationalizationStep1Page from './pages/RationalizationStep1Page'
import RationalizationStep2Page from './pages/RationalizationStep2Page'
import RationalizationStep3Page from './pages/RationalizationStep3Page'
import RationalizationStep4Page from './pages/RationalizationStep4Page'
import RationalizationStep5Page from './pages/RationalizationStep5Page'
import RationalizationStep6Page from './pages/RationalizationStep6Page'
import RationalizationStep7Page from './pages/RationalizationStep7Page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/rationalization/1" element={<RationalizationStep1Page />} />
          <Route path="/rationalization/2" element={<RationalizationStep2Page />} />
          <Route path="/rationalization/3" element={<RationalizationStep3Page />} />
          <Route path="/rationalization/4" element={<RationalizationStep4Page />} />
          <Route path="/rationalization/5" element={<RationalizationStep5Page />} />
          <Route path="/rationalization/6" element={<RationalizationStep6Page />} />
          <Route path="/rationalization/7" element={<RationalizationStep7Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
