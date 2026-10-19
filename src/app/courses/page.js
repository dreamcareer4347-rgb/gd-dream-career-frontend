// File path: frontend/src/app/courses/page.js
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Courses() {
  const courseList = [
    {
      title: "Spoken English & Communication",
      category: "Communication & Personality",
      description: "Daily English conversation, confidence building, public speaking, and accent practice to express thoughts fluently without hesitation.",
      skills: ["Daily Vocabulary", "Pronunciation & Fluency", "Public Speaking", "Grammar Foundation"],
      badge: "Most Popular"
    },
    {
      title: "Advanced English Learning",
      category: "Professional & Academic Language",
      description: "Advanced grammar, sentence structure, essay/letter writing, comprehension, and professional communication skills.",
      skills: ["Advanced Grammar", "Writing Mastery", "Comprehension", "Personality Development"],
      badge: "Advanced"
    },
    {
      title: "Nursery to 12th Academic Coaching",
      category: "School Academics (All Subjects)",
      description: "Complete academic coaching from Nursery to 12th for CBSE & RBSE board exams, concept clarity, and regular weekly test series.",
      skills: ["Math & Science", "Concept Clarity", "Board Exam Prep", "Homework & Test Support"],
      badge: "Core Program"
    },
    {
      title: "Free Computer Education",
      category: "Digital Skill Training",
      description: "Essential computer typing, MS Office, internet basic operations, and practical digital literacy for local students.",
      skills: ["Computer Basics", "Speed Typing", "MS Office / Docs", "Internet & Cyber Awareness"],
      badge: "100% Free Program"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#011F4B] text-white py-16 lg:py-20 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-sky-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            — GD DREAM CAREER EDUCATIONAL PROGRAMS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Best Courses in Agra Road, Sumel & Bagrana Jaipur
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Nursery se Class 12th tak ke students ke liye top-quality Academic Coaching, Spoken English, aur Free Computer Education across Purani Chungi, Vijaypura, Sumel, and Bagrana (Jaipur 302031).
          </p>
        </div>
      </section>

      {/* Institute Info Strip */}
      <section className="bg-sky-50 py-6 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center text-xs text-gray-700 gap-4">
          <div>
            <strong>📍 Location:</strong> Agra Road, Sumel, Bagrana, Purani Chungi, Vijaypura, Jaipur 302031
          </div>
          <div>
            <strong>📞 Admission Hotline:</strong> CEO Dev Sharma (<a href="tel:9982216542" className="text-sky-600 font-bold hover:underline">+91 9982216542</a>)
          </div>
          <div>
            <strong>✨ Trust:</strong> 3+ Years of Academic Excellence (Founders: Sachin Sharma & Golu Saini)
          </div>
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
                <h2 className="text-2xl font-bold text-[#011F4B] mb-3">{course.title}</h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-xs font-bold text-[#011F4B] uppercase tracking-wider mb-2">Skills & Features Covered:</h3>
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
                  Contact CEO Dev Sharma
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Local Community CTA */}
      <section className="bg-gray-50 py-12 border-t border-gray-200 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-[#011F4B]">Join Agra Road&apos;s Most Trusted Educational Institute</h2>
          <p className="text-gray-600 text-sm">
            Sumel, Bagrana, Vijaypura aur Purani Chungi ke students ke liye special batch timings available hain. Aaj hi contact karein aur demo class book karein!
          </p>
          <div className="pt-2">
            <Link 
              href="/contact" 
              className="inline-block bg-[#011F4B] hover:bg-black text-white font-bold px-8 py-3 rounded-xl shadow transition"
            >
              Get Free Admission Counseling
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}