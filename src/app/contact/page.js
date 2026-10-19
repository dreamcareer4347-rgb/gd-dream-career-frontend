// File path: frontend/src/app/contact/page.js
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    student_class: 'Nursery',
    interested_course: 'English Speaking',
    inquiry_type: 'Admission',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // <--- ADMIN WHATSAPP NUMBER (CEO Dev Sharma) --->
  const ADMIN_WHATSAPP_NUMBER = "919982216542"; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 1. Django Backend Database me save karna
      const response = await fetch('https://gd-dream-career-backend.onrender.com/api/inquiries/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Database response was not OK');
      }

      setSubmitted(true);
      setLoading(false);

      // 2. WhatsApp message text format karna
      const waMessage = 
        `🔔 *New Inquiry - GD Dream Career*%0A%0A` +
        `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
        `📱 *Mobile:* ${encodeURIComponent(formData.mobile)}%0A` +
        `✉️ *Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A` +
        `🎓 *Class:* ${encodeURIComponent(formData.student_class)}%0A` +
        `📚 *Course:* ${encodeURIComponent(formData.interested_course)}%0A` +
        `📋 *Inquiry Type:* ${encodeURIComponent(formData.inquiry_type)}%0A` +
        `💬 *Message:* ${encodeURIComponent(formData.message || 'N/A')}`;

      // 3. Direct WhatsApp open karna
      const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${waMessage}`;
      window.open(whatsappUrl, '_blank');

    } catch (err) {
      console.error('Inquiry Submission Error:', err);
      // Agar backend issue bhi aaye tab bhi WhatsApp par redirect allow karna
      const waMessage = 
        `🔔 *New Inquiry - GD Dream Career*%0A%0A` +
        `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
        `📱 *Mobile:* ${encodeURIComponent(formData.mobile)}%0A` +
        `🎓 *Class:* ${encodeURIComponent(formData.student_class)}%0A` +
        `📚 *Course:* ${encodeURIComponent(formData.interested_course)}%0A` +
        `💬 *Message:* ${encodeURIComponent(formData.message || 'N/A')}`;

      const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${waMessage}`;
      window.open(whatsappUrl, '_blank');

      setSubmitted(true);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      {/* Contact Header */}
      <section className="bg-[#011F4B] text-white py-16 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-sky-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            — CONTACT GD DREAM CAREER INSTITUTE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Get in Touch with Agra Road Jaipur&apos;s #1 Institute
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Nursery to 12th coaching, Spoken English, aur Free Computer Education ke liye Sumel, Bagrana, Purani Chungi, aur Vijaypura, Jaipur mein humse contact karein. CEO Dev Sharma: +91 9982216542.
          </p>
        </div>
      </section>

      {/* Contact Info & Details Strip */}
      <section className="bg-sky-50 py-8 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-sky-100">
            <h3 className="font-bold text-[#011F4B] text-base mb-1">📍 Institute Location</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Agra Road, Sumel, Bagrana, Purani Chungi, Vijaypura, Jaipur, Rajasthan 302031 (Plus Code: VWP7+HQ2)
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-sky-100">
            <h3 className="font-bold text-[#011F4B] text-base mb-1">📞 Direct Call & WhatsApp</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              CEO Dev Sharma: <a href="tel:9982216542" className="text-sky-600 font-semibold hover:underline">+91 9982216542</a><br />
              Founders: Sachin Sharma & Golu Saini
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-sky-100">
            <h3 className="font-bold text-[#011F4B] text-base mb-1">🎓 Programs Offered</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Nursery to 12th Coaching, Spoken English Confidence, & Free Computer Education (3 Years of Excellence)
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-xl">
          <h2 className="text-2xl font-bold text-[#011F4B] mb-2 text-center">
            Admission & Course Inquiry Form
          </h2>
          <p className="text-gray-500 text-xs text-center mb-8">
            Form submit karte hi seedha WhatsApp par CEO Dev Sharma ke paas message pahuch jayega.
          </p>

          {submitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-6 rounded-2xl text-center space-y-3">
              <h3 className="font-bold text-xl">Thank You!</h3>
              <p className="text-sm">
                Aapki inquiry successfully submit ho gayi hai aur WhatsApp par redirect kar di gayi hai. Humari team jald hi aapse contact karegi.
              </p>
              <button 
                onClick={() => { 
                  setSubmitted(false); 
                  setFormData({ name: '', mobile: '', email: '', student_class: 'Nursery', interested_course: 'English Speaking', inquiry_type: 'Admission', message: '' }); 
                }}
                className="mt-4 bg-[#011F4B] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-black transition"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Parent/Visitor Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#011F4B] mb-2">Parent / Visitor Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange}
                    placeholder="Aapka poora naam" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#011F4B] bg-white text-sm"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-semibold text-[#011F4B] mb-2">Mobile Number *</label>
                  <input 
                    type="tel" 
                    name="mobile" 
                    required 
                    value={formData.mobile} 
                    onChange={handleChange}
                    placeholder="10 digit mobile number" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#011F4B] bg-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Address */}
                <div>
                  <label className="block text-sm font-semibold text-[#011F4B] mb-2">Email Address (Optional)</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="apka.email@example.com" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#011F4B] bg-white text-sm"
                  />
                </div>

                {/* Student Class */}
                <div>
                  <label className="block text-sm font-semibold text-[#011F4B] mb-2">Student Class *</label>
                  <select 
                    name="student_class" 
                    value={formData.student_class} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#011F4B] bg-white text-sm"
                  >
                    <option value="Nursery">Nursery</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    <option value="Class 4">Class 4</option>
                    <option value="Class 5">Class 5</option>
                    <option value="Class 6">Class 6</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Interested Course */}
                <div>
                  <label className="block text-sm font-semibold text-[#011F4B] mb-2">Interested Course *</label>
                  <select 
                    name="interested_course" 
                    value={formData.interested_course} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#011F4B] bg-white text-sm"
                  >
                    <option value="English Speaking">Spoken English Classes</option>
                    <option value="Nursery to 12th Academic Coaching">Nursery to 12th Academic Coaching</option>
                    <option value="Free Computer Education">Free Computer Education</option>
                  </select>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-semibold text-[#011F4B] mb-2">Inquiry Type *</label>
                  <select 
                    name="inquiry_type" 
                    value={formData.inquiry_type} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#011F4B] bg-white text-sm"
                  >
                    <option value="Admission">Admission Inquiry</option>
                    <option value="Fee Structure">Fee Structure</option>
                    <option value="Batch Timings">Batch Timings</option>
                    <option value="Other">Other Query</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#011F4B] mb-2">Message (Optional)</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="Apni koi aur query ya requirement yaha likhein..." 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#011F4B] bg-white text-sm"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-2">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-[#011F4B] hover:bg-black text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition duration-150 w-full sm:w-auto flex items-center justify-center gap-2 mx-auto"
                >
                  {loading ? 'Submitting...' : '💬 Submit Inquiry via WhatsApp'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}