// File path: frontend/src/app/courses/page.js
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Courses() {
  const courseList = [
    {
      title: "English Speaking",
      category: "Communication",
      description: "Build confidence, improve daily conversation skills, and speak English fluently without hesitation.",
      skills: ["Daily Vocabulary", "Pronunciation", "Fluency Practice", "Basic Grammar"],
      badge: "Most Popular"
    },
    {
      title: "Deep English Learning",
      category: "Advanced Language",
      description: "Advanced grammar, complex sentence formation, comprehensive reading, and professional writing skills.",
      skills: ["Advanced Grammar", "Essay & Letter Writing", "Comprehension", "Public Speaking"],
      badge: "Advanced"
    },
    {
      title: "Nursery to Class 10 Academic Foundation",
      category: "School Academics",
      description: "Complete academic foundation across all subjects with concept-based learning and regular assessments.",
      skills: ["Math & Science", "Concept Clarity", "Homework Support", "Exam Preparation"],
      badge: "Core Program"
    },
    {
      title: "Free Computer Education",
      category: "Digital Literacy",
      description: "Essential computer operations, typing skills, office productivity tools, and digital literacy (Scholarship Test based).",
      skills: ["Computer Basics", "Speed Typing", "MS Office / Docs", "Internet & Cyber Safety"],
      badge: "Free via Test"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#011F4B] text-white py-16 lg:py-20 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-sky-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            — OUR EDUCATIONAL PROGRAMS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Explore Our Professional Courses
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Nursery se Class 10 tak ke students ke liye designed high-quality academic, English, aur computer courses.
          </p>
        </div>
      </section>

      {/* Courses Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courseList.map((course, index) => (
            <div key={index} className="bg-[#F0F9FF] p-8 rounded-3xl border border-sky-200 shadow-sm flex flex-col justify-between transition hover:shadow-md">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-[#011F4B] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {course.badge}
                  </span>
                  <span className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
                    {course.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#011F4B] mb-3">{course.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-[#011F4B] uppercase tracking-wider mb-2">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-lg border border-sky-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-4 border-t border-sky-100">
                <Link 
                  href="/contact" 
                  className="flex-1 bg-[#011F4B] hover:bg-black text-white text-center py-2.5 rounded-xl text-sm font-bold transition shadow"
                >
                  Enquire Now
                </Link>
                <Link 
                  href="/contact" 
                  className="flex-1 bg-white hover:bg-sky-50 text-[#011F4B] border border-sky-300 text-center py-2.5 rounded-xl text-sm font-bold transition"
                >
                  Learn More
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