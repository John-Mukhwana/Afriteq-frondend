
import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'African Expertise',
    description: 'Deep understanding of African markets and business environments'
  },
  {
    title: 'Innovation First',
    description: 'Cutting-edge solutions using the latest technologies'
  },
  {
    title: 'Scalable Solutions',
    description: 'Built to grow with your business needs'
  },
  {
    title: 'Local Support',
    description: '24/7 support from our local team of experts'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Afriteq Solutions?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We combine global expertise with local insights to deliver technology solutions that drive growth and innovation across Africa.
            </p>
            <div className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="rounded-lg shadow-lg object-cover"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Team collaboration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;