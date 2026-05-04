import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/properties', name: 'Properties' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section - Using inline SVG (no external file needed) */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Logo Icon */}
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-br from-navy to-blue rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 10L12 2L21 10" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 9V20H19V9" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="9" y="14" width="6" height="6" rx="1" stroke="#D4AF37" strokeWidth="1.5" fill="none"/>
                  <circle cx="7.5" cy="12.5" r="1.5" fill="#D4AF37"/>
                  <circle cx="16.5" cy="12.5" r="1.5" fill="#D4AF37"/>
                </svg>
              </div>
              <div className="absolute -inset-0.5 bg-gold/30 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            {/* Logo Text */}
            <div className="leading-tight">
              <div className="flex items-baseline gap-0">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-navy">UrbanNest</span>
                <span className="font-heading font-bold text-2xl text-gold ml-1">Realty</span>
              </div>
              <div className="flex gap-1 text-[10px] tracking-wider">
                <span className="text-navy font-semibold">FIND</span>
                <span className="text-gold">•</span>
                <span className="text-navy font-semibold">INVEST</span>
                <span className="text-gold">•</span>
                <span className="text-navy font-semibold">GROW</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-gold border-b-2 border-gold pb-1'
                    : 'text-gray-600 hover:text-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-sm py-2 px-5">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-3 px-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'bg-gold/10 text-gold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="font-medium">{link.name}</span>
                <ChevronRight size={16} className="ml-auto" />
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary block text-center mt-4"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar