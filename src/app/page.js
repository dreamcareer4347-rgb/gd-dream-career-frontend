// File path: frontend/src/app/page.js
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      {/* 1. Main Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50/30 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="space-y-6 z-10">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 text-[#011F4B] font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full border border-sky-200">
              <span>✨</span> GD DREAM CAREER INSTITUTE
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#011F4B] leading-tight tracking-tight">
              Build a Strong Foundation for a Brighter Future
            </h1>
            
            {/* Feature Bullets */}
            <p className="text-xs sm:text-sm font-bold text-gray-700 flex flex-wrap gap-x-2 gap-y-1">
              <span>English Speaking</span> <span className="text-sky-500">•</span> 
              <span>Deep English Learning</span> <span className="text-sky-500">•</span>
              <span>Academic Foundation</span> <span className="text-sky-500">•</span> 
              <span>Free Computer Education</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                href="/courses" 
                className="bg-[#011F4B] hover:bg-black text-white font-bold px-6 sm:px-8 py-3.5 rounded-xl shadow-lg shadow-[#011F4B]/20 transition duration-300 inline-flex items-center text-sm sm:text-base group transform hover:-translate-y-0.5"
              >
                Explore Our Programs 
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link 
                href="/performance" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 sm:px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition duration-300 text-sm sm:text-base"
              >
                Student Performance Portal 🚀
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-sky-200 to-indigo-100 rounded-3xl -z-10 blur-xl opacity-60 hidden sm:block"></div>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[280px] sm:h-[400px] lg:h-[460px] bg-slate-100 relative border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop" 
                alt="Students studying together" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Feature Cards Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#F0F9FF] p-8 sm:p-10 rounded-[2rem] text-center flex flex-col items-center shadow-sm border border-sky-100 transition hover:shadow-md hover:border-sky-300">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#011F4B] mb-6 shadow-md text-2xl">
                🗣️
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#011F4B] mb-3">English Speaking</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium">
                Build confidence, improve communication skills and speak English fluently in everyday life.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F0F9FF] p-8 sm:p-10 rounded-[2rem] text-center flex flex-col items-center shadow-sm border border-sky-100 transition hover:shadow-md hover:border-sky-300">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#011F4B] mb-6 shadow-md text-2xl">
                📚
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#011F4B] mb-3">Nursery to Class 10</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium">
                Strong academic foundation with concept-based learning for every stage of growth.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F0F9FF] p-8 sm:p-10 rounded-[2rem] text-center flex flex-col items-center shadow-sm border border-sky-100 transition hover:shadow-md hover:border-sky-300">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#011F4B] mb-6 shadow-md text-2xl">
                💻
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#011F4B] mb-3">Free Computer Education</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium">
                Gain essential digital skills and prepare for a technology-driven future.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="bg-slate-50 py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <p className="text-[#011F4B] font-bold text-xs sm:text-sm uppercase tracking-wider">
              — WHY CHOOSE US
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#011F4B] leading-tight">
              Learn Today. Lead Tomorrow.
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
              At GD Dream Career Institute, we provide quality education and skill development for students from Nursery to Class 10. Our focus is on English learning, academic excellence and free computer education — helping every child build confidence, develop skills and create a better future.
            </p>
            <div>
              <Link 
                href="/performance" 
                className="bg-[#011F4B] hover:bg-black text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition duration-300 inline-flex items-center text-sm group"
              >
                Check Student Performance Portal 
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-sky-200/50 rounded-3xl filter blur-2xl -z-10"></div>
            <div className="relative max-w-md w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" 
                alt="Student learning in classroom" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Founder & Core Leadership Team Section */}
      <section className="py-16 lg:py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-sky-600 font-bold text-xs sm:text-sm uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              — Visionary Leadership & Core Team
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#011F4B] tracking-tight">
              Meet the Pillars of GD Dream Career
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Our experienced leadership dedicated to shaping students' futures with advanced software guidance, robust mathematics, and elite communication skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* 1. Dev Sharma */}
            <div className="bg-slate-50 border border-gray-200 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition space-y-4">
              <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden border-2 border-[#011F4B] shadow-inner bg-sky-900/10">
                <img 
                  src="/dev.jpg" 
                  alt="Dev Sharma" 
                  className="w-full h-full object-cover"
                  onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"}} 
                />
              </div>
              <div>
                <span className="bg-[#011F4B] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                  CEO & Software Developer
                </span>
                <h3 className="text-lg font-bold text-[#011F4B] mt-2">Dev Sharma</h3>
                <p className="text-xs font-semibold text-emerald-600 mt-1">English Soft & Deep Teaching Expert</p>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Guiding students with modern software perspective and advanced English communication techniques.
              </p>
            </div>

            {/* 2. Golu Saini */}
            <div className="bg-slate-50 border border-gray-200 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition space-y-4">
              <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden border-2 border-emerald-600 shadow-inner bg-emerald-900/10">
                <img 
                  src="/golu.jpg" 
                  alt="Golu Saini" 
                  className="w-full h-full object-cover"
                  onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"}} 
                />
              </div>
              <div>
                <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                  Founder & Management
                </span>
                <h3 className="text-lg font-bold text-[#011F4B] mt-2">Golu Saini</h3>
                <p className="text-xs font-semibold text-emerald-600 mt-1">Mathematics Teacher</p>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Overseeing institute administration and strengthening student mathematical foundations.
              </p>
            </div>

            {/* 3. Sachin */}
            <div className="bg-slate-50 border border-gray-200 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition space-y-4">
              <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden border-2 border-sky-600 shadow-inner bg-sky-900/10">
                <img 
                  src="/sachin.jpg" 
                  alt="Sachin" 
                  className="w-full h-full object-cover"
                  onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"}} 
                />
              </div>
              <div>
                <span className="bg-sky-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                  Founder & Investor
                </span>
                <h3 className="text-lg font-bold text-[#011F4B] mt-2">Sachin</h3>
                <p className="text-xs font-semibold text-emerald-600 mt-1">Strategic Growth & Investor</p>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Fueling institutional infrastructure expansion and long-term educational excellence.
              </p>
            </div>

            {/* 4. Puja Sharma */}
            <div className="bg-slate-50 border border-gray-200 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition space-y-4">
              <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden border-2 border-indigo-600 shadow-inner bg-indigo-900/10">
                <img 
                  src="/puja.jpg" 
                  alt="Puja Sharma" 
                  className="w-full h-full object-cover"
                  onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"}} 
                />
              </div>
              <div>
                <span className="bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                  Head Teacher
                </span>
                <h3 className="text-lg font-bold text-[#011F4B] mt-2">Pooja Sharma</h3>
                <p className="text-xs font-semibold text-emerald-600 mt-1">Academic Direction & Teaching</p>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Directing daily classroom instruction, student discipline, and academic progress.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}