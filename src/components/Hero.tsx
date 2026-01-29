import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Globe, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium">
                <Award className="h-4 w-4 mr-2" />
                #1 Visa Consultancy Service
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Gateway to
                <span className="text-blue-900 block">Global Opportunities</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert visa consultation and immigration services for students, professionals, and families. 
                Turn your dreams of studying, working, or living abroad into reality with our proven expertise.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700 font-medium">99% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700 font-medium">Expert Guidance</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700 font-medium">Fast Processing</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                Book Free Consultation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">3.5K+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">20+</div>
                <div className="text-gray-600 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">5+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Globe className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Global Reach</h3>
                    <p className="text-blue-100">Worldwide visa services</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Users className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Expert Team</h3>
                    <p className="text-blue-100">Certified immigration consultants</p>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 mt-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">99%</div>
                    <div className="text-blue-100">Success Rate</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}