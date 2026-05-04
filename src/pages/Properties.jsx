import { useState, useEffect } from 'react'
import { getProperties } from '../services/propertyService'
import PropertyCard from '../components/PropertyCard'

const Properties = () => {
  const [allProperties, setAllProperties] = useState([])
  const [displayedProperties, setDisplayedProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState('all')

  useEffect(() => {
    loadAllProperties()
  }, [])

  useEffect(() => {
    filterProperties()
  }, [searchTerm, priceRange, allProperties])

  const loadAllProperties = () => {
    setLoading(true)
    const properties = getProperties()
    setAllProperties(properties)
    setDisplayedProperties(properties)
    setLoading(false)
  }

  const filterProperties = () => {
    let filtered = [...allProperties]
    
    if (searchTerm) {
      filtered = filtered.filter(property => 
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    if (priceRange !== 'all') {
      filtered = filtered.filter(property => {
        if (priceRange === 'under500k') return property.price < 500000
        if (priceRange === '500k-1m') return property.price >= 500000 && property.price <= 1000000
        if (priceRange === 'over1m') return property.price > 1000000
        return true
      })
    }
    
    setDisplayedProperties(filtered)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
          <p className="mt-4 text-gray-500">Loading properties...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-lightGray min-h-screen">
      {/* Hero Banner */}
      <div className="bg-navy text-white py-16">
        <div className="container-custom">
          <h1 className="text-white mb-3 text-4xl font-bold">Browse All Properties</h1>
          <p className="text-gray-300 text-lg">
            Showing {displayedProperties.length} of {allProperties.length} properties
          </p>
          {/* RESET BUTTON REMOVED */}
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search by title or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
              >
                <option value="all">All Prices</option>
                <option value="under500k">Under $500,000</option>
                <option value="500k-1m">$500,000 - $1,000,000</option>
                <option value="over1m">Over $1,000,000</option>
              </select>
            </div>
          </div>
          
          {(searchTerm || priceRange !== 'all') && (
            <div className="mt-4 text-right">
              <button 
                onClick={() => {
                  setSearchTerm('')
                  setPriceRange('all')
                }}
                className="text-gold hover:underline text-sm"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Properties Grid */}
        {displayedProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl">
            <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('')
                setPriceRange('all')
              }}
              className="mt-4 text-gold hover:underline"
            >
              Clear filters and view all properties
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Properties