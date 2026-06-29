import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import TryOnPage from './pages/TryOnPage';

const App = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/try-on" element={<TryOnPage />} />
    </Routes>
  )
}

export default App