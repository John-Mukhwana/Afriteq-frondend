
import { Code2, Globe, Database, Smartphone, Shield, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="h-8 w-8 text-blue-600" />,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs and challenges.'
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: 'Web Development',
    description: 'Responsive and scalable web applications built with modern technologies and best practices.'
  },
  {
    icon: <Database className="h-8 w-8 text-blue-600" />,
    title: 'Cloud Solutions',
    description: 'Cloud-native applications and infrastructure optimization for maximum efficiency.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-600" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.'
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and data.'
  },
  {
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    title: 'Digital Transformation',
    description: 'Strategic consulting and implementation of digital solutions for business growth.'
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive technology solutions tailored for African businesses
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  {service.icon}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a href="/services" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;