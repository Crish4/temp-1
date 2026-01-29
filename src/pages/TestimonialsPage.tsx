import Testimonials from '@/components/Testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, MapPin, Calendar, CheckCircle, Play } from 'lucide-react';

export default function TestimonialsPage() {
  const featuredTestimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      country: 'Canada',
      visaType: 'Work Permit',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      rating: 5,
      date: 'March 2024',
      text: 'VisaExpert made my dream of working in Canada a reality. Their team guided me through every step of the process, from finding the right employer to getting my work permit approved in just 8 weeks. The level of support and expertise was exceptional. I couldn\'t have done it without them!',
      journey: 'From India to Toronto - Software Developer at Tech Startup',
      timeline: '8 weeks total process',
      featured: true
    },
    {
      name: 'Michael Chen',
      role: 'MBA Student',
      country: 'Australia',
      visaType: 'Student Visa',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      rating: 5,
      date: 'February 2024',
      text: 'The student visa process seemed overwhelming until I found VisaExpert. They helped me choose the right university, prepared all my documents, and even coached me for the visa interview. Now I\'m studying at my dream school in Melbourne!',
      journey: 'From China to Melbourne - MBA at University of Melbourne',
      timeline: '6 weeks from application to approval',
      featured: true
    },
    {
      name: 'Priya Patel',
      role: 'Marketing Manager',
      country: 'United Kingdom',
      visaType: 'Family Visa',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      rating: 5,
      date: 'January 2024',
      text: 'Professional, efficient, and reliable. VisaExpert helped my entire family relocate to the UK. Their attention to detail and constant communication made the process stress-free. We\'re now happily settled in London!',
      journey: 'Family of 4 from India to London - Spouse Visa + Dependents',
      timeline: '12 weeks for complete family application',
      featured: true
    }
  ];

  const videoTestimonials = [
    {
      name: 'David Rodriguez',
      title: 'Entrepreneur Success Story',
      country: 'New Zealand',
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop',
      duration: '3:45',
      views: '2.1K'
    },
    {
      name: 'Emma Thompson',
      title: 'Healthcare Worker Journey',
      country: 'Germany',
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop',
      duration: '2:30',
      views: '1.8K'
    },
    {
      name: 'James Wilson',
      title: 'Retirement Visa Success',
      country: 'Portugal',
      thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop',
      duration: '4:12',
      views: '1.5K'
    }
  ];

  const successStats = [
    { number: '10,000+', label: 'Success Stories', icon: CheckCircle },
    { number: '99%', label: 'Approval Rate', icon: Star },
    { number: '4.9/5', label: 'Client Rating', icon: Star },
    { number: '50+', label: 'Countries', icon: MapPin }
  ];

  const clientJourneys = [
    {
      category: 'Student Visas',
      count: '3,500+',
      stories: [
        'Engineering student from India to MIT',
        'Medical student from Pakistan to University of Toronto',
        'Business student from Nigeria to London School of Economics'
      ]
    },
    {
      category: 'Work Visas',
      count: '2,800+',
      stories: [
        'Software engineer from Philippines to Silicon Valley',
        'Nurse from India to NHS, UK',
        'Chef from Thailand to restaurant in Australia'
      ]
    },
    {
      category: 'Family Reunification',
      count: '2,200+',
      stories: [
        'Family of 5 reunited in Canada after 2 years',
        'Elderly parents joined children in New Zealand',
        'Newlyweds united in Germany'
      ]
    },
    {
      category: 'Business & Investment',
      count: '1,500+',
      stories: [
        'Tech entrepreneur expanded to Singapore',
        'Restaurant chain owner moved to Australia',
        'Real estate investor relocated to Portugal'
      ]
    }
  ];

  const awards = [
    {
      title: 'Best Immigration Consultancy 2024',
      organization: 'Global Migration Awards',
      year: '2024'
    },
    {
      title: 'Client Service Excellence',
      organization: 'Immigration Industry Association',
      year: '2023'
    },
    {
      title: 'Innovation in Immigration Services',
      organization: 'Tech Immigration Summit',
      year: '2023'
    },
    {
      title: 'Trusted Partner Award',
      organization: 'International Education Council',
      year: '2022'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium mb-4">
              Success Stories
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Real Stories, Real Success
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how thousands of individuals and families have achieved their immigration dreams 
              with VisaExpert's expert guidance. These are their stories of success, determination, 
              and new beginnings.
            </p>
          </div>

          {/* Success Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed journeys of our most inspiring client success stories
            </p>
          </div>

          <div className="space-y-12">
            {featuredTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Image Section */}
                    <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white flex flex-col justify-center">
                      <div className="text-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white"
                        />
                        <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                        <p className="text-blue-100 mb-2">{testimonial.role}</p>
                        <Badge className="bg-white text-blue-900 mb-4">{testimonial.visaType}</Badge>
                        
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, starIndex) => (
                            <Star key={starIndex} className="h-5 w-5 text-yellow-300 fill-current" />
                          ))}
                        </div>
                        
                        <div className="text-sm text-blue-100">
                          <div className="flex items-center justify-center mb-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            {testimonial.date}
                          </div>
                          <div className="flex items-center justify-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {testimonial.country}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-2 p-8">
                      <div className="mb-6">
                        <Quote className="h-8 w-8 text-blue-200 mb-4" />
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                          "{testimonial.text}"
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Immigration Journey</h4>
                          <p className="text-gray-600">{testimonial.journey}</p>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                          <p className="text-gray-600">{testimonial.timeline}</p>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                          Read Full Story
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Testimonials Component */}
      <Testimonials />

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our clients share their immigration journeys in their own words
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-blue-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-3">{video.name} • {video.country}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{video.views} views</span>
                      <Badge variant="outline">Video Story</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
              View All Video Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Success by Category */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories by Category</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore success stories across different visa types and immigration pathways
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientJourneys.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-blue-900 mb-2">{category.count}</div>
                    <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.stories.map((story, storyIndex) => (
                      <div key={storyIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {story}
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full mt-6">
                    View More Stories
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{award.title}</h3>
                    <p className="text-sm text-gray-600">{award.organization}</p>
                    <Badge className="bg-blue-100 text-blue-900 mt-2">{award.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have achieved their immigration dreams with VisaExpert
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4">
              Share Your Story
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}