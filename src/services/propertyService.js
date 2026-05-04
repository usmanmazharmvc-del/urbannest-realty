// Central property service - Single source of truth for all properties

// Default properties (only used when localStorage is empty)
const DEFAULT_PROPERTIES = [
  { 
    id: 1, 
    title: 'Modern Luxury Villa', 
    price: 850000, 
    location: 'Beverly Hills, CA', 
    beds: 5, 
    baths: 4, 
    area: 4200, 
    image: 'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=800', 
    badge: 'Featured',
    type: 'villa'
  },
  { 
    id: 2, 
    title: 'Downtown Penthouse', 
    price: 1250000, 
    location: 'Manhattan, NY', 
    beds: 3, 
    baths: 3, 
    area: 2800, 
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800', 
    badge: 'Luxury',
    type: 'apartment'
  },
  { 
    id: 3, 
    title: 'Suburban Family Home', 
    price: 475000, 
    location: 'Austin, TX', 
    beds: 4, 
    baths: 2, 
    area: 3100, 
    image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=800', 
    badge: '',
    type: 'house'
  },
  { 
    id: 4, 
    title: 'Beachfront Paradise', 
    price: 1950000, 
    location: 'Malibu, CA', 
    beds: 5, 
    baths: 4, 
    area: 4500, 
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?w=800', 
    badge: 'Premium',
    type: 'house'
  },
  { 
    id: 5, 
    title: 'Investment Plot', 
    price: 250000, 
    location: 'Phoenix, AZ', 
    beds: 0, 
    baths: 0, 
    area: 10000, 
    image: 'https://images.pexels.com/photos/8963357/pexels-photo-8963357.jpeg.jpg?w=800', 
    badge: 'Investment',
    type: 'land'
  },
  { 
    id: 6, 
    title: 'Modern Downtown Condo', 
    price: 425000, 
    location: 'Chicago, IL', 
    beds: 2, 
    baths: 2, 
    area: 1200, 
    image: 'https://images.pexels.com/photos/8963357/pexels-photo-8963357.jpeg.jpg?w=800', 
    badge: '',
    type: 'apartment'
  },
  { 
    id: 7, 
    title: 'Hillside Estate', 
    price: 3200000, 
    location: 'Aspen, CO', 
    beds: 6, 
    baths: 5, 
    area: 6200, 
    image: 'https://images.pexels.com/photos/8963357/pexels-photo-8963357.jpeg.jpg?w=800', 
    badge: 'Luxury',
    type: 'villa'
  },
]

// Get all properties
export const getProperties = () => {
  const saved = localStorage.getItem('properties')
  if (saved) {
    return JSON.parse(saved)
  } else {
    // Initialize localStorage with default properties
    localStorage.setItem('properties', JSON.stringify(DEFAULT_PROPERTIES))
    return DEFAULT_PROPERTIES
  }
}

// Get featured properties (for home page - first 6)
export const getFeaturedProperties = () => {
  const allProperties = getProperties()
  return allProperties.slice(0, 6) // Show first 6 properties on home page
}

// Get single property by ID
export const getPropertyById = (id) => {
  const properties = getProperties()
  return properties.find(p => p.id === parseInt(id))
}

// Add new property
export const addProperty = (property) => {
  const properties = getProperties()
  const newId = Math.max(...properties.map(p => p.id), 0) + 1
  const newProperty = { ...property, id: newId }
  const updatedProperties = [...properties, newProperty]
  localStorage.setItem('properties', JSON.stringify(updatedProperties))
  return newProperty
}

// Update existing property
export const updateProperty = (id, updatedData) => {
  const properties = getProperties()
  const updatedProperties = properties.map(p => 
    p.id === parseInt(id) ? { ...p, ...updatedData } : p
  )
  localStorage.setItem('properties', JSON.stringify(updatedProperties))
  return updatedProperties.find(p => p.id === parseInt(id))
}

// Delete property
export const deleteProperty = (id) => {
  const properties = getProperties()
  const updatedProperties = properties.filter(p => p.id !== parseInt(id))
  localStorage.setItem('properties', JSON.stringify(updatedProperties))
  return updatedProperties
}