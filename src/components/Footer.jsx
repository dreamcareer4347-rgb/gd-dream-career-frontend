// File path: frontend/src/components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#011F4B] text-gray-300 pt-12 pb-24 sm:pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="GD Dream Career Institute" 
                width={140} 
                height={45} 
                className="h-10 w-auto bg-white p-1 rounded"
              />
            </div>
            <p className="text-xs font-semibold text-white">
              Learn Today. Lead Tomorrow.
            </p>
            <p className="text-[11px] text-gray-300 leading-relaxed">
              Agra Road, Sumel, Bagrana, Purani Chungi, Vijaypura, Jaipur 302031.
            </p>
            <p className="text-[11px] text-sky-300 font-semibold">
              CEO Dev Sharma: <a href="tel:9982216542" className="hover:underline">+91 9982216542</a>
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-3 tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-sky-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-sky-400 transition">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-sky-400 transition">Courses & Programs</Link></li>
              <li><Link href="/computer-education" className="hover:text-sky-400 transition">Free Computer Education</Link></li>
              <li><Link href="/blog" className="hover:text-sky-400 transition">Blog & Articles</Link></li>
              <li><Link href="/performance" className="hover:text-sky-400 transition">Student Performance</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400 transition">Contact & Admissions</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Core Programs */}
          <div>
            <h3 className="text-white font-bold text-sm mb-3 tracking-wide">Legal & Policies</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/privacy-policy" className="hover:text-sky-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-sky-400 transition">Terms & Conditions</Link></li>
              <li className="text-sky-300 pt-2 font-semibold">Primary Offerings:</li>
              <li className="text-gray-300">Nursery to 12th & Spoken English</li>
              <li className="text-[11px] text-sky-300 pt-1">📍 Sumel, Bagrana, Jaipur 302031</li>
            </ul>
          </div>

          {/* Column 4: Social Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-3 tracking-wide">Connect With Us</h3>
            <div className="flex space-x-3 pt-1">
              <a href="#" className="w-9 h-9 rounded-full bg-white text-[#011F4B] flex items-center justify-center font-bold text-xs hover:bg-sky-400 hover:text-white transition shadow" title="Facebook">f</a>
              <a href="#" className="w-9 h-9 rounded-full bg-white text-[#011F4B] flex items-center justify-center font-bold text-xs hover:bg-sky-400 hover:text-white transition shadow" title="Instagram">ig</a>
              <a 
                href="https://youtube.com/@dreamcareer04?si=1qc69nMbcn3uAo4-" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-extrabold text-xs hover:bg-red-700 transition shadow"
                title="YouTube Channel"
              >
                ▶
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white text-[#011F4B] flex items-center justify-center font-bold text-xs hover:bg-sky-400 hover:text-white transition shadow" title="Telegram">tg</a>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-blue-900/50 pt-4 flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-400 gap-1">
          <p>© GD Dream Career Institute (Jaipur 302031). All rights reserved.</p>
          <p>Founders: Sachin Sharma & Golu Saini | Learn Today. Lead Tomorrow.</p>
        </div>
      </footer>

      {/* FIXED MOBILE NATIVE BOTTOM APP BAR (Always Fixed at Bottom) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-sky-100 z-50 py-2 px-4 shadow-lg flex items-center justify-around">
        <Link href="/" className="flex flex-col items-center text-[#011F4B]">
          <span className="text-base">🏠</span>
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <Link href="/courses" className="flex flex-col items-center text-gray-600 hover:text-[#011F4B]">
          <span className="text-base">📚</span>
          <span className="text-[10px] font-medium">Courses</span>
        </Link>
        <Link href="/performance" className="flex flex-col items-center text-sky-600 font-bold">
          <span className="text-base">📊</span>
          <span className="text-[10px]">Portal</span>
        </Link>
        <a href="tel:9982216542" className="flex flex-col items-center text-sky-700 font-bold">
          <span className="text-base">📞</span>
          <span className="text-[10px]">Call CEO</span>
        </a>
      </div>
    </>
  );
}