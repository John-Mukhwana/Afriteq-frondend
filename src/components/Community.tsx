import React from 'react';
import { Users, Calendar, MessageSquare, Share2 } from 'lucide-react';

const Community = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join Our AfriTeQ Community
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Connect with innovators, share ideas, and build the future of Africa together
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">10,000+ Members</h3>
            <p className="text-gray-600">Join Africa's largest tech innovation community</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Calendar className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Monthly Events</h3>
            <p className="text-gray-600">Regular meetups, hackathons, and workshops</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Discussion Forums</h3>
            <p className="text-gray-600">Share ideas and get feedback from peers</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Share2 className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p className="text-gray-600">Find partners and build solutions together</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/join"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
          >
            Join the Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;