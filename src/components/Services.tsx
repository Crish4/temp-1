import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Briefcase, Plane, Building, Heart, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Student Visa',
      description: 'Complete guidance for study abroad programs, university applications, and student visa processing.',
      features: ['University Selection', 'Application Support', 'Scholarship Guidance', 'Post-Study Work Options'],
      popular: true,
    },
    {
      icon: Briefcase,
      title: 'Work Visa',
      description: 'Professional assistance for work permits, skilled worker visas, and employment-based immigration.',
      features: ['Job Market Analysis', 'Skill Assessment', 'Employer Sponsorship', 'Work Permit Processing'],
      popular: false,
    },
    {
      icon: Plane,
      title: 'Tourist Visa',
      description: 'Quick and hassle-free tourist visa processing for leisure travel and vacation planning.',
      features: ['Fast Processing', 'Document Preparation', 'Travel Insurance', 'Itinerary Planning'],
      popular: false,
    },
    {
      icon: Building,
      title: 'Business Visa',
      description: 'Business visa solutions for entrepreneurs, investors, and corporate travel requirements.',
      features: ['Investment Guidance', 'Business Setup', 'Investor Visa', 'Corporate Solutions'],
      popular: false,
    },
    {
      icon: Heart,
      title: 'Family Visa',
      description: 'Reunite with your loved ones through family sponsorship and dependent visa services.',
      features: ['Spouse Visa', 'Dependent Visa', 'Parent Sponsorship', 'Family Reunification'],
      popular: false,
    },
    {
      icon: Users,
      title: 'PR & Citizenship',
      description: 'Permanent residency and citizenship consultation for long-term immigration goals.',
      features: ['PR Application', 'Citizenship Test Prep', 'Document Verification', 'Legal Support'],
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Visa Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From student visas to permanent residency, we provide end-to-end immigration services 
            tailored to your specific needs and goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${service.popular ? 'ring-2 ring-blue-500 shadow-lg' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${service.popular ? 'bg-blue-500' : 'bg-blue-100'}`}>
                    <IconComponent className={`h-8 w-8 ${service.popular ? 'text-white' : 'text-blue-600'}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full mt-6 ${service.popular ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-blue-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Not Sure Which Visa You Need?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our expert consultants will assess your profile and recommend the best visa option for your goals.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Get Free Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}