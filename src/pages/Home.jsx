import { Link } from 'react-router-dom'
import { propertyImages } from '../assets/images'

const Home = () => {
  const featuredProperties = [
    { id: 1, title: 'Modern Luxury Villa', price: 850000, location: 'Beverly Hills, CA', beds: 5, baths: 4, image: propertyImages.modernVilla, badge: 'Featured' },
    { id: 2, title: 'Downtown Penthouse', price: 1250000, location: 'Manhattan, NY', beds: 3, baths: 3, image: propertyImages.luxuryApartment, badge: 'Luxury' },
    { id: 3, title: 'Suburban Family Home', price: 475000, location: 'Austin, TX', beds: 4, baths: 2.5, image: propertyImages.suburbanHome },
  ]

  return (
    <div>
      {/* Luxury Hero Image Section - Reduced size at the start with only text */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Hero Content - Only Text, No Buttons */}
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Experience <span className="text-gold">Ultimate Luxury</span>
          </h1>
        </div>
      </div>
      
      {/* Top Hero Section with Gradient Background (Blue Strip) */}
      <div className="bg-gradient-to-r from-navy to-blue text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-white mb-4 text-3xl md:text-4xl">
            Find Your Dream <span className="text-gold">Luxury Property</span>
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Explore premium homes and high-return investment opportunities with UrbanNest Realty.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/properties" className="btn-primary">Browse Properties</Link>
            <Link to="/contact" className="bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/30 transition-all">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="container-custom py-16">
        <h2 className="text-center text-navy mb-12 text-3xl">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-soft hover:shadow-card transition-all">
            <h3 className="font-bold text-xl mb-2 text-navy">Property Buying</h3>
            <p className="text-gray-600">Find your perfect home with expert guidance</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-soft hover:shadow-card transition-all">
            <h3 className="font-bold text-xl mb-2 text-navy">Property Selling</h3>
            <p className="text-gray-600">Get the best value for your property</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-soft hover:shadow-card transition-all">
            <h3 className="font-bold text-xl mb-2 text-navy">Investment Consulting</h3>
            <p className="text-gray-600">High-return investment opportunities</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-soft hover:shadow-card transition-all">
            <h3 className="font-bold text-xl mb-2 text-navy">Rental Services</h3>
            <p className="text-gray-600">Property management solutions</p>
          </div>
        </div>
      </div>
      
      {/* Featured Properties */}
      <div className="bg-lightGray py-16">
        <div className="container-custom">
          <h2 className="text-center text-navy mb-12 text-3xl">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <div key={property.id} className="bg-white rounded-lg shadow-soft overflow-hidden hover:shadow-card transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  {property.badge && (
                    <span className="absolute top-3 right-3 bg-gold text-navy text-xs font-semibold px-2 py-1 rounded">
                      {property.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-navy">{property.title}</h3>
                    <span className="text-gold font-bold text-lg">${property.price.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{property.location}</p>
                  <p className="text-gray-500 text-sm mb-4">{property.beds} beds | {property.baths} baths</p>
                  <button className="w-full btn-secondary text-sm py-2">View Details</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/properties" className="btn-secondary inline-block">View All Properties</Link>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us */}
      <div className="container-custom py-16">
        <h2 className="text-center text-navy mb-12 text-3xl">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-gold text-4xl mb-2">✓</div>
            <h3 className="font-bold text-navy">Verified Listings</h3>
            <p className="text-gray-500 text-sm mt-2">Every property is thoroughly verified</p>
          </div>
          <div className="text-center">
            <div className="text-gold text-4xl mb-2">✓</div>
            <h3 className="font-bold text-navy">Trusted Experts</h3>
            <p className="text-gray-500 text-sm mt-2">Years of real estate experience</p>
          </div>
          <div className="text-center">
            <div className="text-gold text-4xl mb-2">✓</div>
            <h3 className="font-bold text-navy">High ROI Opportunities</h3>
            <p className="text-gray-500 text-sm mt-2">Maximize your investment returns</p>
          </div>
          <div className="text-center">
            <div className="text-gold text-4xl mb-2">✓</div>
            <h3 className="font-bold text-navy">Transparent Deals</h3>
            <p className="text-gray-500 text-sm mt-2">No hidden fees or surprises</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section - COMPLETELY REMOVED */}
      
    </div>
  )
}

export default Home