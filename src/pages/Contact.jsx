const Contact = () => {
  return (
    <div>
      <div className="bg-navy text-white py-16">
        <div className="container-custom">
          <h1 className="text-white mb-3">Get in Touch</h1>
          <p className="text-gray-300">Our team is here to guide you through every step of your real estate journey.</p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-soft p-8">
            <h2 className="text-navy mb-6">Send us a Message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg p-2" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg p-2" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full border border-gray-300 rounded-lg p-2"></textarea>
              </div>
              <button className="btn-primary w-full">Send Message</button>
            </form>
          </div>
          
          <div>
            <h2 className="text-navy mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-gold">📍</span>
                <span>123 Realty Street, Downtown, City</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gold">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gold">✉️</span>
                <span>hello@urbannest.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact