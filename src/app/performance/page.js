// File path: frontend/src/app/performance/page.js

'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

// Get backend URL from environment variables or fallback to live Render URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://gd-dream-career-backend.onrender.com';

export default function StudentPerformance() {
  const [rollNumber, setRollNumber] = useState('');
  const [resultPin, setResultPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Fetching student data...');
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState('');
  
  // State for selected receipt preview
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  // Render cold-start UX ke liye dynamic loading text messages
  useEffect(() => {
    let timer1, timer2, timer3;
    if (loading) {
      setLoadingText('🔒 Verifying Roll Number & PIN...');
      
      timer1 = setTimeout(() => {
        setLoadingText('⚡ Waking up secure cloud server (Takes ~10-20 sec)...');
      }, 3000);

      timer2 = setTimeout(() => {
        setLoadingText('📊 Processing performance graph & marksheet...');
      }, 10000);

      timer3 = setTimeout(() => {
        setLoadingText('✨ Almost ready! Loading details...');
      }, 18000);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [loading]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    
    const trimmedRoll = rollNumber.trim();
    const trimmedPin = resultPin.trim();
    const cacheKey = `student_perf_${trimmedRoll}_${trimmedPin}`;

    // --- Caching Check: Instant Load without hitting server if cached ---
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) {
      try {
        const parsed = JSON.parse(cachedData);
        console.log("CACHE CHECK - Subjects Data:", parsed.subjects);
        setStudentData(parsed);
        return;
      } catch (err) {
        sessionStorage.removeItem(cacheKey);
      }
    }

    setLoading(true);
    setStudentData(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/performance/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roll_number: trimmedRoll,
          result_pin: trimmedPin,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // --- DEBUG LOG: Check backend subjects & test_copy URLs ---
        console.log("LIVE API CHECK - Subjects Data:", data.data.subjects);
        
        setStudentData(data.data);
        // Save to sessionStorage cache to preserve Render / Neon free tier limits
        sessionStorage.setItem(cacheKey, JSON.stringify(data.data));
      } else {
        setError(data.message || 'Galat Roll Number ya Result PIN! Kripya sahi detail dalein.');
      }
    } catch (err) {
      setError('Backend server se connect nahi ho pa raha hai. Kripya check karein.');
    } finally {
      setLoading(false);
    }
  };

  const handlePrintReceipt = (feeItem) => {
    setSelectedReceipt(feeItem);
    setTimeout(() => {
      window.print();
    }, 300);
  };

  // --- Dynamic Current Month Fee Calculation ---
  const today = new Date();
  const currentMonthName = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();
  const displayCurrentMonth = `${currentMonthName} ${currentYear}`;

  const monthlyFeeAmount = Number(studentData?.total_fee || 1000);

  // Check how much paid for the current running month
  const currentMonthPaid = studentData?.fee_history
    ? studentData.fee_history
        .filter(item => (item.month_name || '').toLowerCase().includes(currentMonthName.toLowerCase()))
        .reduce((sum, item) => sum + Number(item.amount_paid || 0), 0)
    : 0;

  const currentMonthDue = Math.max(0, monthlyFeeAmount - currentMonthPaid);
  const isCurrentMonthPaid = currentMonthDue === 0 && currentMonthPaid > 0;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-gray-800">
      <Navbar />

      {/* Header */}
      <section className="bg-[#011F4B] text-white py-14 text-center px-4 print:hidden">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-sky-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            — PARENT & STUDENT PORTAL
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Academic & Skill Progress Dashboard
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">
            Apna Roll Number aur Result PIN enter karke live photo, parent details, skill metrics, test copies aur fee receipts download karein.
          </p>
        </div>
      </section>

      {/* Search Form Section */}
      <section className="py-10 max-w-2xl mx-auto px-4 w-full print:hidden">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#011F4B] uppercase tracking-wider mb-2">
                Student Roll Number *
              </label>
              <input
                type="text"
                required
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                placeholder="e.g. 1012"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#011F4B] bg-slate-50 text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#011F4B] uppercase tracking-wider mb-2">
                4-Digit Result PIN *
              </label>
              <input
                type="password"
                required
                maxLength={4}
                value={resultPin}
                onChange={(e) => setResultPin(e.target.value)}
                placeholder="e.g. 1234"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#011F4B] bg-slate-50 text-sm font-medium"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-semibold">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#011F4B] hover:bg-black text-white font-bold py-3.5 rounded-xl transition shadow text-sm"
            >
              {loading ? 'Searching...' : 'View Student Dashboard'}
            </button>
          </form>
        </div>
      </section>

      {/* EYE-CATCHING LOADING ANIMATION SCREEN */}
      {loading && (
        <section className="pb-16 max-w-md mx-auto px-4 w-full print:hidden">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-sky-100 shadow-xl text-center space-y-6 animate-pulse">
            <div className="relative flex items-center justify-center w-24 h-24 mx-auto">
              <div className="absolute w-full h-full rounded-full border-4 border-sky-200 animate-ping opacity-75"></div>
              <div className="w-20 h-20 border-4 border-t-sky-600 border-sky-100 rounded-full animate-spin"></div>
              <div className="absolute text-2xl">🎓</div>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-extrabold text-[#011F4B]">{loadingText}</h3>
              <p className="text-[11px] text-gray-400 font-medium">Server ko wake up hone me thoda time lag raha hai, kripya wait karein...</p>
            </div>

            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-sky-400 to-[#011F4B] h-full rounded-full animate-pulse w-full"></div>
            </div>
          </div>
        </section>
      )}

      {/* Result Display Section */}
      {!loading && studentData && (
        <section className="pb-16 max-w-4xl mx-auto px-4 w-full print:p-0 print:max-w-none">
          <div className="bg-white rounded-3xl border border-sky-200 shadow-xl overflow-hidden print:border-none print:shadow-none">
            
            {/* Profile Header Ribbon */}
            <div className="bg-[#011F4B] p-6 sm:p-8 text-white flex flex-wrap justify-between items-center gap-6 print:bg-slate-900 print:text-black">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-sky-400 bg-sky-900/50 flex-shrink-0 shadow-md">
                  {studentData.student_photo ? (
                    <img
                      src={
                        studentData.student_photo.startsWith('http')
                          ? studentData.student_photo
                          : `${API_BASE_URL}${studentData.student_photo.startsWith('/media/') ? '' : '/media'}${
                              studentData.student_photo.startsWith('/') ? '' : '/'
                            }${studentData.student_photo}`
                      }
                      alt={studentData.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-3xl font-extrabold text-sky-300">
                      {studentData.name ? studentData.name.charAt(0) : 'S'}
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <span className="bg-sky-500/20 text-sky-300 text-xs font-bold px-3 py-0.5 rounded-full border border-sky-400/30">
                    Verified Student Record
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-1">{studentData.name}</h2>
                  <p className="text-sky-200 text-xs sm:text-sm">
                    Parent's Name: <span className="font-semibold text-white">{studentData.parents_name}</span>
                  </p>
                  <p className="text-gray-300 text-xs">
                    Roll No: <span className="font-bold text-white">{studentData.roll_number}</span> | Class: <span className="font-bold text-white">{studentData.student_class}</span>
                  </p>
                </div>
              </div>

              <div className="bg-emerald-500 text-white font-extrabold text-base px-5 py-2.5 rounded-2xl shadow-md text-center">
                Grade: {studentData.grade || 'N/A'}
                <div className="text-xs font-medium text-emerald-100">{studentData.total_percentage || 'Pending Test'}</div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Top Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:hidden">
                
                <div className="p-5 bg-slate-50 rounded-2xl border border-gray-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Overall Attendance</span>
                    <div className="text-2xl font-black text-[#011F4B] mt-1">{studentData.attendance || '95%'}</div>
                    <p className="text-xs text-gray-500 mt-1">Regular student record</p>
                  </div>
                  <div className="text-4xl">📅</div>
                </div>

                <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-100 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                      Fee Details & Status ({displayCurrentMonth})
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      isCurrentMonthPaid ? 'bg-emerald-200 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {isCurrentMonthPaid ? `${currentMonthName} Paid` : `${currentMonthName} Due`}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                    <div className="bg-white p-2 rounded-xl border border-emerald-100">
                      <p className="text-[10px] text-gray-500 uppercase font-bold">Monthly Fee</p>
                      <p className="font-extrabold text-[#011F4B] text-sm">₹{monthlyFeeAmount}</p>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-emerald-100">
                      <p className="text-[10px] text-gray-500 uppercase font-bold">{currentMonthName} Paid</p>
                      <p className="font-extrabold text-emerald-600 text-sm">₹{currentMonthPaid}</p>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-emerald-100">
                      <p className="text-[10px] text-gray-500 uppercase font-bold">Current Due</p>
                      <p className="font-extrabold text-red-600 text-sm">₹{currentMonthDue}</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Monthly Fee Payment History Table */}
              {studentData.fee_history && studentData.fee_history.length > 0 && (
                <div className="pt-2">
                  <h3 className="font-bold text-[#011F4B] mb-3 text-xs uppercase tracking-wider flex items-center gap-2">
                    <span>💳</span> Monthly Fee Payment History & Receipts
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-gray-200 text-gray-600 text-xs uppercase">
                          <th className="py-3 px-4">Fee Month</th>
                          <th className="py-3 px-4">Amount Paid</th>
                          <th className="py-3 px-4">Payment Date</th>
                          <th className="py-3 px-4">Mode</th>
                          <th className="py-3 px-4">Fee Receipt</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 bg-white">
                        {studentData.fee_history.map((fee, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition">
                            <td className="py-3 px-4 font-semibold text-gray-800">{fee.month_name}</td>
                            <td className="py-3 px-4 font-bold text-emerald-600">₹{fee.amount_paid}</td>
                            <td className="py-3 px-4 text-gray-600">{fee.payment_date}</td>
                            <td className="py-3 px-4">
                              <span className="bg-sky-100 text-[#011F4B] font-bold text-xs px-2.5 py-1 rounded-md">
                                {fee.payment_mode}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <button
                                onClick={() => handlePrintReceipt(fee)}
                                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition shadow-sm"
                              >
                                <span>🧾</span> Download Slip
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 4 Skill Performance Cards */}
              <div className="print:hidden">
                <h3 className="font-bold text-[#011F4B] mb-4 text-xs uppercase tracking-wider flex items-center gap-2">
                  <span>📊</span> Skill Improvement Breakdown
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-white rounded-2xl border border-sky-100 shadow-sm space-y-2 hover:border-sky-300 transition">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#011F4B] text-sm">🗣️ English Speaking</span>
                      <span className="bg-sky-100 text-[#011F4B] text-xs font-bold px-2 py-0.5 rounded-md">Growth</span>
                    </div>
                    <div className="text-2xl font-black text-emerald-600">
                      {studentData.english_speaking_score || 'Not Uploaded Yet'}
                    </div>
                    <p className="text-xs text-gray-500">Fluency, daily speaking & vocabulary boost.</p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-sky-100 shadow-sm space-y-2 hover:border-sky-300 transition">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#011F4B] text-sm">🧠 Deep English Learning</span>
                      <span className="bg-sky-100 text-[#011F4B] text-xs font-bold px-2 py-0.5 rounded-md">Advanced</span>
                    </div>
                    <div className="text-2xl font-black text-emerald-600">
                      {studentData.deep_learning_score || 'Not Uploaded Yet'}
                    </div>
                    <p className="text-xs text-gray-500">Advanced grammar concepts & comprehension.</p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-sky-100 shadow-sm space-y-2 hover:border-sky-300 transition">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#011F4B] text-sm">✍️ Written Performance</span>
                      <span className="bg-sky-100 text-[#011F4B] text-xs font-bold px-2 py-0.5 rounded-md">Steady</span>
                    </div>
                    <div className="text-2xl font-black text-[#011F4B]">
                      {studentData.written_performance_score || 'Not Uploaded Yet'}
                    </div>
                    <p className="text-xs text-gray-500">Spelling, essay writing, and answer structure.</p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-sky-100 shadow-sm space-y-2 hover:border-sky-300 transition">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#011F4B] text-sm">📐 Math Improvement</span>
                      <span className="bg-sky-100 text-[#011F4B] text-xs font-bold px-2 py-0.5 rounded-md">Top Rank</span>
                    </div>
                    <div className="text-2xl font-black text-emerald-600">
                      {studentData.math_improvement_score || 'Not Uploaded Yet'}
                    </div>
                    <p className="text-xs text-gray-500">Problem solving & foundation concepts.</p>
                  </div>
                </div>
              </div>

              {/* Subject-Wise Test Scores Table */}
              {studentData.subjects && studentData.subjects.length > 0 && (
                <div className="pt-4 border-t border-gray-100 print:hidden">
                  <h3 className="font-bold text-[#011F4B] mb-3 text-xs uppercase tracking-wider flex items-center gap-2">
                    <span>📋</span> Detailed Test Scores & Evaluated Answer Copies
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-gray-200 text-gray-600 text-xs uppercase">
                          <th className="py-3 px-4">Subject / Test Name</th>
                          <th className="py-3 px-4">Max Marks</th>
                          <th className="py-3 px-4">Obtained Marks</th>
                          <th className="py-3 px-4">Teacher Checked Copy</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 bg-white">
                        {studentData.subjects.map((sub, idx) => {
                          const copyUrl = sub.test_copy
                            ? (sub.test_copy.startsWith('http')
                                ? sub.test_copy
                                : `${API_BASE_URL}${sub.test_copy.startsWith('/') ? '' : '/'}${sub.test_copy}`)
                            : null;

                          return (
                            <tr key={idx} className="hover:bg-slate-50 transition">
                              <td className="py-3 px-4 font-semibold text-gray-800">{sub.subject_name}</td>
                              <td className="py-3 px-4 text-gray-500">{sub.max_marks}</td>
                              <td className="py-3 px-4 font-black text-[#011F4B] text-base">{sub.obtained_marks}</td>
                              <td className="py-3 px-4">
                                {copyUrl ? (
                                  <a
                                    href={copyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 bg-[#011F4B] hover:bg-sky-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition shadow-sm"
                                  >
                                    <span>📥</span> View / Download
                                  </a>
                                ) : (
                                  <span className="text-gray-400 text-xs italic">Not Uploaded</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* Hidden Print Receipt Modal */}
      {selectedReceipt && (
        <div className="hidden print:block fixed inset-0 bg-white z-50 p-8 text-black">
          <div className="max-w-xl mx-auto border-2 border-[#011F4B] p-8 rounded-2xl space-y-6 relative bg-white">
            
            <div className="flex items-center justify-between border-b-2 border-[#011F4B] pb-4">
              <div className="flex items-center gap-4">
                <img
                  src="/logo.png"
                  alt="GD Dream Career Logo"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h1 className="text-2xl font-black uppercase tracking-wide text-[#011F4B]">
                    GD DREAM CAREER INSTITUTE
                  </h1>
                  <p className="text-xs font-semibold text-gray-600">
                    Official Student Fee Payment Receipt & Slip
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-300">
                  ✓ VERIFIED
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-xl border border-gray-200">
              <div className="space-y-1">
                <p><strong className="text-gray-700">Student Name:</strong> <span className="font-bold">{studentData?.name}</span></p>
                <p><strong className="text-gray-700">Roll Number:</strong> {studentData?.roll_number}</p>
                <p><strong className="text-gray-700">Class / Batch:</strong> {studentData?.student_class}</p>
                <p><strong className="text-gray-700">Parent's Name:</strong> {studentData?.parents_name}</p>
              </div>
              <div className="space-y-1 text-right">
                <p><strong className="text-gray-700">Receipt No:</strong> GD-{Math.floor(100000 + Math.random() * 900000)}</p>
                <p><strong className="text-gray-700">Payment Date:</strong> {selectedReceipt.payment_date}</p>
                <p><strong className="text-gray-700">Payment Mode:</strong> {selectedReceipt.payment_mode}</p>
                <p><strong className="text-gray-700">Status:</strong> Paid</p>
              </div>
            </div>

            <table className="w-full border-collapse border border-gray-300 text-sm my-4">
              <thead>
                <tr className="bg-[#011F4B] text-white">
                  <th className="border border-gray-300 p-2.5 text-left">Fee Particulars</th>
                  <th className="border border-gray-300 p-2.5 text-right">Amount Paid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2.5">
                    Tuition & Skill Training Fee for <strong className="text-[#011F4B]">{selectedReceipt.month_name}</strong>
                  </td>
                  <td className="border border-gray-300 p-2.5 text-right font-black text-emerald-700 text-base">
                    ₹{selectedReceipt.amount_paid}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-between items-end pt-6 border-t-2 border-[#011F4B] text-sm">
              <div className="space-y-1">
                <p className="text-xs text-gray-500 italic">
                  * Note: {selectedReceipt.receipt_note || 'This is a system generated fee slip.'}
                </p>
                <p className="text-[10px] text-gray-400">Computer Verified Document • No Manual Stamp Required</p>
              </div>

              <div className="text-center space-y-1">
                <div className="font-serif italic text-2xl font-bold text-[#011F4B] border-b border-gray-400 pb-1 tracking-wider">
                  Dev Sharma
                </div>
                <p className="font-bold text-xs text-gray-800">Authorized Signature</p>
                <p className="text-[10px] text-gray-500">GD Dream Career Institute</p>
              </div>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}