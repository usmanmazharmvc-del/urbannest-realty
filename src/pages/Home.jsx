import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedProperties } from '../services/propertyService'
import PropertyCard from '../components/PropertyCard'

const Home = () => {
  const [featuredProperties, setFeaturedProperties] = useState([])

  useEffect(() => {
    // Load properties from central service
    const properties = getFeaturedProperties()
    setFeaturedProperties(properties)
  }, [])

  return (
    <div>
      {/* Luxury Hero Image Section - TOP OF PAGE */}
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
            <p className="text-lg md:text-xl lg:text-xl text-gray-150 max-w-3xl mx-auto">
             Our exclusive collection of premium estates and luxury residences.
            </p>         
          </h1>
        </div>
      </div>
      
      {/* Blue Strip Section */}
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
      
      {/* Featured Properties Section */}
      <div className="bg-lightGray py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-navy text-3xl">Featured Properties</h2>
            <Link to="/properties" className="text-gold hover:underline">View All →</Link>
          </div>
          
          {featuredProperties.length === 0 ? (
            <div className="text-center py-10">Loading properties...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.slice(0, 6).map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
          
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
    </div>
  )
}

export default Home