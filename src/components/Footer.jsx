// File path: frontend/src/components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#011F4B] text-gray-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Column 1: Logo and Tagline */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="GD Dream Career Institute" 
              width={140} 
              height={45} 
              className="h-10 w-auto bg-white p-1 rounded"
            />
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Learn Today. Lead Tomorrow.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 tracking-wide">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-sky-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-sky-400 transition">About Us</Link></li>
            <li><Link href="/courses" className="hover:text-sky-400 transition">Courses</Link></li>
            <li><Link href="/computer-education" className="hover:text-sky-400 transition">Free Computer Education</Link></li>
            <li><Link href="/contact" className="hover:text-sky-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Our Focus */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 tracking-wide">Our Focus</h3>
          <ul className="space-y-2.5 text-sm">
            <li className="hover:text-sky-400 transition">English Speaking</li>
            <li className="hover:text-sky-400 transition">Deep English Learning</li>
            <li className="hover:text-sky-400 transition">Academic Foundation</li>
            <li className="hover:text-sky-400 transition">Nursery to Class 10</li>
            <li className="hover:text-sky-400 transition">Free Computer Education</li>
          </ul>
        </div>

        {/* Column 4: Follow Us (Social Media Icons) */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 tracking-wide">Follow Us</h3>
          <div className="flex space-x-3 pt-1">
            {/* Facebook */}
            <a href="#" className="w-10 h-10 rounded-full bg-white text-[#011F4B] flex items-center justify-center font-bold hover:bg-sky-400 hover:text-white transition shadow" title="Facebook">
              f
            </a>
            {/* Instagram */}
            <a href="#" className="w-10 h-10 rounded-full bg-white text-[#011F4B] flex items-center justify-center font-bold hover:bg-sky-400 hover:text-white transition shadow" title="Instagram">
              ig
            </a>
            {/* YouTube Channel Button */}
            <a 
              href="https://youtube.com/@dreamcareer04?si=1qc69nMbcn3uAo4-" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-extrabold hover:bg-red-700 transition shadow"
              title="YouTube Channel"
            >
              ▶
            </a>
            {/* Telegram */}
            <a href="#" className="w-10 h-10 rounded-full bg-white text-[#011F4B] flex items-center justify-center font-bold hover:bg-sky-400 hover:text-white transition shadow" title="Telegram">
              tg
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-blue-900/50 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
        <p>GD Dream Career Institute</p>
        <p className="mt-2 sm:mt-0">Learn Today. Lead Tomorrow.</p>
      </div>
    </footer>
  );
}