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
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Best Coaching Institute in Agra Road, Sumel & Bagrana Jaipur
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            3+ years se trusted leader in Nursery to 12th Coaching, Spoken English Confidence, and Free Computer Education across Agra Road, Purani Chungi, Vijaypura, Sumel, and Bagrana, Jaipur (302031).
          </p>
        </div>
      </section>

      {/* Institute Introduction & Leadership */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#011F4B]">
              Welcome to GD Dream Career Institute
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              <strong>GD Dream Career Institute</strong> Sumel, Bagrana, Purani Chungi, Vijaypura aur Agra Road, Jaipur ka sabse trusted aur premier educational institute hai. Hum pichle <strong>3 saalon se continuous excellence</strong> ke sath Nursery se Class 12th tak ke students ko top-quality academic guidance de rahe hain.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Founders <strong>Sachin Sharma</strong> & <strong>Golu Saini</strong> ke vision aur CEO <strong>Dev Sharma</strong> ki leadership me humara goal har bachhe ko conceptual clarity, fluent English communication skill, aur free computer education ke zariye digital literacy me master banana hai.
            </p>
            
            {/* Direct Contact Badge */}
            <div className="bg-sky-50 border-l-4 border-[#011F4B] p-4 rounded-r-xl space-y-1">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Direct Admission & Query</p>
              <p className="text-sm font-bold text-[#011F4B]">
                CEO Dev Sharma: <a href="tel:9982216542" className="text-sky-600 hover:underline">+91 9982216542</a>
              </p>
              <p className="text-xs text-gray-600">Location: Agra Road, Sumel, Bagrana, Jaipur 302031 (Plus Code: VWP7+HQ2)</p>
            </div>
          </div>

          <div className="bg-[#F0F9FF] p-8 rounded-3xl border border-sky-100 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-[#011F4B]">Our 3 Core Pillars of Excellence</h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-sky-500 font-bold text-lg">✓</span>
                <span><strong>Nursery to 12th Academic Coaching:</strong> Board exam preparation, daily practice tests, aur weak subjects par special focus.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-sky-500 font-bold text-lg">✓</span>
                <span><strong>Spoken English Classes:</strong> Grammar foundation, daily public speaking practice, aur vocabulary development for overall confidence.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-sky-500 font-bold text-lg">✓</span>
                <span><strong>Free Computer Education:</strong> Computer typing, MS Office, internet basic training, aur essential digital skills bilkul free.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership & Founders Section */}
      <section className="bg-sky-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Meet the Visionaries Behind GD Dream Career
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <span className="text-xs font-semibold text-sky-300 uppercase tracking-widest">CEO & Management</span>
              <h3 className="text-xl font-bold text-white mt-1">Dev Sharma</h3>
              <p className="text-gray-300 text-xs mt-2 leading-relaxed">
                Student growth, academic planning, aur overall institute operational development ke head. Contact: +91 9982216542.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <span className="text-xs font-semibold text-sky-300 uppercase tracking-widest">Co-Founder</span>
              <h3 className="text-xl font-bold text-white mt-1">Sachin Sharma</h3>
              <p className="text-gray-300 text-xs mt-2 leading-relaxed">
                Dedicated towards concept-based academic excellence aur student skill enrichment programs.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <span className="text-xs font-semibold text-sky-300 uppercase tracking-widest">Co-Founder</span>
              <h3 className="text-xl font-bold text-white mt-1">Golu Saini</h3>
              <p className="text-gray-300 text-xs mt-2 leading-relaxed">
                Focused on digital infrastructure, free computer literacy programs, aur student outreach in Agra Road area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#011F4B] flex items-center justify-center font-bold text-xl mb-4">
              🎯
            </div>
            <h3 className="text-xl font-bold text-[#011F4B] mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sumel, Bagrana, Purani Chungi, Vijaypura, aur Agra Road ke har student ko affordable, high-quality education dena. Academic coaching ke sath Spoken English aur Free Computer Education dekar unhe future leadership ke liye prepare karna.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#011F4B] flex items-center justify-center font-bold text-xl mb-4">
              🌟
            </div>
            <h3 className="text-xl font-bold text-[#011F4B] mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Jaipur 302031 area ka sabse trusted #1 educational hub banna, jahan Nursery se 12th tak ka har student apne academic goals poore kar sake aur confident career path build kar sake.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#011F4B]">Ready to Join GD Dream Career Institute?</h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Nursery to 12th coaching batches, Spoken English, aur Free Computer Education regarding kisi bhi enquiry ke liye aaj hi contact karein.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/courses" 
              className="bg-[#011F4B] hover:bg-black text-white font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              Explore Our Courses
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-[#011F4B] border border-gray-300 font-semibold px-6 py-3 rounded-lg transition shadow-sm"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}