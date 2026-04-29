import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
              <span className="text-gold font-bold text-xl">N</span>
            </div>
            <div>
              <span className="font-bold text-xl text-navy">UrbanNest</span>
              <span className="font-semibold text-xl text-gold">Realty</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-navy transition-colors">Home</Link>
            <Link to="/properties" className="text-gray-600 hover:text-navy transition-colors">Properties</Link>
            <Link to="/about" className="text-gray-600 hover:text-navy transition-colors">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-navy transition-colors">Contact</Link>
            <Link to="/contact" className="btn-primary text-sm py-2 px-5">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar