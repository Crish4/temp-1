import Contact from '@/components/Contact';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Globe, Users } from 'lucide-react';

export default function ContactPage() {
  const officeLocations = [
    {
      city: 'New York',
      country: 'United States',
      address: '123 Immigration Street, Suite 456',
      zipCode: 'New York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'newyork@visaexpert.com',
      manager: 'Sarah Johnson',
      managerTitle: 'Managing Director',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      specialties: ['US Immigration', 'Student Visas', 'Work Permits'],
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop'
    },
    {
      city: 'Los Angeles',
      country: 'United States',
      address: '789 Visa Boulevard, Floor 12',
      zipCode: 'Los Angeles, CA 90210',
      phone: '+1 (555) 234-5678',
      email: 'losangeles@visaexpert.com',
      manager: 'Michael Chen',
      managerTitle: 'Senior Immigration Consultant',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      specialties: ['Business Visas', 'Investment Immigration', 'Family Reunification'],
      image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=400&h=300&fit=crop'
    },
    {
      city: 'Toronto',
      country: 'Canada',
      address: '456 Immigration Ave, Suite 789',
      zipCode: 'Toronto, ON M5V 3A8',
      phone: '+1 (416) 345-6789',
      email: 'toronto@visaexpert.com',
      manager: 'Emma Wilson',
      managerTitle: 'Family Immigration Specialist',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
      specialties: ['Canadian Immigration', 'Express Entry', 'Provincial Nominee Program'],
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '321 Visa Lane, Office 101',
      zipCode: 'London SW1A 1AA',
      phone: '+44 20 1234 5678',
      email: 'london@visaexpert.com',
      manager: 'James Smith',
      managerTitle: 'UK Immigration Director',
      hours: 'Mon-Fri: 9:00 AM - 5:30 PM',
      specialties: ['UK Immigration', 'Skilled Worker Visas', 'Student Visas'],
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop'
    },
    {
      city: 'Sydney',
      country: 'Australia',
      address: '654 Migration Street, Level 8',
      zipCode: 'Sydney NSW 2000',
      phone: '+61 2 9876 5432',
      email: 'sydney@visaexpert.com',
      manager: 'Lisa Anderson',
      managerTitle: 'Australian Immigration Consultant',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
      specialties: ['Australian Immigration', 'Skilled Migration', 'Partner Visas'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      address: '987 Business Bay, Tower A, Floor 15',
      zipCode: 'Dubai, UAE',
      phone: '+971 4 123 4567',
      email: 'dubai@visaexpert.com',
      manager: 'Ahmed Hassan',
      managerTitle: 'Middle East Regional Manager',
      hours: 'Sun-Thu: 9:00 AM - 6:00 PM',
      specialties: ['GCC Immigration', 'Business Setup', 'Investment Visas'],
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our immigration experts',
      details: [
        'Main: +1 (555) 123-4567',
        'Toll-free: 1-800-VISA-HELP',
        'Emergency: +1 (555) 999-9999'
      ],
      availability: '24/7 Support Available',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions and documents',
      details: [
        'General: info@visaexpert.com',
        'Support: support@visaexpert.com',
        'Urgent: emergency@visaexpert.com'
      ],
      availability: 'Response within 2 hours',
      action: 'Send Email'
    },
    {
      icon: Globe,
      title: 'Live Chat',
      description: 'Instant support from our team',
      details: [
        'Available on website',
        'Mobile app support',
        'WhatsApp: +1 (555) 123-4567'
      ],
      availability: 'Mon-Fri: 9 AM - 9 PM EST',
      action: 'Start Chat'
    },
    {
      icon: Users,
      title: 'Video Consultation',
      description: 'Face-to-face meetings via video call',
      details: [
        'Zoom meetings',
        'Screen sharing available',
        'Document review sessions'
      ],
      availability: 'By appointment only',
      action: 'Book Meeting'
    }
  ];

  const emergencyContacts = [
    {
      situation: 'Visa Rejection Appeal',
      contact: '+1 (555) 911-1111',
      email: 'appeals@visaexpert.com',
      availability: '24/7'
    },
    {
      situation: 'Urgent Travel Authorization',
      contact: '+1 (555) 911-2222',
      email: 'urgent@visaexpert.com',
      availability: '24/7'
    },
    {
      situation: 'Document Emergency',
      contact: '+1 (555) 911-3333',
      email: 'documents@visaexpert.com',
      availability: 'Mon-Sun: 6 AM - 11 PM'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium mb-4">
              Get In Touch
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Contact Our Expert Team
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to start your visa journey? Our immigration experts are here to help you every step of the way. 
              Contact us through any of our convenient channels and get personalized guidance for your immigration needs.
            </p>
          </div>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">6</div>
              <div className="text-gray-600">Global Offices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">2 hrs</div>
              <div className="text-gray-600">Average Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Languages Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {method.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-gray-600">{detail}</p>
                      ))}
                    </div>
                    
                    <div className="text-sm text-blue-600 font-medium mb-4">{method.availability}</div>
                    
                    <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Component */}
      <Contact />

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Global Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us in person at any of our worldwide locations for face-to-face consultations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={office.image}
                    alt={`${office.city} office`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {office.country}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{office.city}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                        <div>
                          <div>{office.address}</div>
                          <div>{office.zipCode}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-blue-600" />
                        {office.phone}
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-blue-600" />
                        {office.email}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-blue-600" />
                        {office.hours}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="text-sm font-semibold text-gray-900 mb-1">{office.manager}</div>
                    <div className="text-xs text-gray-600">{office.managerTitle}</div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-900 mb-2">Specialties:</div>
                    <div className="flex flex-wrap gap-1">
                      {office.specialties.map((specialty, specialtyIndex) => (
                        <span key={specialtyIndex} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-blue-900 hover:bg-blue-800 text-white">
                      Visit Office
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Emergency Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Need urgent assistance? Our emergency support team is available for critical situations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {emergencyContacts.map((emergency, index) => (
              <Card key={index} className="border-red-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-red-100">
                  <CardTitle className="text-lg font-bold text-red-900">{emergency.situation}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <Phone className="h-4 w-4 mr-2 text-red-600" />
                      <span className="font-medium">{emergency.contact}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail className="h-4 w-4 mr-2 text-red-600" />
                      <span>{emergency.email}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="h-4 w-4 mr-2 text-red-600" />
                      <span>{emergency.availability}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white">
                    Emergency Contact
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-red-100 border border-red-200 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-red-900 mb-2">Important Notice</h3>
            <p className="text-red-800">
              Emergency services are for urgent visa-related matters only. For general inquiries, 
              please use our regular contact methods. Additional charges may apply for emergency services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Check out our comprehensive FAQ section or schedule a free consultation with our experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4">
                View FAQ
              </Button>
              <Button size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-4">
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}