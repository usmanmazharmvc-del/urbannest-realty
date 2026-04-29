import { propertyImages } from '../assets/images'

const Properties = () => {
  const properties = [
    { 
      id: 1, 
      title: 'Modern Luxury Villa', 
      price: 850000, 
      location: 'Beverly Hills, CA', 
      beds: 5, 
      baths: 4,
      image: propertyImages.modernVilla,
      badge: 'Featured'
    },
    { 
      id: 2, 
      title: 'Downtown Penthouse', 
      price: 1250000, 
      location: 'Manhattan, NY', 
      beds: 3, 
      baths: 3,
      image: propertyImages.luxuryApartment,
      badge: 'Luxury'
    },
    { 
      id: 3, 
      title: 'Suburban Family Home', 
      price: 475000, 
      location: 'Austin, TX', 
      beds: 4, 
      baths: 2.5,
      image: propertyImages.suburbanHome,
      badge: null
    },
    { 
      id: 4, 
      title: 'Investment Plot', 
      price: 250000, 
      location: 'Phoenix, AZ', 
      beds: 0, 
      baths: 0,
      image: propertyImages.investmentPlot,
      badge: 'Investment'
    },
    { 
      id: 5, 
      title: 'Beachfront House', 
      price: 1950000, 
      location: 'Malibu, CA', 
      beds: 4, 
      baths: 3.5,
      image: propertyImages.beachHouse,
      badge: 'Premium'
    },
    { 
      id: 6, 
      title: 'Downtown Condo', 
      price: 425000, 
      location: 'Chicago, IL', 
      beds: 2, 
      baths: 2,
      image: propertyImages.downtownCondo,
      badge: null
    },
  ]

  return (
    <div>
      <div className="bg-navy text-white py-16">
        <div className="container-custom">
          <h1 className="text-white mb-3">Browse Properties</h1>
          <p className="text-gray-300">Explore a wide range of residential and commercial properties tailored to your needs.</p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
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
      </div>
    </div>
  )
}

export default Properties