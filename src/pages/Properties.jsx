import { useState, useEffect } from 'react'
import PropertyCard from '../components/PropertyCard'

const Properties = () => {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProperties()
  }, [])

  const loadProperties = () => {
    const saved = localStorage.getItem('properties')
    if (saved) {
      setProperties(JSON.parse(saved))
    } else {
      // Default properties
      const defaultProperties = [
        { id: 1, title: 'Modern Luxury Villa', price: 850000, location: 'Beverly Hills, CA', beds: 5, baths: 4, area: 4200, image: 'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=800', badge: 'Featured' },
        { id: 2, title: 'Downtown Penthouse', price: 1250000, location: 'Manhattan, NY', beds: 3, baths: 3, area: 2800, image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800', badge: 'Luxury' },
        { id: 3, title: 'Suburban Family Home', price: 475000, location: 'Austin, TX', beds: 4, baths: 2, area: 3100, image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=800', badge: '' },
      ]
      setProperties(defaultProperties)
      localStorage.setItem('properties', JSON.stringify(defaultProperties))
    }
    setLoading(false)
  }

  return (
    <div className="bg-lightGray min-h-screen">
      <div className="bg-navy text-white py-16">
        <div className="container-custom">
          <h1 className="text-white mb-3">Browse Properties</h1>
          <p className="text-gray-300">Explore a wide range of residential and commercial properties tailored to your needs.</p>
        </div>
      </div>
      
      <div className="container-custom py-12">
        {loading ? (
          <div className="text-center py-20">Loading properties...</div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">Found {properties.length} properties</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Properties