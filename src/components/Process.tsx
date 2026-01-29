import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, FileText, Search, Users, Plane } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: 'Free Assessment',
      description: 'Complete our online assessment form to evaluate your eligibility and visa options.',
      details: [
        'Profile evaluation',
        'Eligibility check',
        'Visa options analysis',
        'Initial consultation'
      ],
      duration: '24 hours'
    },
    {
      step: 2,
      icon: Users,
      title: 'Expert Consultation',
      description: 'Meet with our certified immigration consultant to discuss your personalized strategy.',
      details: [
        'One-on-one consultation',
        'Document checklist',
        'Timeline planning',
        'Fee structure'
      ],
      duration: '1-2 days'
    },
    {
      step: 3,
      icon: FileText,
      title: 'Documentation',
      description: 'We help you prepare and review all required documents for your visa application.',
      details: [
        'Document preparation',
        'Form completion',
        'Quality review',
        'Translation services'
      ],
      duration: '1-2 weeks'
    },
    {
      step: 4,
      icon: Plane,
      title: 'Application & Approval',
      description: 'Submit your application and track progress until you receive your visa approval.',
      details: [
        'Application submission',
        'Progress tracking',
        'Follow-up support',
        'Visa collection'
      ],
      duration: '2-12 weeks'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium mb-4">
            Our Process
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've streamlined the visa application process to make it as smooth and stress-free as possible. 
            Here's how we guide you from start to finish.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between">
              {steps.slice(0, -1).map((_, index) => (
                <div key={index} className="flex-1 h-0.5 bg-blue-200 mt-8 mx-4"></div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="relative bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="text-center pb-4">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mt-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900">{step.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-center">{step.description}</p>
                    
                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Duration */}
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-sm text-blue-900 font-semibold">Timeline</div>
                      <div className="text-blue-700">{step.duration}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Transparent & Efficient Process
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in complete transparency throughout your visa journey. You'll receive regular 
              updates, have access to our client portal, and can track your application status in real-time.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900">No Hidden Fees</div>
                  <div className="text-gray-600">All costs are discussed upfront with no surprises</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900">Regular Updates</div>
                  <div className="text-gray-600">Stay informed with progress reports and notifications</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900">Expert Support</div>
                  <div className="text-gray-600">Dedicated case manager available throughout the process</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - CTA */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-8 text-white text-center">
            <h4 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h4>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Take the first step towards your visa application with our free assessment. 
              It only takes 5 minutes and you'll get instant results.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="mt-6 text-sm text-blue-200">
              ✓ No obligation • ✓ Instant results • ✓ Expert review
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}