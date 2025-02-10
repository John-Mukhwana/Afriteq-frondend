import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Dr. Kwame Mensah',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    bio: 'Former Google engineer with 15 years of experience in tech innovation.',
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'kwame@afriteq.com'
    }
  },
  {
    name: 'Dr. Amina Diallo',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    bio: 'AI researcher and tech leader with focus on African solutions.',
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'amina@afriteq.com'
    }
  },
  {
    name: 'John Okonjo',
    role: 'Head of Innovation',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    bio: 'Serial entrepreneur and innovation strategist.',
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'john@afriteq.com'
    }
  },
  {
    name: 'Sarah Kgosi',
    role: 'Head of Community',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    bio: 'Community builder and tech ecosystem developer.',
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'sarah@afriteq.com'
    }
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Passionate innovators dedicated to transforming Africa through technology
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-4 sm:grid-cols-2">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative group">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-4">
                    <a
                      href={member.social.twitter}
                      className="text-white hover:text-blue-200"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-white hover:text-blue-200"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-white hover:text-blue-200"
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <p className="mt-2 text-gray-500">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;