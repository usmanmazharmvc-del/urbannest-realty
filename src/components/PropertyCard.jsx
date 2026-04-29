import { MapPin, ArrowRight } from 'lucide-react'

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-soft card-hover group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {property.badge && (
          <span className="absolute top-3 right-3 bg-gold text-navy text-xs font-semibold px-2 py-1 rounded">
            {property.badge}
          </span>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading font-bold text-xl text-navy">{property.title}</h3>
          <span className="text-gold font-bold text-lg">${property.price.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
          <MapPin size={14} />
          <span>{property.location}</span>
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-600 mb-4 pb-3 border-b border-gray-100">
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.area} sqft</span>
        </div>
        
        <button className="w-full flex items-center justify-center gap-2 py-2 border border-navy text-navy rounded-lg font-semibold hover:bg-navy hover:text-white transition-all duration-300">
          View Details <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}

export default PropertyCard
