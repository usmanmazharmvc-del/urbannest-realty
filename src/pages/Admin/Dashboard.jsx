import { useState, useEffect } from 'react'
import { 
  Plus, Edit, Trash2, Home, DollarSign, MapPin, 
  Bed, Bath, Square, LogOut, X, Save, Image as ImageIcon
} from 'lucide-react'

const AdminDashboard = ({ onLogout }) => {
  const [properties, setProperties] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingProperty, setEditingProperty] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    beds: '',
    baths: '',
    area: '',
    image: '',
    badge: ''
  })

  // Load properties from localStorage (for demo)
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
  }

  const saveProperties = (newProperties) => {
    setProperties(newProperties)
    localStorage.setItem('properties', JSON.stringify(newProperties))
  }

  const handleAddProperty = (e) => {
    e.preventDefault()
    const newId = Math.max(...properties.map(p => p.id), 0) + 1
    const newProperty = {
      id: newId,
      ...formData,
      price: parseInt(formData.price),
      beds: parseInt(formData.beds),
      baths: parseInt(formData.baths),
      area: parseInt(formData.area)
    }
    saveProperties([...properties, newProperty])
    resetForm()
  }

  const handleEditProperty = (property) => {
    setEditingProperty(property)
    setFormData({
      title: property.title,
      price: property.price,
      location: property.location,
      beds: property.beds,
      baths: property.baths,
      area: property.area,
      image: property.image,
      badge: property.badge || ''
    })
    setShowForm(true)
  }

  const handleUpdateProperty = (e) => {
    e.preventDefault()
    const updatedProperties = properties.map(p => 
      p.id === editingProperty.id 
        ? { 
            ...p, 
            ...formData, 
            price: parseInt(formData.price),
            beds: parseInt(formData.beds),
            baths: parseInt(formData.baths),
            area: parseInt(formData.area)
          }
        : p
    )
    saveProperties(updatedProperties)
    resetForm()
  }

  const handleDeleteProperty = (id) => {
    if (confirm('Are you sure you want to delete this property?')) {
      saveProperties(properties.filter(p => p.id !== id))
    }
  }

  const resetForm = () => {
    setShowForm(false)
    setEditingProperty(null)
    setFormData({
      title: '', price: '', location: '', beds: '', baths: '', area: '', image: '', badge: ''
    })
  }

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    localStorage.removeItem('adminEmail')
    onLogout()
  }

  // Stats
  const totalProperties = properties.length
  const totalValue = properties.reduce((sum, p) => sum + p.price, 0)
  const avgPrice = totalProperties > 0 ? totalValue / totalProperties : 0

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-navy text-white shadow-lg">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Property Management Dashboard</h1>
              <p className="text-gray-300 text-sm">Manage your real estate listings</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm">Admin: {localStorage.getItem('adminEmail')}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-all"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Properties</p>
                <p className="text-3xl font-bold text-navy">{totalProperties}</p>
              </div>
              <Home className="text-gold" size={40} />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Value</p>
                <p className="text-3xl font-bold text-navy">${(totalValue / 1000000).toFixed(1)}M</p>
              </div>
              <DollarSign className="text-gold" size={40} />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Average Price</p>
                <p className="text-3xl font-bold text-navy">${(avgPrice / 1000).toFixed(0)}K</p>
              </div>
              <MapPin className="text-gold" size={40} />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Avg. Bedrooms</p>
                <p className="text-3xl font-bold text-navy">
                  {(properties.reduce((sum, p) => sum + p.beds, 0) / totalProperties || 0).toFixed(1)}
                </p>
              </div>
              <Bed className="text-gold" size={40} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom pb-12">
        {/* Add Property Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowForm(true)}
            className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2"
          >
            <Plus size={18} />
            Add New Property
          </button>
        </div>

        {/* Property Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold text-navy">
                  {editingProperty ? 'Edit Property' : 'Add New Property'}
                </h2>
                <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={editingProperty ? handleUpdateProperty : handleAddProperty} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">Property Title *</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gold"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Price ($) *</label>
                    <input
                      type="number"
                      required
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gold"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Location *</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gold"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Bedrooms</label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gold"
                      value={formData.beds}
                      onChange={(e) => setFormData({...formData, beds: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Bathrooms</label>
                    <input
                      type="number"
                      step="0.5"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gold"
                      value={formData.baths}
                      onChange={(e) => setFormData({...formData, baths: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Area (sqft)</label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gold"
                      value={formData.area}
                      onChange={(e) => setFormData({...formData, area: e.target.value})}
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">Image URL</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gold"
                      value={formData.image}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">Badge (Optional)</label>
                    <select
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gold"
                      value={formData.badge}
                      onChange={(e) => setFormData({...formData, badge: e.target.value})}
                    >
                      <option value="">None</option>
                      <option value="Featured">Featured</option>
                      <option value="Luxury">Luxury</option>
                      <option value="Investment">Investment</option>
                      <option value="Premium">Premium</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 mt-6 pt-4 border-t">
                  <button
                    type="submit"
                    className="flex-1 bg-gold text-navy py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <Save size={18} />
                    {editingProperty ? 'Update Property' : 'Save Property'}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Properties Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-left">Location</th>
                  <th className="p-4 text-left">Beds/Baths</th>
                  <th className="p-4 text-left">Badge</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {properties.map(property => (
                  <tr key={property.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                        {property.image ? (
                          <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                        ) : (
                          <ImageIcon className="text-gray-400 m-3" size={24} />
                        )}
                      </div>
                    </td>
                    <td className="p-4 font-semibold">{property.title}</td>
                    <td className="p-4 text-gold font-bold">${property.price.toLocaleString()}</td>
                    <td className="p-4 text-gray-600">{property.location}</td>
                    <td className="p-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Bed size={14} /> {property.beds}
                        <Bath size={14} className="ml-2" /> {property.baths}
                        <Square size={14} className="ml-2" /> {property.area}
                      </div>
                    </td>
                    <td className="p-4">
                      {property.badge && (
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          property.badge === 'Featured' ? 'bg-gold/20 text-gold' :
                          property.badge === 'Luxury' ? 'bg-purple-100 text-purple-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {property.badge}
                        </span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleEditProperty(property)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteProperty(property.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {properties.length === 0 && (
            <div className="text-center py-12">
              <Home className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-500">No properties yet. Click "Add New Property" to get started.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard