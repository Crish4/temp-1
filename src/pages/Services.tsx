import Services from '@/components/Services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, DollarSign, FileText, Users, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const serviceDetails = [
    {
      category: 'Student Visas',
      description: 'Comprehensive support for your educational journey abroad',
      services: [
        {
          name: 'University Selection & Application',
          duration: '2-4 weeks',
          price: 'From $299',
          features: ['University research', 'Application assistance', 'Document preparation', 'Scholarship guidance']
        },
        {
          name: 'Student Visa Processing',
          duration: '4-8 weeks',
          price: 'From $599',
          features: ['Visa application', 'Interview preparation', 'Document review', 'Follow-up support']
        },
        {
          name: 'Post-Study Work Guidance',
          duration: '1-2 weeks',
          price: 'From $399',
          features: ['Work permit application', 'Job search support', 'Employer liaison', 'Extension assistance']
        }
      ]
    },
    {
      category: 'Work Visas',
      description: 'Professional immigration solutions for career advancement',
      services: [
        {
          name: 'Skilled Worker Visa',
          duration: '6-12 weeks',
          price: 'From $899',
          features: ['Skills assessment', 'Job matching', 'Employer sponsorship', 'Visa processing']
        },
        {
          name: 'Intra-Company Transfer',
          duration: '4-8 weeks',
          price: 'From $699',
          features: ['Transfer documentation', 'Corporate liaison', 'Visa application', 'Family inclusion']
        },
        {
          name: 'Temporary Work Permits',
          duration: '2-6 weeks',
          price: 'From $499',
          features: ['Permit application', 'Employer verification', 'Quick processing', 'Extension support']
        }
      ]
    },
    {
      category: 'Family Visas',
      description: 'Reunite with your loved ones through family immigration',
      services: [
        {
          name: 'Spouse/Partner Visa',
          duration: '8-16 weeks',
          price: 'From $799',
          features: ['Relationship evidence', 'Application preparation', 'Interview coaching', 'Appeal support']
        },
        {
          name: 'Parent Sponsorship',
          duration: '12-24 weeks',
          price: 'From $1,299',
          features: ['Sponsorship application', 'Financial assessment', 'Medical coordination', 'Processing support']
        },
        {
          name: 'Dependent Children',
          duration: '6-12 weeks',
          price: 'From $599',
          features: ['Age verification', 'Custody documentation', 'Educational planning', 'Integration support']
        }
      ]
    },
    {
      category: 'Business & Investment',
      description: 'Expand your business globally with our expert guidance',
      services: [
        {
          name: 'Investor Visa',
          duration: '12-20 weeks',
          price: 'From $2,499',
          features: ['Investment planning', 'Business plan review', 'Due diligence', 'Visa processing']
        },
        {
          name: 'Entrepreneur Visa',
          duration: '8-16 weeks',
          price: 'From $1,899',
          features: ['Business assessment', 'Market analysis', 'Funding guidance', 'Startup support']
        },
        {
          name: 'Business Visitor',
          duration: '1-3 weeks',
          price: 'From $399',
          features: ['Purpose documentation', 'Invitation letters', 'Quick processing', 'Multiple entries']
        }
      ]
    }
  ];

  const additionalServices = [
    {
      icon: FileText,
      title: 'Document Translation & Notarization',
      description: 'Certified translation services for all your immigration documents',
      price: 'From $25/page'
    },
    {
      icon: Users,
      title: 'Immigration Appeals',
      description: 'Expert representation for visa refusals and immigration appeals',
      price: 'From $1,500'
    },
    {
      icon: Clock,
      title: 'Express Processing',
      description: 'Fast-track your application with our priority processing service',
      price: '+50% of base fee'
    },
    {
      icon: CheckCircle,
      title: 'Compliance Monitoring',
      description: 'Ongoing support to ensure you meet all visa conditions',
      price: 'From $99/month'
    }
  ];

  const countries = [
    { name: 'Canada', flag: '🇨🇦', popular: true },
    { name: 'Australia', flag: '🇦🇺', popular: true },
    { name: 'United Kingdom', flag: '🇬🇧', popular: true },
    { name: 'United States', flag: '🇺🇸', popular: true },
    { name: 'New Zealand', flag: '🇳🇿', popular: false },
    { name: 'Germany', flag: '🇩🇪', popular: false },
    { name: 'Netherlands', flag: '🇳🇱', popular: false },
    { name: 'Singapore', flag: '🇸🇬', popular: false },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium mb-4">
              Our Services
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Visa Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From student visas to permanent residency, we provide end-to-end immigration services 
              tailored to your specific needs and goals. Our expert team ensures the highest success 
              rates with personalized guidance every step of the way.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">99%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Component */}
      <Services />

      {/* Detailed Service Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Service Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive service packages designed to meet your specific immigration needs
            </p>
          </div>

          <div className="space-y-16">
            {serviceDetails.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.category}</h3>
                  <p className="text-lg text-gray-600">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <Card key={serviceIndex} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-gray-900">{service.name}</CardTitle>
                        <CardDescription className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="flex items-center text-sm text-gray-600">
                              <Clock className="h-4 w-4 mr-1" />
                              {service.duration}
                            </span>
                            <span className="flex items-center text-sm font-semibold text-blue-600">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {service.price}
                            </span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to complement your visa application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                    <div className="text-blue-600 font-semibold">{service.price}</div>
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Countries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Countries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide visa services for destinations worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <Card key={index} className={`text-center p-6 hover:shadow-lg transition-all duration-300 cursor-pointer ${country.popular ? 'ring-2 ring-blue-200 bg-blue-50' : ''}`}>
                <CardContent className="space-y-3">
                  <div className="text-4xl">{country.flag}</div>
                  <h3 className="font-semibold text-gray-900">{country.name}</h3>
                  {country.popular && (
                    <Badge className="bg-blue-500 text-white">Popular</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Don't see your destination? We serve 50+ countries worldwide.</p>
            <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
              View All Countries
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards your immigration goals with our free consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4">
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4">
              Get Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}