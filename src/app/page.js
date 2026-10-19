// File path: frontend/src/app/page.js
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      {/* 1. Ultra-Clean Hero Section (Strict Blue & White Theme) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-white py-8 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & Direct Action Column */}
          <div className="space-y-5 text-center sm:text-left">
            
            {/* Minimal Location Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#011F4B]/5 text-[#011F4B] font-bold text-xs px-3.5 py-1.5 rounded-full border border-sky-200">
              <span>📍</span> Agra Road, Sumel & Bagrana, Jaipur
            </div>

            {/* Crisp & Bold Catchy Heading */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#011F4B] leading-tight tracking-tight">
              Empowering Education For Your Child&apos;s Future
            </h1>

            {/* Sub-heading / Clean Bullet Chips */}
            <p className="text-gray-600 text-sm sm:text-base font-medium">
              Top Academic Coaching, Spoken English Confidence & Free Computer Skill Training in Jaipur 302031.
            </p>

            {/* Quick Feature Chips */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
              <span className="bg-sky-50 text-[#011F4B] text-xs font-bold px-3 py-1.5 rounded-lg border border-sky-100">
                🎓 Nursery to 12th
              </span>
              <span className="bg-sky-50 text-[#011F4B] text-xs font-bold px-3 py-1.5 rounded-lg border border-sky-100">
                🗣️ Spoken English
              </span>
              <span className="bg-sky-50 text-[#011F4B] text-xs font-bold px-3 py-1.5 rounded-lg border border-sky-100">
                💻 Free Computer Education
              </span>
            </div>

            {/* Direct Action Buttons (Pure Blue & White Contrast) */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <Link 
                href="/courses" 
                className="bg-[#011F4B] hover:bg-black text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition text-center text-sm flex items-center justify-center gap-2"
              >
                Explore Courses <span>→</span>
              </Link>

              <Link 
                href="/performance" 
                className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition text-center text-sm flex items-center justify-center gap-2"
              >
                📊 Student Performance Portal 🚀
              </Link>

              <a 
                href="tel:9982216542" 
                className="bg-sky-50 hover:bg-sky-100 text-[#011F4B] border border-sky-200 font-bold px-6 py-3.5 rounded-xl shadow-sm transition text-center text-sm flex items-center justify-center gap-2"
              >
                📞 Call CEO Dev Sharma
              </a>
            </div>

            {/* Minimalist Trust Indicator */}
            <p className="text-[11px] text-gray-500 pt-1">
              ⭐ 3+ Years of Excellence | Founders: Sachin Sharma & Golu Saini
            </p>
          </div>

          {/* Right Visual Image Card */}
          <div className="relative">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl h-[240px] sm:h-[380px] bg-slate-100 relative border-2 border-sky-100">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop" 
                alt="GD Dream Career Institute Classroom" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-sky-100 shadow-sm flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#011F4B] block">GD Dream Career Institute</span>
                  <span className="text-gray-500 text-[10px]">Agra Road, Sumel, Bagrana, Jaipur</span>
                </div>
                <Link href="/contact" className="bg-[#011F4B] text-white px-3 py-1.5 rounded-lg font-bold text-[10px]">
                  Enroll
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Quick Key Offerings Section */}
      <section className="bg-white py-10 border-t border-sky-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#011F4B]">Our Primary Programs</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Designed for complete academic & digital skill development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Program Card 1 */}
            <div className="bg-sky-50/50 p-6 rounded-2xl border border-sky-100 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-sky-100 flex items-center justify-center text-2xl mb-4">
                  📚
                </div>
                <h3 className="text-lg font-bold text-[#011F4B] mb-2">Nursery to 12th Coaching</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Strong concept clarity, board exam prep, and personal attention for all subjects.
                </p>
              </div>
              <Link href="/courses" className="text-xs font-bold text-sky-600 mt-4 inline-block hover:underline">
                View Syllabus & Details →
              </Link>
            </div>

            {/* Program Card 2 */}
            <div className="bg-sky-50/50 p-6 rounded-2xl border border-sky-100 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-sky-100 flex items-center justify-center text-2xl mb-4">
                  🗣️
                </div>
                <h3 className="text-lg font-bold text-[#011F4B] mb-2">Spoken English Classes</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Daily conversation practice, public speaking, grammar, and fluency development.
                </p>
              </div>
              <Link href="/courses" className="text-xs font-bold text-sky-600 mt-4 inline-block hover:underline">
                View Course Batch →
              </Link>
            </div>

            {/* Program Card 3 */}
            <div className="bg-sky-50/50 p-6 rounded-2xl border border-sky-100 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-sky-100 flex items-center justify-center text-2xl mb-4">
                  💻
                </div>
                <h3 className="text-lg font-bold text-[#011F4B] mb-2">Free Computer Education</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Practical computer typing, MS Office, and digital literacy via ₹99 Scholarship Test.
                </p>
              </div>
              <Link href="/computer-education" className="text-xs font-bold text-sky-600 mt-4 inline-block hover:underline">
                Apply for ₹99 Test →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Leadership & Founders Section */}
      <section className="py-12 bg-sky-50/30 border-t border-sky-100 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div>
            <span className="text-sky-600 font-bold text-xs uppercase tracking-wider">Visionary Leadership</span>
            <h2 className="text-2xl font-extrabold text-[#011F4B] mt-1">Meet Our Founders & Management</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Dev Sharma */}
            <div className="bg-white p-4 rounded-2xl border border-sky-100 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-2 bg-sky-100 border border-sky-200">
                <img src="/dev.jpg" alt="Dev Sharma CEO" className="w-full h-full object-cover" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200"}} />
              </div>
              <h3 className="font-bold text-xs text-[#011F4B]">Dev Sharma</h3>
              <p className="text-[10px] text-sky-600 font-bold uppercase mt-0.5">CEO</p>
            </div>

            {/* Golu Saini */}
            <div className="bg-white p-4 rounded-2xl border border-sky-100 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-2 bg-sky-100 border border-sky-200">
                <img src="/golu.jpg" alt="Golu Saini Founder" className="w-full h-full object-cover" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"}} />
              </div>
              <h3 className="font-bold text-xs text-[#011F4B]">Golu Saini</h3>
              <p className="text-[10px] text-sky-600 font-bold uppercase mt-0.5">Founder</p>
            </div>

            {/* Sachin Sharma */}
            <div className="bg-white p-4 rounded-2xl border border-sky-100 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-2 bg-sky-100 border border-sky-200">
                <img src="/sachin.jpg" alt="Sachin Sharma Founder" className="w-full h-full object-cover" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"}} />
              </div>
              <h3 className="font-bold text-xs text-[#011F4B]">Sachin Sharma</h3>
              <p className="text-[10px] text-sky-600 font-bold uppercase mt-0.5">Founder</p>
            </div>

            {/* Pooja Sharma */}
            <div className="bg-white p-4 rounded-2xl border border-sky-100 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-2 bg-sky-100 border border-sky-200">
                <img src="/puja.jpg" alt="Pooja Sharma Head Teacher" className="w-full h-full object-cover" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200"}} />
              </div>
              <h3 className="font-bold text-xs text-[#011F4B]">Pooja Sharma</h3>
              <p className="text-[10px] text-sky-600 font-bold uppercase mt-0.5">Head Teacher</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}