import { BrowserRouter, Routes, Route } from 'react-router'
import LandingPage from './pages/landing'
import AppRouter from './AppRouter'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<AppRouter />} />
      </Routes>
    </BrowserRouter>
  )
}
