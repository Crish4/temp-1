import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Globe, Clock, Shield, TrendingUp } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Successful Cases',
      description: 'Clients who achieved their immigration goals'
    },
    {
      icon: Globe,
      number: '50+',
      label: 'Countries',
      description: 'Worldwide visa processing expertise'
    },
    {
      icon: Award,
      number: '99%',
      label: 'Success Rate',
      description: 'Industry-leading approval rate'
    },
    {
      icon: Clock,
      number: '15+',
      label: 'Years Experience',
      description: 'Proven track record in immigration'
    }
  ];

  const certifications = [
    'ICCRC Certified',
    'MARA Registered',
    'Government Licensed',
    'ISO 9001 Certified',
    'Better Business Bureau A+',
    'Immigration Law Society Member'
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Trusted Expertise',
      description: 'Government-licensed immigration consultants with extensive experience in visa processing.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Industry-leading 99% success rate with thousands of successful visa applications.'
    },
    {
      icon: Users,
      title: 'Personalized Service',
      description: 'Dedicated case managers providing one-on-one support throughout your journey.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium mb-4">
            About VisaExpert
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Trusted Immigration Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of experience, we've helped thousands of individuals and families 
            achieve their dreams of studying, working, and living abroad.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Expertise You Can Trust
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2009, VisaExpert has grown to become one of the most trusted immigration 
                consultancies globally. Our team of certified immigration lawyers and consultants 
                brings decades of combined experience in navigating complex immigration laws and procedures.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand that every client's situation is unique, which is why we provide 
                personalized solutions tailored to your specific needs, timeline, and budget. 
                Our commitment to excellence has earned us recognition as a leading immigration service provider.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Certifications & Memberships</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-900 hover:bg-blue-200">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-blue-900">{achievement.number}</div>
                      <div className="text-lg font-semibold text-gray-900">{achievement.label}</div>
                      <div className="text-sm text-gray-600">{achievement.description}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose VisaExpert?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine expertise, technology, and personalized service to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            "To make global mobility accessible and achievable for everyone by providing expert guidance, 
            transparent processes, and unwavering support throughout the immigration journey. We believe 
            that borders should not limit dreams, and we're here to help you cross them legally and successfully."
          </p>
        </div>
      </div>
    </section>
  );
}