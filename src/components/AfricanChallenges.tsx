import React from 'react';
import { AlertTriangle, Users2, Lightbulb, Trophy } from 'lucide-react';

const challenges = [
  {
    title: 'Healthcare Access',
    description: 'Over 400 million Africans lack access to basic healthcare services. We need innovative telemedicine and healthcare delivery solutions.',
    stats: '400M+',
    icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
    status: 'Urgent'
  },
  {
    title: 'Financial Inclusion',
    description: 'Nearly 57% of Africans remain unbanked. Digital banking and mobile money solutions can bridge this gap.',
    stats: '57%',
    icon: <Users2 className="h-6 w-6 text-orange-500" />,
    status: 'In Progress'
  },
  {
    title: 'Education Access',
    description: '30 million children lack access to education. E-learning and remote education solutions are critically needed.',
    stats: '30M',
    icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
    status: 'Active'
  },
  {
    title: 'Agricultural Efficiency',
    description: '23% of African GDP comes from agriculture, yet productivity remains low. Smart farming solutions can revolutionize this sector.',
    stats: '23%',
    icon: <Trophy className="h-6 w-6 text-green-500" />,
    status: 'Opportunity'
  }
];

const AfricanChallenges = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Problems Seeking Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Join us in solving Africa's most pressing challenges through technology and innovation
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="relative group bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gray-900 rounded-lg">
                  {challenge.icon}
                </div>
                <span className={`text-sm px-3 py-1 rounded-full ${
                  challenge.status === 'Urgent' ? 'bg-red-900 text-red-200' :
                  challenge.status === 'In Progress' ? 'bg-orange-900 text-orange-200' :
                  challenge.status === 'Active' ? 'bg-yellow-900 text-yellow-200' :
                  'bg-green-900 text-green-200'
                }`}>
                  {challenge.status}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
              <p className="text-gray-300 mb-4">{challenge.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-400">{challenge.stats}</span>
                <a
                  href="/solutions"
                  className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
                >
                  Propose Solution
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

export default AfricanChallenges;