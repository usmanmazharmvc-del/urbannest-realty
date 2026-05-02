import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Properties from './pages/Properties'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import AdminLogin from './pages/Admin/Login'
import AdminDashboard from './pages/Admin/Dashboard'

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)

  useEffect(() => {
    // Check if admin was previously logged in
    const loggedIn = localStorage.getItem('adminLoggedIn')
    if (loggedIn === 'true') {
      setIsAdminLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    setIsAdminLoggedIn(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route 
            path="/admin" 
            element={
              isAdminLoggedIn ? 
                <AdminDashboard onLogout={handleLogout} /> : 
                <AdminLogin onLogin={() => setIsAdminLoggedIn(true)} />
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App