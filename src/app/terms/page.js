// File path: frontend/src/app/terms/page.js
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl font-extrabold text-[#011F4B] mb-6">Terms & Conditions</h1>
        
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            Welcome to <strong>GD Dream Career Institute</strong>! These terms and conditions outline the rules and regulations for the use of our website and academic services.
          </p>

          <h2 className="text-lg font-bold text-[#011F4B] pt-2">1. Admissions & Scholarship Tests</h2>
          <p>
            The ₹99 Scholarship Test for Free Computer Education is subject to eligibility criteria set by the management team (Founders Sachin Sharma & Golu Saini).
          </p>

          <h2 className="text-lg font-bold text-[#011F4B] pt-2">2. Student Performance Portal</h2>
          <p>
            Student performance reports and marks are maintained for academic monitoring. Authorized students and parents can access reports using their registered details.
          </p>

          <h2 className="text-lg font-bold text-[#011F4B] pt-2">3. Website Use</h2>
          <p>
            All content published on https://gddreamcareer.online is owned by GD Dream Career Institute. Unauthorized duplication of blog articles or material is prohibited.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}