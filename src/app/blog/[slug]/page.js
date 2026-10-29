// File path: frontend/src/app/blog/[slug]/page.js
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { use } from 'react';

// Static Full Articles Data
const articles = {
  'top-tips-for-class-10-12-board-exam-preparation': {
    title: 'Top 5 Tips to Score 90%+ in Board Exams (Class 10th & 12th)',
    author: 'Pooja Sharma (Head Teacher)',
    date: 'October 25, 2026',
    category: 'Academic Tips',
    content: `
      Preparing for board exams can feel overwhelming, but with the right guidance and study schedule, achieving 90%+ marks is completely achievable. At GD Dream Career Institute (Agra Road, Jaipur), we focus on structured learning for Nursery to 12th students. Here are top 5 tips:

      1. Master the NCERT & Core Textbooks: Always prioritize your core NCERT textbooks and fundamental formulas before moving to advanced guides.
      2. Daily Revision & Written Practice: Writing answer scripts helps in time management during real board exams.
      3. Solve Previous Years Papers: Solve at least 5-10 years of sample papers to understand marking schemes.
      4. Clear Concepts Early: Never hesitate to ask doubt questions to faculty members.
      5. Maintain Consistency & Sleep Routine: Balanced study hours with proper sleep improve memory retention.
    `,
  },
  'why-spoken-english-is-essential-for-career-growth': {
    title: 'Why Spoken English & Communication Skills Matter for Students',
    author: 'Dev Sharma (CEO)',
    date: 'October 20, 2026',
    category: 'Skill Development',
    content: `
      English is more than just a subject; it is a global language of opportunity. In today's competitive world, fluency in Spoken English builds confidence and helps students shine in job interviews and academic presentations.

      Key Benefits of Spoken English Training:
      - Overcomes stage fear and hesitations in public speaking.
      - Boosts performance in school viva, college admissions, and competitive exams.
      - Helps students present ideas clearly in English medium competitive environments.

      At GD Dream Career Institute in Bagrana & Sumel, Agra Road, Jaipur, our specialized Spoken English batch ensures practical daily speaking practice.
    `,
  },
  'benefits-of-free-computer-education-scholarship-test': {
    title: 'How ₹99 Scholarship Test Opens Doors to Free Computer Education',
    author: 'Sachin Sharma (Founder)',
    date: 'October 15, 2026',
    category: 'Computer Skills',
    content: `
      In the modern digital era, basic computer literacy is non-negotiable. To empower every student in Sumel, Bagrana, Purani Chungi, and Vijaypura, GD Dream Career Institute launched the Free Computer Education scheme via a nominal ₹99 Scholarship Entrance Test.

      What You Learn in Computer Training:
      - MS Office (Word, Excel, PowerPoint)
      - Computer Basics & Operating System Handling
      - English & Hindi Fast Typing Practice
      - Internet Usage, Emailing, and Online Safety

      Appearing for the ₹99 Scholarship Test allows meritorious students to unlock free computer training with certified course completion!
    `,
  },
};

export default function SingleBlog({ params }) {
  const resolvedParams = use(params);
  const article = articles[resolvedParams.slug];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-2xl font-bold text-[#011F4B]">Blog Article Not Found</h1>
          <Link href="/blog" className="mt-4 text-sky-600 font-bold hover:underline">
            ← Back to All Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 py-12 flex-grow w-full space-y-6">
        <Link href="/blog" className="text-xs font-bold text-sky-600 hover:underline inline-block mb-2">
          ← Back to All Blogs
        </Link>

        <div className="space-y-3 border-b border-sky-100 pb-6">
          <span className="bg-sky-50 text-[#011F4B] text-xs font-bold px-3 py-1 rounded-full border border-sky-100">
            {article.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#011F4B] leading-tight">
            {article.title}
          </h1>
          <div className="text-xs text-gray-500 flex items-center gap-4">
            <span>By <strong className="text-gray-700">{article.author}</strong></span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
        </div>

        <div className="text-sm sm:text-base leading-relaxed text-gray-700 whitespace-pre-line space-y-4">
          {article.content}
        </div>

        {/* Call to Action Box inside Blog */}
        <div className="bg-sky-50/70 p-6 rounded-2xl border border-sky-100 mt-8 space-y-3">
          <h3 className="font-bold text-[#011F4B] text-base">Want to Join GD Dream Career Institute?</h3>
          <p className="text-xs text-gray-600">
            Admissions open for Nursery to 12th, Spoken English & Free Computer Classes at Agra Road, Sumel, Bagrana, Jaipur.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a href="tel:9982216542" className="bg-[#011F4B] text-white px-4 py-2 rounded-xl text-xs font-bold shadow hover:bg-black transition">
              📞 Call CEO Dev Sharma: 9982216542
            </a>
            <Link href="/contact" className="bg-white border border-sky-200 text-[#011F4B] px-4 py-2 rounded-xl text-xs font-bold hover:bg-sky-100 transition">
              Visit Contact Page
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}