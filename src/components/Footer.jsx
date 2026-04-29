import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">UrbanNest Realty</h3>
            <p className="text-gray-300 text-sm">Find your dream property and invest with confidence.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/properties" className="text-gray-300 hover:text-gold transition-colors">Properties</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-300 hover:text-gold transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-gray-300 text-sm">Email: hello@urbannest.com</p>
            <p className="text-gray-300 text-sm">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-gray-300 text-sm">&copy; {currentYear} UrbanNest Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer