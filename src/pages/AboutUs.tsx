import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Users, Globe, Clock, Shield, TrendingUp, Star, MapPin } from 'lucide-react';

export default function AboutUs() {
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
      description: 'Government-licensed immigration consultants with extensive experience in visa processing and immigration law.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Industry-leading 99% success rate with thousands of successful visa applications across all categories.'
    },
    {
      icon: Users,
      title: 'Personalized Service',
      description: 'Dedicated case managers providing one-on-one support throughout your entire immigration journey.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Managing Director & Senior Immigration Lawyer',
      experience: '15+ years',
      specialization: 'Student & Work Visas',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      credentials: ['LLB Immigration Law', 'ICCRC Certified', 'MARA Member']
    },
    {
      name: 'Michael Chen',
      role: 'Senior Immigration Consultant',
      experience: '12+ years',
      specialization: 'Business & Investment Visas',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      credentials: ['MBA International Business', 'RCIC Licensed', 'CPA Certified']
    },
    {
      name: 'Emma Wilson',
      role: 'Family Immigration Specialist',
      experience: '10+ years',
      specialization: 'Family Reunification & PR',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      credentials: ['MA Immigration Studies', 'Government Licensed', 'Family Law Certified']
    },
    {
      name: 'David Rodriguez',
      role: 'Student Visa Coordinator',
      experience: '8+ years',
      specialization: 'Education Counseling',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      credentials: ['MEd Counseling', 'ICEF Certified', 'University Partner Network']
    }
  ];

  const milestones = [
    { year: '2009', event: 'VisaExpert founded with a mission to simplify immigration' },
    { year: '2012', event: 'Reached 1,000 successful visa applications' },
    { year: '2015', event: 'Expanded to serve 25+ countries worldwide' },
    { year: '2018', event: 'Achieved 99% success rate milestone' },
    { year: '2020', event: 'Launched digital platform for remote consultations' },
    { year: '2022', event: 'Opened 4th international office' },
    { year: '2024', event: 'Celebrating 15 years of excellence with 10,000+ happy clients' }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium mb-4">
              About VisaExpert
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Immigration Partner
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With over 15 years of experience and a 99% success rate, we've helped thousands of individuals 
              and families achieve their dreams of studying, working, and living abroad. Our commitment to 
              excellence and personalized service sets us apart in the immigration industry.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8">
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
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded in 2009 by immigration lawyer Sarah Johnson, VisaExpert was born from a simple 
                  belief: that everyone deserves expert guidance in their immigration journey. What started 
                  as a small consultancy has grown into one of the most trusted immigration service providers globally.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team of certified immigration lawyers, consultants, and support staff brings decades 
                  of combined experience in navigating complex immigration laws and procedures. We understand 
                  that every client's situation is unique, which is why we provide personalized solutions 
                  tailored to your specific needs, timeline, and budget.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we're proud to have helped over 10,000 clients achieve their immigration goals, 
                  maintaining an industry-leading 99% success rate while expanding our services to cover 
                  50+ countries worldwide.
                </p>
              </div>

              {/* Certifications */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Certifications & Memberships</h3>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-900 hover:bg-blue-200 px-3 py-1">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Mission Statement */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  "To make global mobility accessible and achievable for everyone by providing expert guidance, 
                  transparent processes, and unwavering support throughout the immigration journey. We believe 
                  that borders should not limit dreams, and we're here to help you cross them legally and successfully."
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  "To be the world's most trusted immigration consultancy, recognized for our expertise, 
                  integrity, and commitment to client success. We envision a world where immigration 
                  is accessible, transparent, and stress-free for everyone."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose VisaExpert?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, technology, and personalized service to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="space-y-6">
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of certified immigration professionals is dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.experience} • {member.specialization}</p>
                  
                  <div className="space-y-1 mb-4">
                    {member.credentials.map((credential, credIndex) => (
                      <Badge key={credIndex} variant="outline" className="text-xs">
                        {credential}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15 years of growth, innovation, and helping dreams come true
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-900 mb-2">{milestone.year}</div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with the Best?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have achieved their immigration goals with VisaExpert
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4">
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}