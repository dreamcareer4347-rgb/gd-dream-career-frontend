// File path: frontend/src/app/privacy-policy/page.js
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl font-extrabold text-[#011F4B] mb-6">Privacy Policy</h1>
        
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            At <strong>GD Dream Career Institute</strong> (Agra Road, Sumel, Bagrana, Jaipur 302031), accessible from https://gddreamcareer.online, one of our main priorities is the privacy of our visitors.
          </p>

          <h2 className="text-lg font-bold text-[#011F4B] pt-2">1. Information We Collect</h2>
          <p>
            When you register for courses, fill out contact forms, or apply for our ₹99 Computer Education Scholarship Test, we may collect personal details such as your name, mobile number, and email address.
          </p>

          <h2 className="text-lg font-bold text-[#011F4B] pt-2">2. How We Use Your Information</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>To provide coaching and student performance updates.</li>
            <li>To send admission details and course updates.</li>
            <li>To improve our website UI and educational content.</li>
          </ul>

          <h2 className="text-lg font-bold text-[#011F4B] pt-2">3. Google AdSense & Cookies</h2>
          <p>
            GD Dream Career Institute uses cookies to store information about visitors' preferences. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website.
          </p>

          <h2 className="text-lg font-bold text-[#011F4B] pt-2">4. Contact Us</h2>
          <p>
            If you have questions about our Privacy Policy, contact CEO Dev Sharma at <strong>+91 9982216542</strong> or visit us at Agra Road, Jaipur.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}