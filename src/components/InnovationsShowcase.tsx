import React from 'react';
import { Lightbulb, Rocket, Brain, Cpu } from 'lucide-react';

const innovations = [
  {
    title: 'AI-Powered Agriculture',
    description: 'Smart farming solutions using artificial intelligence to optimize crop yields and resource management.',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    icon: <Brain className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'FinTech Revolution',
    description: 'Digital payment and banking solutions making financial services accessible to all Africans.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    icon: <Cpu className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'Smart Cities',
    description: 'Urban infrastructure management systems powering the future of African cities.',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    icon: <Lightbulb className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'E-Learning Platform',
    description: 'Revolutionary digital learning solutions bridging the education gap across Africa.',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    icon: <Rocket className="h-6 w-6 text-blue-600" />
  }
];

const InnovationsShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Innovations that Transform Africa
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover groundbreaking solutions that are reshaping industries and empowering communities
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="relative h-64 lg:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={innovation.image}
                    alt={innovation.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div className="p-2 bg-white rounded-full shadow-md">
                      {innovation.icon}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{innovation.title}</h3>
                <p className="text-lg text-gray-600">{innovation.description}</p>
                <a
                  href="/solutions"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationsShowcase;