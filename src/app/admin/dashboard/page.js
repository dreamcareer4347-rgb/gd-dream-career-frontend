'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://gd-dream-career-backend.onrender.com';

export default function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  // Form states for adding a new student
  const [formData, setFormData] = useState({
    name: '',
    parents_name: '',
    roll_number: '',
    result_pin: '',
    student_class: '',
    total_fee: 12000,
    paid_fee: 0,
    due_fee: 12000,
    fee_status: 'Due Pending',
  });
  const [photoFile, setPhotoFile] = useState(null);

  // Fetch all students on load
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

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Student Submit (Create)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (photoFile) {
      data.append('student_photo', photoFile);
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/students/`, {
        method: 'POST',
        body: data, // FormData automatically handles multipart/form-data for images
      });

      if (res.ok) {
        setMessage('✅ Student successfully added and saved to Cloudinary!');
        setFormData({
          name: '',
          parents_name: '',
          roll_number: '',
          result_pin: '',
          student_class: '',
          total_fee: 12000,
          paid_fee: 0,
          due_fee: 12000,
          fee_status: 'Due Pending',
        });
        setPhotoFile(null);
        fetchStudents(); // Refresh list
      } else {
        const errData = await res.json();
        setMessage('❌ Error: Roll number already exists or invalid data.');
        console.error(errData);
      }
    } catch (err) {
      setMessage('❌ Server connection failed.');
    }
  };

  // Handle Delete Student
  const handleDelete = async (id) => {
    if (!confirm('Kya aap sach me is student record ko delete karna chahte hain?')) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/students/${id}/`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setStudents(students.filter((s) => s.id !== id));
        setMessage('🗑️ Student record deleted successfully.');
      } else {
        alert('Delete karne me kuch problem aayi.');
      }
    } catch (err) {
      alert('Server error during deletion.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-gray-800">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-10 w-full space-y-10 flex-grow">
        
        {/* Header Banner */}
        <div className="bg-[#011F4B] text-white p-6 sm:p-8 rounded-3xl shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-extrabold">⚙️ GD Dream Career - Custom Admin Portal</h1>
          <p className="text-sky-200 text-sm mt-1">Yahin se aap website par direct naye students add aur manage kar sakte hain.</p>
        </div>

        {/* Message Alert */}
        {message && (
          <div className="p-4 bg-sky-50 border border-sky-200 text-[#011F4B] font-bold rounded-xl text-sm shadow-sm">
            {message}
          </div>
        )}

        {/* Add Student Form */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md">
          <h2 className="text-lg font-bold text-[#011F4B] mb-6">➕ Add New Student Record</h2>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Student Name *</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g. Rahul Sharma" className="w-full p-3 border rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#011F4B]" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase mb-1">Parent's Name *</label>
              <input type="text" name="parents_name" required value={formData.parents_name} onChange={handleChange} placeholder="e.g. Mr. Suresh Sharma" className="w-full p-3 border rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#011F4B]" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase mb-1">Roll Number (Unique) *</label>
              <input type="text" name="roll_number" required value={formData.roll_number} onChange={handleChange} placeholder="e.g. GDC101" className="w-full p-3 border rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#011F4B]" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase mb-1">4-Digit Result PIN *</label>
              <input type="password" name="result_pin" required maxLength={4} value={formData.result_pin} onChange={handleChange} placeholder="e.g. 1234" className="w-full p-3 border rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#011F4B]" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase mb-1">Class / Batch *</label>
              <input type="text" name="student_class" required value={formData.student_class} onChange={handleChange} placeholder="e.g. Class 12th PCM" className="w-full p-3 border rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#011F4B]" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase mb-1">Student Profile Photo (Cloudinary)</label>
              <input type="file" accept="image/*" onChange={(e) => setPhotoFile(e.target.files[0])} className="w-full p-2 border rounded-xl bg-slate-50 text-sm text-gray-500" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase mb-1">Total Fee (₹)</label>
              <input type="number" name="total_fee" value={formData.total_fee} onChange={handleChange} className="w-full p-3 border rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#011F4B]" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase mb-1">Paid Fee (₹)</label>
              <input type="number" name="paid_fee" value={formData.paid_fee} onChange={handleChange} className="w-full p-3 border rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#011F4B]" />
            </div>

            <div className="sm:col-span-2 pt-2">
              <button type="submit" className="w-full bg-[#011F4B] hover:bg-black text-white font-bold py-3.5 rounded-xl transition shadow text-sm">
                Save & Publish Student Record
              </button>
            </div>
          </form>
        </div>

        {/* Existing Students List & Delete */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md">
          <h2 className="text-lg font-bold text-[#011F4B] mb-4">📋 All Registered Students ({students.length})</h2>

          {loading ? (
            <p className="text-sm text-gray-500">Loading students...</p>
          ) : students.length === 0 ? (
            <p className="text-sm text-gray-500 italic">Abhi koi student registered nahi hai.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b text-xs uppercase text-gray-600">
                    <th className="py-3 px-4">Roll No</th>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Class</th>
                    <th className="py-3 px-4">PIN</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold">{student.roll_number}</td>
                      <td className="py-3 px-4">{student.name}</td>
                      <td className="py-3 px-4">{student.student_class}</td>
                      <td className="py-3 px-4 font-mono">{student.result_pin}</td>
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