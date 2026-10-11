'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://gd-dream-career-backend.onrender.com';

export default function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  // 1. Student Form State
  const [studentForm, setStudentForm] = useState({
    name: '',
    parents_name: '',
    roll_number: '',
    result_pin: '',
    student_class: '',
    attendance: '95%',
    grade: 'A+',
    total_percentage: '88%',
    english_speaking_score: '88% (Fluent)',
    deep_learning_score: '90% (Advanced)',
    written_performance_score: '85% (Good)',
    math_improvement_score: '92% (Excellent)',
    total_fee: 12000,
    paid_fee: 0,
    due_fee: 12000,
    fee_status: 'Due Pending',
  });
  const [photoFile, setPhotoFile] = useState(null);

  // 2. Fee Payment Form State
  const [feeForm, setFeeForm] = useState({ student: '', month_name: '', amount_paid: '', payment_date: '', payment_mode: 'Cash', receipt_note: '' });

  // 3. Subject Marks Form State
  const [markForm, setMarkForm] = useState({ student: '', subject_name: '', max_marks: 100, obtained_marks: '', status: 'Pass' });
  const [testCopyFile, setTestCopyFile] = useState(null);

  const fetchStudents = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/students/`);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error('Error fetching students:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle Student Submit
  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const data = new FormData();
    for (const key in studentForm) {
      data.append(key, studentForm[key]);
    }
    if (photoFile) {
      data.append('student_photo', photoFile);
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/students/`, {
        method: 'POST',
        body: data, // No Content-Type header so browser sets multipart boundary automatically
      });

      if (res.ok) {
        setMessage('✅ Student successfully added with Cloudinary photo!');
        setStudentForm({
          name: '', parents_name: '', roll_number: '', result_pin: '', student_class: '',
          attendance: '95%', grade: 'A+', total_percentage: '88%',
          english_speaking_score: '88% (Fluent)', deep_learning_score: '90% (Advanced)',
          written_performance_score: '85% (Good)', math_improvement_score: '92% (Excellent)',
          total_fee: 12000, paid_fee: 0, due_fee: 12000, fee_status: 'Due Pending',
        });
        setPhotoFile(null);
        fetchStudents();
      } else {
        const err = await res.json();
        setMessage(`❌ Error: ${JSON.stringify(err)}`);
      }
    } catch (err) {
      setMessage('❌ Server connection failed.');
    }
  };

  // Handle Fee Payment Submit
  const handleFeeSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/fee-payments/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feeForm),
      });
      if (res.ok) {
        setMessage('💰 Fee transaction recorded successfully!');
        setFeeForm({ student: '', month_name: '', amount_paid: '', payment_date: '', payment_mode: 'Cash', receipt_note: '' });
        fetchStudents();
      } else {
        setMessage('❌ Error recording fee.');
      }
    } catch (err) {
      setMessage('❌ Server error.');
    }
  };

  // Handle Subject Mark & Test Copy Submit
  const handleMarkSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in markForm) {
      data.append(key, markForm[key]);
    }
    if (testCopyFile) {
      data.append('test_copy', testCopyFile);
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/subject-marks/`, {
        method: 'POST',
        body: data,
      });
      if (res.ok) {
        setMessage('📊 Subject marks and test copy uploaded successfully!');
        setMarkForm({ student: '', subject_name: '', max_marks: 100, obtained_marks: '', status: 'Pass' });
        setTestCopyFile(null);
        fetchStudents();
      } else {
        setMessage('❌ Error uploading marks.');
      }
    } catch (err) {
      setMessage('❌ Server error.');
    }
  };

  // Delete Student
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this student?')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/api/students/${id}/`, { method: 'DELETE' });
      if (res.ok) {
        setStudents(students.filter(s => s.id !== id));
        setMessage('🗑️ Student deleted.');
      }
    } catch (err) {
      alert('Delete failed.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-gray-800">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10 w-full space-y-12 flex-grow">
        
        {/* Banner */}
        <div className="bg-[#011F4B] text-white p-6 sm:p-8 rounded-3xl shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-extrabold">⚙️ GD Dream Career - Master Admin Control</h1>
          <p className="text-sky-200 text-sm mt-1">Manage Students, Fees, Subject Marks, Test Copies & Cloudinary Photos seamlessly.</p>
        </div>

        {message && (
          <div className="p-4 bg-sky-50 border border-sky-200 text-[#011F4B] font-bold rounded-xl text-sm shadow-sm">
            {message}
          </div>
        )}

        {/* SECTION 1: Add New Student */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md">
          <h2 className="text-lg font-bold text-[#011F4B] mb-6">➕ 1. Register New Student</h2>
          
          <form onSubmit={handleStudentSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Student Name *</label>
              <input type="text" required value={studentForm.name} onChange={(e)=>setStudentForm({...studentForm, name:e.target.value})} className="w-full p-3 border rounded-xl bg-slate-50 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Parent's Name *</label>
              <input type="text" required value={studentForm.parents_name} onChange={(e)=>setStudentForm({...studentForm, parents_name:e.target.value})} className="w-full p-3 border rounded-xl bg-slate-50 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Roll Number (Unique) *</label>
              <input type="text" required value={studentForm.roll_number} onChange={(e)=>setStudentForm({...studentForm, roll_number:e.target.value})} className="w-full p-3 border rounded-xl bg-slate-50 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">4-Digit PIN *</label>
              <input type="password" required maxLength={4} value={studentForm.result_pin} onChange={(e)=>setStudentForm({...studentForm, result_pin:e.target.value})} className="w-full p-3 border rounded-xl bg-slate-50 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Class / Batch *</label>
              <input type="text" required value={studentForm.student_class} onChange={(e)=>setStudentForm({...studentForm, student_class:e.target.value})} className="w-full p-3 border rounded-xl bg-slate-50 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Profile Photo (Cloudinary)</label>
              <input type="file" accept="image/*" onChange={(e)=>setPhotoFile(e.target.files[0])} className="w-full p-2 border rounded-xl bg-slate-50 text-xs text-gray-500" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Total Fee (₹)</label>
              <input type="number" value={studentForm.total_fee} onChange={(e)=>setStudentForm({...studentForm, total_fee:e.target.value})} className="w-full p-3 border rounded-xl bg-slate-50 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Paid Fee (₹)</label>
              <input type="number" value={studentForm.paid_fee} onChange={(e)=>setStudentForm({...studentForm, paid_fee:e.target.value})} className="w-full p-3 border rounded-xl bg-slate-50 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Grade / Attendance</label>
              <div className="flex gap-2">
                <input type="text" value={studentForm.grade} onChange={(e)=>setStudentForm({...studentForm, grade:e.target.value})} placeholder="Grade" className="w-1/2 p-3 border rounded-xl bg-slate-50 text-sm" />
                <input type="text" value={studentForm.attendance} onChange={(e)=>setStudentForm({...studentForm, attendance:e.target.value})} placeholder="Attendance" className="w-1/2 p-3 border rounded-xl bg-slate-50 text-sm" />
              </div>
            </div>

            <div className="sm:col-span-3 pt-2">
              <button type="submit" className="w-full bg-[#011F4B] hover:bg-black text-white font-bold py-3.5 rounded-xl transition shadow">
                Save Student Record
              </button>
            </div>
          </form>
        </div>

        {/* SECTION 2: Add Fee & Subject Marks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Fee Payment Form */}
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md">
            <h2 className="text-lg font-bold text-[#011F4B] mb-4">💰 2. Add Monthly Fee Payment</h2>
            <form onSubmit={handleFeeSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase mb-1">Select Student *</label>
                <select required value={feeForm.student} onChange={(e)=>setFeeForm({...feeForm, student:e.target.value})} className="w-full p-3 border rounded-xl bg-slate-50 text-sm">
                  <option value="">-- Choose Student --</option>
                  {students.map(s => <option key={s.id} value={s.id}>{s.name} ({s.roll_number})</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input type="text" required placeholder="Month (e.g. Jan 2026)" value={feeForm.month_name} onChange={(e)=>setFeeForm({...feeForm, month_name:e.target.value})} className="p-3 border rounded-xl bg-slate-50 text-sm" />
                <input type="number" required placeholder="Amount Paid (₹)" value={feeForm.amount_paid} onChange={(e)=>setFeeForm({...feeForm, amount_paid:e.target.value})} className="p-3 border rounded-xl bg-slate-50 text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input type="date" required value={feeForm.payment_date} onChange={(e)=>setFeeForm({...feeForm, payment_date:e.target.value})} className="p-3 border rounded-xl bg-slate-50 text-sm" />
                <select value={feeForm.payment_mode} onChange={(e)=>setFeeForm({...feeForm, payment_mode:e.target.value})} className="p-3 border rounded-xl bg-slate-50 text-sm">
                  <option value="Cash">Cash</option>
                  <option value="UPI">UPI</option>
                  <option value="Online">Online Bank</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition shadow">
                Record Fee Payment
              </button>
            </form>
          </div>

          {/* Subject Marks & Test Copy Form */}
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md">
            <h2 className="text-lg font-bold text-[#011F4B] mb-4">📊 3. Add Subject Marks & Test Copy</h2>
            <form onSubmit={handleMarkSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase mb-1">Select Student *</label>
                <select required value={markForm.student} onChange={(e)=>setMarkForm({...markForm, student:e.target.value})} className="w-full p-3 border rounded-xl bg-slate-50 text-sm">
                  <option value="">-- Choose Student --</option>
                  {students.map(s => <option key={s.id} value={s.id}>{s.name} ({s.roll_number})</option>)}
                </select>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <input type="text" required placeholder="Subject Name" value={markForm.subject_name} onChange={(e)=>setMarkForm({...markForm, subject_name:e.target.value})} className="p-3 border rounded-xl bg-slate-50 text-sm col-span-1" />
                <input type="number" required placeholder="Obtained" value={markForm.obtained_marks} onChange={(e)=>setMarkForm({...markForm, obtained_marks:e.target.value})} className="p-3 border rounded-xl bg-slate-50 text-sm col-span-1" />
                <input type="number" required placeholder="Max Marks" value={markForm.max_marks} onChange={(e)=>setMarkForm({...markForm, max_marks:e.target.value})} className="p-3 border rounded-xl bg-slate-50 text-sm col-span-1" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase mb-1">Test Copy File / PDF Upload</label>
                <input type="file" accept=".pdf,image/*" onChange={(e)=>setTestCopyFile(e.target.files[0])} className="w-full p-2 border rounded-xl bg-slate-50 text-xs text-gray-500" />
              </div>
              <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 rounded-xl transition shadow">
                Upload Marks & Test Copy
              </button>
            </form>
          </div>

        </div>

        {/* SECTION 3: Students Table & Management */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md">
          <h2 className="text-lg font-bold text-[#011F4B] mb-4">📋 Registered Students Directory ({students.length})</h2>

          {loading ? (
            <p className="text-sm text-gray-500">Loading...</p>
          ) : students.length === 0 ? (
            <p className="text-sm text-gray-500 italic">No students registered yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b text-xs uppercase text-gray-600">
                    <th className="py-3 px-4">Photo</th>
                    <th className="py-3 px-4">Roll No</th>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Class</th>
                    <th className="py-3 px-4">Fee Paid / Total</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4">
                        {student.student_photo ? (
                          <img src={student.student_photo} alt={student.name} className="w-10 h-10 rounded-full object-cover border" />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-gray-500">N/A</div>
                        )}
                      </td>
                      <td className="py-3 px-4 font-bold">{student.roll_number}</td>
                      <td className="py-3 px-4">{student.name}</td>
                      <td className="py-3 px-4">{student.student_class}</td>
                      <td className="py-3 px-4">₹{student.paid_fee} / ₹{student.total_fee}</td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition shadow-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

      <Footer />
    </div>
  );
}