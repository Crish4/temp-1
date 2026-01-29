import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visaType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['123 Immigration Street', 'Suite 456, Downtown', 'New York, NY 10001'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Toll-free: 1-800-VISA-HELP'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@visaexpert.com', 'support@visaexpert.com', 'emergency@visaexpert.com'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      action: 'Book Appointment'
    }
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Immigration Street, Suite 456',
      phone: '+1 (555) 123-4567',
      manager: 'Sarah Johnson'
    },
    {
      city: 'Los Angeles',
      address: '789 Visa Boulevard, Floor 12',
      phone: '+1 (555) 234-5678',
      manager: 'Michael Chen'
    },
    {
      city: 'Toronto',
      address: '456 Immigration Ave, Suite 789',
      phone: '+1 (416) 345-6789',
      manager: 'Emma Wilson'
    },
    {
      city: 'London',
      address: '321 Visa Lane, Office 101',
      phone: '+44 20 1234 5678',
      manager: 'James Smith'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Visa Journey?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact our expert team today for a free consultation. We're here to answer your questions 
            and guide you through every step of the visa application process.
          </p>
        </div>

        {/* Contact Form & Info Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name *</label>
                      <Input
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <Input
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Visa Type</label>
                      <Select onValueChange={(value) => setFormData({...formData, visaType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select visa type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student Visa</SelectItem>
                          <SelectItem value="work">Work Visa</SelectItem>
                          <SelectItem value="tourist">Tourist Visa</SelectItem>
                          <SelectItem value="business">Business Visa</SelectItem>
                          <SelectItem value="family">Family Visa</SelectItem>
                          <SelectItem value="pr">Permanent Residence</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea
                      placeholder="Tell us about your visa requirements and any questions you have..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-full p-3">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-sm text-gray-600">{detail}</p>
                          ))}
                        </div>
                        <Button variant="outline" size="sm" className="mt-3 text-blue-600 border-blue-600 hover:bg-blue-50">
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
            <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Chat with our experts instantly</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Start Chat</Button>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-green-50 to-green-100">
            <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Consultation</h3>
            <p className="text-gray-600 mb-4">Schedule a free 30-min call</p>
            <Button className="bg-green-600 hover:bg-green-700 text-white">Book Now</Button>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
            <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Support</h3>
            <p className="text-gray-600 mb-4">24/7 urgent assistance</p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Call Now</Button>
          </Card>
        </div>

        {/* Office Locations */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Global Offices</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With offices around the world, we're always close to you. Visit us for in-person consultations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{office.city}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>{office.address}</p>
                    <p className="font-medium text-blue-600">{office.phone}</p>
                    <p>Manager: {office.manager}</p>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    Visit Office
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}