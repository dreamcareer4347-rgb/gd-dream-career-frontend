// File path: frontend/src/app/computer-education/page.js
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function FreeComputerEducation() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-[#011F4B] text-white py-16 lg:py-20 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-sky-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            — SCHOLARSHIP & DIGITAL SKILLS INITIATIVE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Free Computer Education Scheme in Agra Road & Vijaypura Jaipur
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            GD Dream Career Institute (Sumel, Bagrana, Purani Chungi, Vijaypura, Jaipur 302031) ke sath sikhein essential digital skills, typing, office tools, aur internet safety.
          </p>
        </div>
      </section>

      {/* Selection Test Scheme Highlight Card */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-[#F0F9FF] border-2 border-sky-300 rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="bg-[#011F4B] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
              Scholarship Selection Test
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#011F4B]">
              Get 100% Free Computer Education
            </h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Apni knowledge test karein aur Scholarship Test crack karke completely FREE Computer Coaching batch join karein!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Box 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-sky-100 text-center">
              <div className="text-3xl font-black text-[#011F4B] mb-1">100 Marks</div>
              <p className="text-xs font-bold text-gray-500 uppercase">Total Test Paper</p>
              <p className="text-xs text-gray-600 mt-2">Objective & Basic Skill Questions</p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-sky-100 text-center">
              <div className="text-3xl font-black text-emerald-600 mb-1">85+ Marks</div>
              <p className="text-xs font-bold text-gray-500 uppercase">Passing Eligibility</p>
              <p className="text-xs text-gray-600 mt-2">Score 85 or above for 100% Free Course</p>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-sky-100 text-center">
              <div className="text-3xl font-black text-sky-600 mb-1">₹99</div>
              <p className="text-xs font-bold text-gray-500 uppercase">Test Registration Fee</p>
              <p className="text-xs text-gray-600 mt-2">One-time nominal paper fee</p>
            </div>
          </div>

          {/* Test Syllabus Section */}
          <div className="mt-10 bg-white p-6 sm:p-8 rounded-2xl border border-sky-100">
            <h3 className="text-xl font-bold text-[#011F4B] mb-4 text-center sm:text-left">
              📝 Selection Test Paper Syllabus
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-sky-50 rounded-xl">
                <h4 className="font-bold text-[#011F4B] mb-2">1. Basic English Grammar</h4>
                <ul className="text-xs sm:text-sm text-gray-700 space-y-1.5 list-disc list-inside">
                  <li>Nouns, Pronouns, Verbs, and Adjectives</li>
                  <li>Simple Tenses & Sentence Structure</li>
                  <li>Common Vocabulary & Correct Spellings</li>
                  <li>Basic Reading Comprehension</li>
                </ul>
              </div>

              <div className="p-4 bg-sky-50 rounded-xl">
                <h4 className="font-bold text-[#011F4B] mb-2">2. Basic Mathematics</h4>
                <ul className="text-xs sm:text-sm text-gray-700 space-y-1.5 list-disc list-inside">
                  <li>Addition, Subtraction, Multiplication, Division</li>
                  <li>Fractions, Decimals, & Percentages</li>
                  <li>Basic Word Problems & Analytical Logic</li>
                  <li>Number Series & Simple Calculations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact & Registration Callout */}
          <div className="text-center mt-8 space-y-3">
            <p className="text-xs text-gray-600">
              For Test Registration & Inquiry: <strong>CEO Dev Sharma (<a href="tel:9982216542" className="text-sky-600 hover:underline">+91 9982216542</a>)</strong>
            </p>
            <Link 
              href="/contact" 
              className="bg-[#011F4B] hover:bg-black text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition inline-block text-sm sm:text-base"
            >
              Register for ₹99 Scholarship Test Now
            </Link>
          </div>
        </div>
      </section>

      {/* What You Will Learn in Computer Course */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#011F4B] text-center mb-10">
          Computer Course Modules & Practical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200">
            <div className="text-3xl mb-3">🖥️</div>
            <h3 className="font-bold text-[#011F4B] mb-2">Basic Computer Operations</h3>
            <p className="text-xs sm:text-sm text-gray-600">Hardware, software, Windows navigation, files & folder management.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200">
            <div className="text-3xl mb-3">⌨️</div>
            <h3 className="font-bold text-[#011F4B] mb-2">Typing & Keyboarding</h3>
            <p className="text-xs sm:text-sm text-gray-600">Speed typing, proper finger placement, and accuracy training.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200">
            <div className="text-3xl mb-3">📄</div>
            <h3 className="font-bold text-[#011F4B] mb-2">Office Productivity Tools</h3>
            <p className="text-xs sm:text-sm text-gray-600">Word processing, spreadsheets, presentations, and document printing.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-bold text-[#011F4B] mb-2">Internet & Online Browsing</h3>
            <p className="text-xs sm:text-sm text-gray-600">Effective search skills, educational resources, and email etiquette.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-bold text-[#011F4B] mb-2">Cyber Safety & Security</h3>
            <p className="text-xs sm:text-sm text-gray-600">Safe internet practices, privacy protection, and avoiding online scams.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="font-bold text-[#011F4B] mb-2">Digital Literacy for Career</h3>
            <p className="text-xs sm:text-sm text-gray-600">Essential technology skills needed for school academics, exams, and career growth.</p>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="bg-sky-50 py-10 border-t border-sky-100 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <h3 className="text-xl font-bold text-[#011F4B]">Visit GD Dream Career Institute</h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Location: Agra Road, Sumel, Bagrana, Purani Chungi, Vijaypura, Jaipur, Rajasthan 302031 (Plus Code: VWP7+HQ2)<br />
            Founders: Sachin Sharma & Golu Saini | CEO: Dev Sharma (+91 9982216542)
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}