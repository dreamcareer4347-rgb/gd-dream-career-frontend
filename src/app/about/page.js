// File path: frontend/src/app/about/page.js
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      {/* About Hero Header */}
      <section className="bg-[#011F4B] text-white py-16 lg:py-24 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-sky-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            — ABOUT GD DREAM CAREER INSTITUTE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Empowering Students to Learn Today & Lead Tomorrow
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Dedicated to building strong academic foundations, confidence in English communication, and essential computer literacy for every student from Nursery to Class 10.
          </p>
        </div>
      </section>

      {/* Institute Introduction */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#011F4B]">
              Welcome to GD Dream Career Institute
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              GD Dream Career Institute ek premier educational hub hai jo Nursery se Class 10 tak ke students ke liye comprehensive learning solutions provide karta hai. Humara main goal bachon me strong academic foundation create karna, unhe fluent English speaking me train karna aur free computer education ke through digital literacy dena hai.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Humare experienced educators aur mentors har student par personal attention dete hain taaki har bachha apni full potential ko achieve kar sake aur future challenges ke liye completely prepare ho sake.
            </p>
          </div>
          <div className="bg-[#F0F9FF] p-8 rounded-3xl border border-sky-100 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-[#011F4B]">Our Core Pillars</h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-sky-500 font-bold text-lg">✓</span>
                <span><strong>Concept-Based Learning:</strong> Rote learning ki jagah concepts ko deeply samajhne par focus.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-sky-500 font-bold text-lg">✓</span>
                <span><strong>Spoken English Confidence:</strong> Daily conversation practice, grammar, aur vocabulary building.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-sky-500 font-bold text-lg">✓</span>
                <span><strong>Free Computer Education:</strong> Basic typing, office tools, aur digital skills sabhi ke liye accessible banana.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#011F4B] flex items-center justify-center font-bold text-xl mb-4">
              🎯
            </div>
            <h3 className="text-xl font-bold text-[#011F4B] mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Har student ko affordable aur high-quality education provide karna, unme moral values build karna, aur unhe academics, communication, aur technology me proficient banana taaki wo apne career me successful leaders ban sakein.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#011F4B] flex items-center justify-center font-bold text-xl mb-4">
              🌟
            </div>
            <h3 className="text-xl font-bold text-[#011F4B] mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ek aisa trusted educational institute banna jo student-centric teaching, innovation, aur holistic development ke liye jana jaye, jahan har bachha apne sapne pure karne ke liye inspire ho.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#011F4B]">Want to Learn More About Our Programs?</h2>
          <p className="text-gray-600 text-sm">Explore our courses or get in touch with our expert team today.</p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/courses" 
              className="bg-[#011F4B] hover:bg-black text-white font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              View Our Courses
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-[#011F4B] border border-gray-300 font-semibold px-6 py-3 rounded-lg transition shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}