import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      country: 'Canada',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'VisaExpert made my dream of working in Canada a reality. Their team guided me through every step of the process, and I received my work permit in just 8 weeks. Highly recommended!',
      visa: 'Work Permit'
    },
    {
      name: 'Michael Chen',
      role: 'MBA Student',
      country: 'Australia',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The student visa process seemed overwhelming until I found VisaExpert. They helped me choose the right university and handled all the paperwork. Now I\'m studying at my dream school!',
      visa: 'Student Visa'
    },
    {
      name: 'Priya Patel',
      role: 'Marketing Manager',
      country: 'United Kingdom',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Professional, efficient, and reliable. VisaExpert helped my entire family relocate to the UK. Their attention to detail and constant communication made the process stress-free.',
      visa: 'Family Visa'
    },
    {
      name: 'David Rodriguez',
      role: 'Business Owner',
      country: 'New Zealand',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'I wanted to expand my business to New Zealand, and VisaExpert made it happen. Their expertise in business visas is unmatched. I got my investor visa approved on the first try!',
      visa: 'Investor Visa'
    },
    {
      name: 'Emma Thompson',
      role: 'Nurse',
      country: 'Germany',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The healthcare worker visa process was complex, but VisaExpert simplified everything. They even helped me with credential recognition. I\'m now working as a nurse in Berlin!',
      visa: 'Work Visa'
    },
    {
      name: 'James Wilson',
      role: 'Retiree',
      country: 'Portugal',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Retirement visa applications can be tricky, but VisaExpert handled everything perfectly. Their team is knowledgeable, patient, and truly cares about their clients. Thank you!',
      visa: 'Retirement Visa'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '4.9/5', label: 'Client Rating' },
    { number: '50+', label: 'Countries' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium mb-4">
            Success Stories
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            their visa journey with VisaExpert.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-blue-200" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.visa} • {testimonial.country}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            See More Success Stories
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Watch video testimonials from our clients who have successfully achieved their 
            immigration goals with VisaExpert's guidance and support.
          </p>
          
          {/* Placeholder for video testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((video) => (
              <div key={video} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="bg-gray-200 rounded-lg h-32 mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent ml-1"></div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-900">Client Success Story #{video}</div>
                <div className="text-xs text-gray-600">2 min watch</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              View All Testimonials
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-2xl font-bold text-gray-400">Google Reviews</div>
            <div className="text-2xl font-bold text-gray-400">Trustpilot</div>
            <div className="text-2xl font-bold text-gray-400">Better Business Bureau</div>
            <div className="text-2xl font-bold text-gray-400">Immigration Board</div>
          </div>
        </div>
      </div>
    </section>
  );
}