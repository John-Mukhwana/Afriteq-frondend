import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of African FinTech',
    excerpt: 'Exploring how digital payment solutions are transforming African economies...',
    author: 'Dr. Sarah Mensah',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'FinTech'
  },
  {
    title: 'Innovation in African Agriculture',
    excerpt: 'How AI and IoT are revolutionizing farming practices across the continent...',
    author: 'John Okonjo',
    date: 'March 12, 2024',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'AgriTech'
  },
  {
    title: 'Building Smart Cities in Africa',
    excerpt: 'The roadmap to developing sustainable and connected urban centers...',
    author: 'Dr. Amina Mohammed',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Smart Cities'
  }
];

const Blog = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Insights & Updates
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Stay informed about the latest trends and innovations in African tech
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <a href="/blog" className="text-gray-900 hover:text-blue-600">
                    {post.title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            View all articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;