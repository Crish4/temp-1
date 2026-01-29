import Hero from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, Globe, CheckCircle } from 'lucide-react';

export default function Home() {
  const quickStats = [
    { icon: Users, number: '10,000+', label: 'Happy Clients' },
    { icon: Award, number: '99%', label: 'Success Rate' },
    { icon: Globe, number: '50+', label: 'Countries' },
  ];

  const featuredServices = [
    {
      title: 'Student Visa',
      description: 'Complete guidance for study abroad programs and university applications.',
      popular: true
    },
    {
      title: 'Work Visa',
      description: 'Professional assistance for work permits and employment-based immigration.',
      popular: false
    },
    {
      title: 'Family Visa',
      description: 'Reunite with your loved ones through family sponsorship services.',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Quick Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose VisaExpert?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, technology, and personalized service to deliver exceptional results for your visa needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="space-y-4">
                    <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                      <IconComponent className="h-10 w-10 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-blue-900">{stat.number}</div>
                      <div className="text-lg font-semibold text-gray-900">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Featured Services */}
          <div className="bg-gray-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Most Popular Services</h3>
              <p className="text-lg text-gray-600">Discover the visa services that have helped thousands achieve their dreams</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {featuredServices.map((service, index) => (
                <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Process Overview */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've streamlined the visa application process to make it as smooth as possible
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {['Assessment', 'Consultation', 'Documentation', 'Approval'].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step}</h3>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-4">
              Learn About Our Process
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Visa Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards your immigration goals with our free assessment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4">
              Start Free Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}