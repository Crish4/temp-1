import Process from '@/components/Process';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, AlertCircle, FileText, Users, Phone, Mail, Calendar } from 'lucide-react';

export default function ProcessPage() {
  const detailedSteps = [
    {
      step: 1,
      title: 'Free Assessment & Consultation',
      duration: '24-48 hours',
      description: 'We evaluate your profile and determine the best visa options for your goals.',
      substeps: [
        'Complete our comprehensive online assessment form',
        'Our AI system provides instant preliminary results',
        'Expert review of your profile within 24 hours',
        'Receive detailed eligibility report via email',
        'Schedule free 30-minute consultation call'
      ],
      requirements: [
        'Valid passport copy',
        'Educational certificates',
        'Work experience documents',
        'Language test scores (if available)',
        'Financial statements'
      ],
      tips: [
        'Be honest and accurate in your assessment',
        'Gather all documents beforehand',
        'Prepare questions for your consultation'
      ]
    },
    {
      step: 2,
      title: 'Strategy Development & Agreement',
      duration: '1-3 days',
      description: 'We create a personalized immigration strategy and formalize our partnership.',
      substeps: [
        'Detailed consultation with assigned case manager',
        'Custom immigration strategy presentation',
        'Timeline and milestone planning',
        'Service agreement and fee structure discussion',
        'Contract signing and payment processing'
      ],
      requirements: [
        'Completed assessment results',
        'Consultation notes',
        'Identification documents',
        'Payment method',
        'Emergency contact information'
      ],
      tips: [
        'Ask about all available options',
        'Understand the timeline clearly',
        'Clarify what services are included'
      ]
    },
    {
      step: 3,
      title: 'Documentation & Preparation',
      duration: '2-4 weeks',
      description: 'We help you gather, prepare, and review all required documents for your application.',
      substeps: [
        'Receive personalized document checklist',
        'Document collection and preparation guidance',
        'Professional review and quality check',
        'Translation and notarization services',
        'Application form completion and review'
      ],
      requirements: [
        'All personal documents',
        'Educational transcripts and certificates',
        'Employment letters and contracts',
        'Financial proof and bank statements',
        'Medical examination results (if required)'
      ],
      tips: [
        'Start document collection early',
        'Use certified translation services',
        'Keep multiple copies of everything'
      ]
    },
    {
      step: 4,
      title: 'Application Submission & Processing',
      duration: '2-12 weeks',
      description: 'We submit your application and provide ongoing support throughout the processing period.',
      substeps: [
        'Final application review and submission',
        'Payment of government fees',
        'Biometrics appointment scheduling (if required)',
        'Interview preparation and coaching',
        'Regular status updates and follow-ups'
      ],
      requirements: [
        'Completed application forms',
        'All supporting documents',
        'Government processing fees',
        'Biometric data (if required)',
        'Interview attendance (if required)'
      ],
      tips: [
        'Respond promptly to any requests',
        'Keep your contact information updated',
        'Prepare thoroughly for interviews'
      ]
    }
  ];

  const processingTimes = [
    { visaType: 'Tourist Visa', timeframe: '2-4 weeks', urgentAvailable: true },
    { visaType: 'Student Visa', timeframe: '4-8 weeks', urgentAvailable: true },
    { visaType: 'Work Visa', timeframe: '6-12 weeks', urgentAvailable: false },
    { visaType: 'Family Visa', timeframe: '8-16 weeks', urgentAvailable: false },
    { visaType: 'Business Visa', timeframe: '3-6 weeks', urgentAvailable: true },
    { visaType: 'Permanent Residence', timeframe: '12-24 months', urgentAvailable: false }
  ];

  const commonRequirements = [
    {
      category: 'Personal Documents',
      items: ['Valid passport', 'Birth certificate', 'Marriage certificate (if applicable)', 'Police clearance certificate']
    },
    {
      category: 'Educational Documents',
      items: ['Degree certificates', 'Academic transcripts', 'Professional certifications', 'Language test results']
    },
    {
      category: 'Financial Documents',
      items: ['Bank statements', 'Tax returns', 'Employment letters', 'Proof of funds']
    },
    {
      category: 'Medical Documents',
      items: ['Medical examination', 'Vaccination records', 'Health insurance', 'Medical history']
    }
  ];

  const faqs = [
    {
      question: 'How long does the visa process typically take?',
      answer: 'Processing times vary by visa type and country, ranging from 2 weeks for tourist visas to 24 months for permanent residence applications.'
    },
    {
      question: 'What happens if my application is rejected?',
      answer: 'We provide appeal services and will review your case to determine the best course of action, including reapplication strategies.'
    },
    {
      question: 'Can I track my application status?',
      answer: 'Yes, we provide regular updates and access to our client portal where you can track your application progress in real-time.'
    },
    {
      question: 'Do you offer urgent processing services?',
      answer: 'Yes, we offer expedited processing for certain visa types. Additional fees may apply for urgent processing services.'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium mb-4">
              Our Process
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Process
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We've streamlined the visa application process to make it as smooth and stress-free as possible. 
              Our proven 4-step methodology has helped thousands of clients achieve their immigration goals 
              with a 99% success rate.
            </p>
          </div>

          {/* Process Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900">Assessment</h3>
              <p className="text-sm text-gray-600">Free evaluation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900">Strategy</h3>
              <p className="text-sm text-gray-600">Personalized plan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900">Documentation</h3>
              <p className="text-sm text-gray-600">Expert preparation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold text-gray-900">Success</h3>
              <p className="text-sm text-gray-600">Visa approval</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Process Component */}
      <Process />

      {/* Detailed Step-by-Step Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Process Guide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about each step of our visa application process
            </p>
          </div>

          <div className="space-y-12">
            {detailedSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                      <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                        {step.step}
                      </div>
                      {step.title}
                    </CardTitle>
                    <Badge className="bg-blue-200 text-blue-900">
                      <Clock className="h-3 w-3 mr-1" />
                      {step.duration}
                    </Badge>
                  </div>
                  <p className="text-gray-600 ml-14">{step.description}</p>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Substeps */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        What We Do
                      </h4>
                      <ul className="space-y-2">
                        {step.substeps.map((substep, substepIndex) => (
                          <li key={substepIndex} className="flex items-start text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {substep}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <FileText className="h-5 w-5 text-blue-500 mr-2" />
                        What You Need
                      </h4>
                      <ul className="space-y-2">
                        {step.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tips */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                        Pro Tips
                      </h4>
                      <ul className="space-y-2">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Times */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Processing Times by Visa Type</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Typical processing timeframes for different visa categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processingTimes.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{item.visaType}</h3>
                    {item.urgentAvailable && (
                      <Badge className="bg-green-100 text-green-800">Urgent Available</Badge>
                    )}
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="font-medium">{item.timeframe}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Faster Processing?</h3>
            <p className="text-gray-600 mb-6">
              We offer expedited services for urgent cases. Contact us to discuss your timeline requirements.
            </p>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white">
              Request Urgent Processing
            </Button>
          </div>
        </div>
      </section>

      {/* Document Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Document Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential documents typically required for visa applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commonRequirements.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Document requirements vary by visa type and destination country. We provide personalized checklists for each client.
            </p>
            <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
              Download Document Checklist
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our visa application process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Have more questions? Our expert team is here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                <Phone className="h-4 w-4 mr-2" />
                Call Us Now
              </Button>
              <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
                <Mail className="h-4 w-4 mr-2" />
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Process?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Begin with our free assessment and take the first step towards your visa success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4">
              <Calendar className="h-5 w-5 mr-2" />
              Start Free Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4">
              <Users className="h-5 w-5 mr-2" />
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}