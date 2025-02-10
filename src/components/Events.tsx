import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const events = [
  {
    title: 'AfriTech Summit 2024',
    date: 'April 15-17, 2024',
    location: 'Nairobi, Kenya',
    description: 'The largest gathering of tech innovators in East Africa',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    attendees: '2000+ Expected'
  },
  {
    title: 'Innovation Hackathon',
    date: 'May 5-7, 2024',
    location: 'Lagos, Nigeria',
    description: 'Build solutions for African challenges in 48 hours',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    attendees: '500+ Participants'
  },
  {
    title: 'FinTech Forum',
    date: 'June 20, 2024',
    location: 'Cape Town, South Africa',
    description: 'Exploring the future of financial technology in Africa',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    attendees: '1000+ Expected'
  }
];

const Events = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Join us at these exciting events and be part of Africa's tech revolution
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-5 w-5 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-5 w-5 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="h-5 w-5 mr-2" />
                    {event.attendees}
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="/events"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Register Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/events"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;