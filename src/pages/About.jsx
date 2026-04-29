import { Target, Eye, Users, TrendingUp, Award, Shield, Clock, Heart } from 'lucide-react'

const About = () => {
  const stats = [
    { value: '500+', label: 'Happy Clients', icon: Users, description: 'Trusted by families and investors' },
    { value: '$2B+', label: 'Property Value', icon: TrendingUp, description: 'Total transactions completed' },
    { value: '98%', label: 'Satisfaction Rate', icon: Award, description: 'Client satisfaction score' },
    { value: '15+', label: 'Years Experience', icon: Clock, description: 'Industry expertise' },
  ]

  const values = [
    { 
      icon: Shield, 
      title: 'Trust & Transparency', 
      description: 'We believe in honest dealings and clear communication at every step of your real estate journey.',
      details: 'No hidden fees, no surprises—just transparent, ethical service.'
    },
    { 
      icon: Heart, 
      title: 'Client First', 
      description: 'Your goals and needs drive everything we do. Your success is our success.',
      details: 'Personalized solutions tailored to your unique situation.'
    },
    { 
      icon: TrendingUp, 
      title: 'Market Expertise', 
      description: 'Deep local knowledge combined with data-driven insights for optimal results.',
      details: 'We analyze market trends to maximize your investment.'
    },
    { 
      icon: Users, 
      title: 'Long-term Partnership', 
      description: 'We build lasting relationships beyond the transaction, supporting you for years to come.',
      details: 'From first-time buyers to seasoned investors, we\'re with you every step.'
    },
  ]

  const team = [
    { name: 'Sarah Johnson', role: 'Founder & CEO', experience: '20+ years in real estate', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'Michael Chen', role: 'Lead Investment Advisor', experience: 'Former Wall Street analyst', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Emily Rodriguez', role: 'Senior Property Consultant', experience: 'Certified luxury home specialist', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-navy to-blue text-white py-20">
        <div className="container-custom">
          <h1 className="text-white mb-4 text-4xl md:text-5xl">About UrbanNest Realty</h1>
          <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
            Committed to delivering trusted and transparent real estate solutions. 
            We help clients find homes and investment opportunities that secure their future.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-navy mb-4 text-3xl">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2010, UrbanNest Realty emerged from a simple yet powerful vision: 
              to revolutionize the real estate experience by putting clients first. What started 
              as a small team of passionate real estate professionals has grown into one of the 
              most trusted names in residential and investment properties.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We understand that buying a home or making an investment is one of the most significant 
              decisions in life. That's why we've built a team of dedicated experts who combine deep 
              market knowledge with personalized, white-glove service. Every client receives the 
              attention and guidance they deserve.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, UrbanNest Realty proudly serves hundreds of satisfied clients across the country, 
              helping them find their dream homes and build wealth through smart real estate investments. 
              Our commitment to verified listings, transparent deals, and long-term relationships has 
              earned us a 98% client satisfaction rate and countless referrals.
            </p>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="UrbanNest Realty Team"
              className="rounded-2xl shadow-card w-full h-full object-cover max-h-96"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-navy/5 to-transparent p-8 rounded-2xl border-2 border-gold/30 hover:shadow-card transition-all">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
              <Target className="text-gold" size={32} />
            </div>
            <h3 className="font-heading font-bold text-2xl text-navy mb-3">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To simplify property decisions and empower our clients with expert guidance, 
              verified properties, and transparent processes that lead to successful outcomes.
            </p>
            <p className="text-gray-500 mt-3">
              We strive to make real estate accessible, understandable, and profitable for everyone 
              — from first-time homebuyers to experienced investors.
            </p>
          </div>
          <div className="bg-gradient-to-br from-navy/5 to-transparent p-8 rounded-2xl border-2 border-gold/30 hover:shadow-card transition-all">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
              <Eye className="text-gold" size={32} />
            </div>
            <h3 className="font-heading font-bold text-2xl text-navy mb-3">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become the most trusted real estate partner, known for integrity, expertise, 
              and delivering exceptional value to every client we serve.
            </p>
            <p className="text-gray-500 mt-3">
              We envision a future where every property transaction is seamless, transparent, 
              and beneficial for all parties involved.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <h2 className="text-center text-navy mb-12 text-3xl">Our Impact by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-card transition-all">
                <stat.icon className="mx-auto text-gold mb-3" size={32} />
                <p className="font-heading font-bold text-3xl text-navy">{stat.value}</p>
                <p className="font-semibold text-gray-700 mt-1">{stat.label}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-center text-navy mb-12 text-3xl">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-soft hover:shadow-card transition-all group">
                <value.icon className="text-gold mb-4" size={32} />
                <h4 className="font-heading font-bold text-navy text-lg mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{value.description}</p>
                <p className="text-gray-400 text-xs italic">{value.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-lightGray rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-center text-navy mb-8 text-3xl">Why Choose UrbanNest Realty?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <div className="text-gold text-2xl">✓</div>
              <div>
                <h4 className="font-bold text-navy mb-1">Verified Listings Only</h4>
                <p className="text-gray-600 text-sm">Every property is thoroughly vetted for accuracy and legitimacy.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-gold text-2xl">✓</div>
              <div>
                <h4 className="font-bold text-navy mb-1">Expert Market Guidance</h4>
                <p className="text-gray-600 text-sm">Data-driven insights from industry veterans.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-gold text-2xl">✓</div>
              <div>
                <h4 className="font-bold text-navy mb-1">High ROI Opportunities</h4>
                <p className="text-gray-600 text-sm">Access to exclusive investment properties.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-gold text-2xl">✓</div>
              <div>
                <h4 className="font-bold text-navy mb-1">100% Transparent Deals</h4>
                <p className="text-gray-600 text-sm">No hidden fees, no surprises—just honest service.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-gold text-2xl">✓</div>
              <div>
                <h4 className="font-bold text-navy mb-1">Personalized Service</h4>
                <p className="text-gray-600 text-sm">Tailored solutions for your unique needs.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-gold text-2xl">✓</div>
              <div>
                <h4 className="font-bold text-navy mb-1">End-to-End Support</h4>
                <p className="text-gray-600 text-sm">From search to closing, we're with you every step.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Team */}
        <div>
          <h2 className="text-center text-navy mb-12 text-3xl">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-xl shadow-soft p-6 hover:shadow-card transition-all">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gold"
                />
                <h4 className="font-heading font-bold text-navy text-xl mb-1">{member.name}</h4>
                <p className="text-gold font-semibold mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About