// File path: frontend/src/app/blog/page.js
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Frontend Blogs Data Array
export const blogsData = [
  {
    id: '1',
    slug: 'top-tips-for-class-10-12-board-exam-preparation',
    title: 'Top 5 Tips to Score 90%+ in Board Exams (Class 10th & 12th)',
    excerpt: 'Proven study strategies, time management techniques, and revision plans by top teachers at GD Dream Career Institute, Agra Road Jaipur.',
    date: 'October 25, 2026',
    author: 'Pooja Sharma (Head Teacher)',
    category: 'Academic Tips',
  },
  {
    id: '2',
    slug: 'why-spoken-english-is-essential-for-career-growth',
    title: 'Why Spoken English & Communication Skills Matter for Students',
    excerpt: 'How English fluency boosts confidence, opens job opportunities, and helps in school/college interviews for students in Sumel and Bagrana.',
    date: 'October 20, 2026',
    author: 'Dev Sharma (CEO)',
    category: 'Skill Development',
  },
  {
    id: '3',
    slug: 'benefits-of-free-computer-education-scholarship-test',
    title: 'How ₹99 Scholarship Test Opens Doors to Free Computer Education',
    excerpt: 'Learn practical computer skills like MS Office, Typing, and Internet basics to prepare for a digital career in Jaipur.',
    date: 'October 15, 2026',
    author: 'Sachin Sharma (Founder)',
    category: 'Computer Skills',
  },
];

export default function BlogListing() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-sky-50/60 py-10 px-4 border-b border-sky-100">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-sky-600 font-bold text-xs uppercase tracking-wider">Educational Insights & Updates</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#011F4B]">
            GD Dream Career Blog & Student Guides
          </h1>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Expert tips on board exam preparation, spoken English, computer education, and career guidance for students in Jaipur.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogsData.map((blog) => (
            <div 
              key={blog.id} 
              className="bg-white rounded-2xl border border-sky-100 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-sky-600 font-semibold">
                  <span>{blog.category}</span>
                  <span className="text-gray-400">{blog.date}</span>
                </div>
                <h2 className="text-lg font-bold text-[#011F4B] hover:text-sky-600 transition leading-snug">
                  <Link href={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[11px] text-gray-500 font-medium">By {blog.author}</span>
                <Link 
                  href={`/blog/${blog.slug}`} 
                  className="text-xs font-bold text-[#011F4B] hover:text-sky-600 transition"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}