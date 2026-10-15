// File path: frontend/src/app/admin/page.js
'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://gd-dream-career-backend.onrender.com';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState('');
  const [adminPin, setAdminPin] = useState('');
  const [authError, setAuthError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  // Search filter states
  const [markSearchQuery, setMarkSearchQuery] = useState('');
  const [feeSearchQuery, setFeeSearchQuery] = useState('');

  // Track editing states
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [editingMarkId, setEditingMarkId] = useState(null);
  const [editingFeeId, setEditingFeeId] = useState(null);

  // 1. Student Form State
  const [studentForm, setStudentForm] = useState({
    name: '', parents_name: '', roll_number: '', result_pin: '', student_class: '',
    attendance: '95%', grade: 'A+', total_percentage: '88%',
    english_speaking_score: 'Not Uploaded Yet', deep_learning_score: 'Not Uploaded Yet',
    written_performance_score: 'Not Uploaded Yet', math_improvement_score: 'Not Uploaded Yet',
    total_fee: 12000, paid_fee: 0, due_fee: 12000, fee_status: 'Due Pending',
  });
  const [photoFile, setPhotoFile] = useState(null);

  // 2. Fee Payment Form State
  const [feeForm, setFeeForm] = useState({ student: '', month_name: '', amount_paid: '', payment_date: '', payment_mode: 'Cash', receipt_note: '' });

  // 3. Subject Marks Form State
  const [markForm, setMarkForm] = useState({ student: '', subject_name: '', max_marks: 100, obtained_marks: '', status: 'Pass' });
  const [testCopyFile, setTestCopyFile] = useState(null);

  useEffect(() => {
    const isSavedAuth = localStorage.getItem('gd_admin_authenticated');
    if (isSavedAuth === 'true') {
      setIsAuthenticated(true);
      fetchStudents();
    }
  }, []);

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setAuthError('');

    try {
      const res = await fetch(`${API_BASE_URL}/api/admin-login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: adminUser.trim(),
          secret_pin: adminPin.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        localStorage.setItem('gd_admin_authenticated', 'true');
        fetchStudents();
      } else {
        setAuthError(data.message || '❌ Galat Username ya Secret PIN!');
      }
    } catch (err) {
      setAuthError('❌ Server se connect nahi ho pa raha hai.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('gd_admin_authenticated');
  };

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
      const url = editingStudentId 
        ? `${API_BASE_URL}/api/students/${editingStudentId}/` 
        : `${API_BASE_URL}/api/students/`;
      
      const method = editingStudentId ? 'PATCH' : 'POST';

      const res = await fetch(url, { method: method, body: data });

      if (res.ok) {
        setMessage(editingStudentId ? '✅ Student profile updated!' : '✅ Student registered!');
        setStudentForm({
          name: '', parents_name: '', roll_number: '', result_pin: '', student_class: '',
          attendance: '95%', grade: 'A+', total_percentage: '88%',
          english_speaking_score: 'Not Uploaded Yet', deep_learning_score: 'Not Uploaded Yet',
          written_performance_score: 'Not Uploaded Yet', math_improvement_score: 'Not Uploaded Yet',
          total_fee: 12000, paid_fee: 0, due_fee: 12000, fee_status: 'Due Pending',
        });
        setPhotoFile(null);
        setEditingStudentId(null);
        fetchStudents();
      } else {
        const err = await res.json();
        setMessage(`❌ Error: ${JSON.stringify(err)}`);
      }
    } catch (err) {
      setMessage('❌ Server connection failed.');
    }
  };

  const handleEditClick = (student) => {
    setEditingStudentId(student.id);
    setStudentForm({
      name: student.name || '',
      parents_name: student.parents_name || '',
      roll_number: student.roll_number || '',
      result_pin: student.result_pin || '',
      student_class: student.student_class || '',
      attendance: student.attendance || '95%',
      grade: student.grade || 'A+',
      total_percentage: student.total_percentage || '88%',
      english_speaking_score: student.english_speaking_score || 'Not Uploaded Yet',
      deep_learning_score: student.deep_learning_score || 'Not Uploaded Yet',
      written_performance_score: student.written_performance_score || 'Not Uploaded Yet',
      math_improvement_score: student.math_improvement_score || 'Not Uploaded Yet',
      total_fee: student.total_fee || 12000,
      paid_fee: student.paid_fee || 0,
      due_fee: student.due_fee || 12000,
      fee_status: student.fee_status || 'Due Pending',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingStudentId(null);
    setStudentForm({
      name: '', parents_name: '', roll_number: '', result_pin: '', student_class: '',
      attendance: '95%', grade: 'A+', total_percentage: '88%',
      english_speaking_score: 'Not Uploaded Yet', deep_learning_score: 'Not Uploaded Yet',
      written_performance_score: 'Not Uploaded Yet', math_improvement_score: 'Not Uploaded Yet',
      total_fee: 12000, paid_fee: 0, due_fee: 12000, fee_status: 'Due Pending',
    });
    setPhotoFile(null);
  };

  const handleFeeSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingFeeId
        ? `${API_BASE_URL}/api/fee-payments/${editingFeeId}/`
        : `${API_BASE_URL}/api/fee-payments/`;
      const method = editingFeeId ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feeForm),
      });
      if (res.ok) {
        setMessage(editingFeeId ? '✏️ Fee transaction record updated!' : '💰 Fee transaction recorded successfully!');
        setFeeForm({ student: '', month_name: '', amount_paid: '', payment_date: '', payment_mode: 'Cash', receipt_note: '' });
        setEditingFeeId(null);
        fetchStudents();
      } else {
        setMessage('❌ Error recording fee.');
      }
    } catch (err) {
      setMessage('❌ Server error.');
    }
  };

  const handleEditFeeClick = (fee) => {
    setEditingFeeId(fee.id);
    setFeeForm({
      student: fee.student,
      month_name: fee.month_name,
      amount_paid: fee.amount_paid,
      payment_date: fee.payment_date,
      payment_mode: fee.payment_mode || 'Cash',
      receipt_note: fee.receipt_note || '',
    });
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleCancelFeeEdit = () => {
    setEditingFeeId(null);
    setFeeForm({ student: '', month_name: '', amount_paid: '', payment_date: '', payment_mode: 'Cash', receipt_note: '' });
  };

  const handleDeleteFeeRecord = async (feeId) => {
    if (!confirm('Kya aap is fee transaction entry ko delete karna chahte hain?')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/api/fee-payments/${feeId}/`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setMessage('🗑️ Fee transaction record deleted!');
        fetchStudents();
      }
    } catch (err) {
      alert('Delete failed.');
    }
  };

  const handleMarkSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in markForm) {
      data.append(key, markForm[key]);
    }
    
    if (testCopyFile && testCopyFile.length > 0) {
      for (let i = 0; i < testCopyFile.length; i++) {
        data.append('test_copy', testCopyFile[i]);
      }
    }

    try {
      const url = editingMarkId 
        ? `${API_BASE_URL}/api/subject-marks/${editingMarkId}/` 
        : `${API_BASE_URL}/api/subject-marks/`;
      const method = editingMarkId ? 'PATCH' : 'POST';

      const res = await fetch(url, { method, body: data });
      if (res.ok) {
        setMessage(editingMarkId ? '✏️ Subject mark & test copy updated!' : '📊 Subject marks & test copy uploaded!');
        setMarkForm({ student: '', subject_name: '', max_marks: 100, obtained_marks: '', status: 'Pass' });
        setTestCopyFile(null);
        setEditingMarkId(null);
        fetchStudents();
      } else {
        setMessage('❌ Error saving marks.');
      }
    } catch (err) {
      setMessage('❌ Server error.');
    }
  };

  const handleEditMarkClick = (mark) => {
    setEditingMarkId(mark.id);
    setMarkForm({
      student: mark.student,
      subject_name: mark.subject_name,
      max_marks: mark.max_marks,
      obtained_marks: mark.obtained_marks,
      status: mark.status || 'Pass',
    });
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleCancelMarkEdit = () => {
    setEditingMarkId(null);
    setMarkForm({ student: '', subject_name: '', max_marks: 100, obtained_marks: '', status: 'Pass' });
    setTestCopyFile(null);
  };

  const handleDeleteTestCopy = async (markId) => {
    if (!confirm('Kya aap is test copy PDF file ko delete karna chahte hain?')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/api/subject-marks/${markId}/delete_test_copy/`, {
        method: 'POST',
      });
      if (res.ok) {
        setMessage('🗑️ Test copy file deleted!');
        fetchStudents();
      } else {
        alert('Failed to delete file.');
      }
    } catch (err) {
      alert('Server error.');
    }
  };

  const handleDeleteMarkRecord = async (markId) => {
    if (!confirm('Kya aap is pure mark record ko delete karna chahte hain?')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/api/subject-marks/${markId}/`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setMessage('🗑️ Subject mark record deleted!');
        fetchStudents();
      }
    } catch (err) {
      alert('Delete failed.');
    }
  };

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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-100 text-gray-800">
        <Navbar />
        <div className="flex-grow flex items-center justify-center px-4 py-16">
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl max-w-md w-full space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-[#011F4B] text-white rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-md">
                🔒
              </div>
              <h1 className="text-2xl font-black text-[#011F4B]">Admin Database Auth</h1>
              <p className="text-xs text-gray-500 font-medium">Enter registered Admin Username & Secret PIN.</p>
            </div>

            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#011F4B] mb-2">
                  Admin Username
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter Username"
                  value={adminUser}
                  onChange={(e) => setAdminUser(e.target.value)}
                  className="w-full p-3.5 border border-gray-300 rounded-xl bg-slate-50 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#011F4B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#011F4B] mb-2">
                  Secret PIN
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter Secret PIN"
                  value={adminPin}
                  onChange={(e) => setAdminPin(e.target.value)}
                  className="w-full p-3.5 border border-gray-300 rounded-xl bg-slate-50 text-center text-lg font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-[#011F4B]"
                />
              </div>

              {authError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-bold text-center">
                  {authError}
                </div>
              )}

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full bg-[#011F4B] hover:bg-black text-white font-bold py-3.5 rounded-xl transition shadow text-sm"
              >
                {loginLoading ? 'Verifying with Database...' : 'Unlock Dashboard 🚀'}
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const allMarks = students.flatMap(student => 
    (student.subjects || []).map(mark => ({ ...mark, studentObj: student }))
  );

  const filteredMarks = markSearchQuery.trim()
    ? allMarks.filter(item => {
        const query = markSearchQuery.toLowerCase().trim();
        const roll = (item.studentObj.roll_number || '').toLowerCase();
        const name = (item.studentObj.name || '').toLowerCase();
        return roll.includes(query) || name.includes(query);
      })
    : [];

  const allFees = students.flatMap(student => 
    (student.fee_history || []).map(fee => ({ ...fee, studentObj: student }))
  );

  const filteredFees = feeSearchQuery.trim()
    ? allFees.filter(item => {
        const query = feeSearchQuery.toLowerCase().trim();
        const roll = (item.studentObj.roll_number || '').toLowerCase();
        const name = (item.studentObj.name || '').toLowerCase();
        return roll.includes(query) || name.includes(query);
      })
    : [];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-gray-800">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10 w-full space-y-12 flex-grow">
        
        <div className="bg-[#011F4B] text-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-wrap justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold">⚙️ GD Dream Career - Master Admin Control</h1>
            <p className="text-sky-200 text-sm mt-1">Manage Students, Fees, Subject Marks, Test Copies & Cloudinary Photos seamlessly.</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow"
          >
            🔒 Lock Admin Panel
          </button>
        </div>

        {message && (
          <div className="p-4 bg-sky-50 border border-sky-200 text-[#011F4B] font-bold rounded-xl text-sm shadow-sm">
            {message}
          </div>
        )}

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-[#011F4B]">
              {editingStudentId ? '✏️ Edit Student Profile' : '➕ 1. Register New Student'}
            </h2>
            {editingStudentId && (
              <button 
                onClick={handleCancelEdit}
                className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded-lg font-bold transition"
              >
                Cancel Edit
              </button>
            )}
          </div>
          
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
              <input type="text" required maxLength={4} value={studentForm.result_pin} onChange={(e)=>setStudentForm({...studentForm, result_pin:e.target.value})} className="w-full p-3 border rounded-xl bg-slate-50 text-sm" />
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
              <label className="block text-xs font-bold uppercase mb-1">Monthly Expected Fee (₹)</label>
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
              <button type="submit" className={`w-full text-white font-bold py-3.5 rounded-xl transition shadow ${editingStudentId ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-[#011F4B] hover:bg-black'}`}>
                {editingStudentId ? 'Update Student Profile' : 'Save Student Record'}
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-[#011F4B]">
                {editingFeeId ? '✏️ Edit Fee Payment Entry' : '💰 2. Add Monthly Fee Payment'}
              </h2>
              {editingFeeId && (
                <button onClick={handleCancelFeeEdit} className="text-xs bg-gray-200 px-2.5 py-1 rounded font-bold">
                  Cancel
                </button>
              )}
            </div>

            <form onSubmit={handleFeeSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase mb-1">Select Student *</label>
                <select required value={feeForm.student} onChange={(e)=>setFeeForm({...feeForm, student:e.target.value})} className="w-full p-3 border rounded-xl bg-slate-50 text-sm">
                  <option value="">-- Choose Student --</option>
                  {students.map(s => <option key={s.id} value={s.id}>{s.name} ({s.roll_number})</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input type="text" required placeholder="Fee Month (e.g. October 2026)" value={feeForm.month_name} onChange={(e)=>setFeeForm({...feeForm, month_name:e.target.value})} className="p-3 border rounded-xl bg-slate-50 text-sm" />
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
              <button type="submit" className={`w-full text-white font-bold py-3 rounded-xl transition shadow ${editingFeeId ? 'bg-amber-600 hover:bg-amber-700' : 'bg-emerald-600 hover:bg-emerald-700'}`}>
                {editingFeeId ? 'Update Fee Record' : 'Record Fee Payment'}
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-[#011F4B]">
                {editingMarkId ? '✏️ Edit Subject Mark & Replace File' : '📊 3. Add Subject Marks & Test Copy'}
              </h2>
              {editingMarkId && (
                <button onClick={handleCancelMarkEdit} className="text-xs bg-gray-200 px-2.5 py-1 rounded font-bold">
                  Cancel
                </button>
              )}
            </div>

            <form onSubmit={handleMarkSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase mb-1">Select Student *</label>
                <select required value={markForm.student} onChange={(e)=>setMarkForm({...markForm, student:e.target.value})} className="w-full p-3 border rounded-xl bg-slate-50 text-sm">
                  <option value="">-- Choose Student --</option>
                  {students.map(s => <option key={s.id} value={s.id}>{s.name} ({s.roll_number})</option>)}
                </select>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <select 
                  required 
                  value={markForm.subject_name} 
                  onChange={(e)=>setMarkForm({...markForm, subject_name:e.target.value})} 
                  className="p-3 border rounded-xl bg-slate-50 text-sm col-span-1"
                >
                  <option value="">-- Skill --</option>
                  <option value="English Speaking">English Speaking</option>
                  <option value="Deep English Learning">Deep English Learning</option>
                  <option value="Written Performance">Written Performance</option>
                  <option value="Math Improvement">Math Improvement</option>
                </select>

                <input type="number" required placeholder="Obtained" value={markForm.obtained_marks} onChange={(e)=>setMarkForm({...markForm, obtained_marks:e.target.value})} className="p-3 border rounded-xl bg-slate-50 text-sm col-span-1" />
                <input type="number" required placeholder="Max Marks" value={markForm.max_marks} onChange={(e)=>setMarkForm({...markForm, max_marks:e.target.value})} className="p-3 border rounded-xl bg-slate-50 text-sm col-span-1" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-1">Test Copy Photos / PDFs {editingMarkId ? '(Select to replace current file)' : '(Multiple Select)'}</label>
                <input 
                  type="file" 
                  accept=".pdf,image/*" 
                  multiple 
                  onChange={(e)=>setTestCopyFile(e.target.files)} 
                  className="w-full p-2 border rounded-xl bg-slate-50 text-xs text-gray-500" 
                />
              </div>

              <button type="submit" className={`w-full text-white font-bold py-3 rounded-xl transition shadow ${editingMarkId ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-sky-600 hover:bg-sky-700'}`}>
                {editingMarkId ? 'Update Mark Record' : 'Upload Marks & Test Copy'}
              </button>
            </form>
          </div>

        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md space-y-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <h2 className="text-lg font-bold text-[#011F4B]">💳 Fee Payments Management & Edit Control</h2>
            
            <div className="w-full sm:w-80">
              <input
                type="text"
                placeholder="🔍 Type Roll No to view fee transactions..."
                value={feeSearchQuery}
                onChange={(e) => setFeeSearchQuery(e.target.value)}
                className="w-full p-3 border border-emerald-300 rounded-xl bg-emerald-50 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#011F4B]"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b text-xs uppercase text-gray-600">
                  <th className="py-3 px-4">Student</th>
                  <th className="py-3 px-4">Fee Month</th>
                  <th className="py-3 px-4">Amount Paid</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Mode</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {!feeSearchQuery.trim() ? (
                  <tr>
                    <td colSpan="6" className="py-8 text-center text-xs text-gray-400 font-medium">
                      🔍 Fee entries manage karne ke liye upar search box me <span className="font-bold text-[#011F4B]">Student Roll Number</span> type karein.
                    </td>
                  </tr>
                ) : filteredFees.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-8 text-center text-xs text-red-400 font-bold">
                      ❌ Roll Number "{feeSearchQuery}" ke liye koi fee records nahi mile.
                    </td>
                  </tr>
                ) : (
                  filteredFees.map(fee => (
                    <tr key={fee.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold">{fee.studentObj.name} ({fee.studentObj.roll_number})</td>
                      <td className="py-3 px-4 font-semibold">{fee.month_name}</td>
                      <td className="py-3 px-4 font-bold text-emerald-600">₹{fee.amount_paid}</td>
                      <td className="py-3 px-4 text-gray-600">{fee.payment_date}</td>
                      <td className="py-3 px-4"><span className="bg-sky-100 text-[#011F4B] px-2 py-0.5 rounded text-xs font-bold">{fee.payment_mode}</span></td>
                      <td className="py-3 px-4 text-right space-x-2">
                        <button
                          onClick={() => handleEditFeeClick(fee)}
                          className="bg-amber-500 hover:bg-amber-600 text-white px-2.5 py-1 rounded-lg text-xs font-semibold shadow-sm"
                        >
                          ✏️ Edit Fee
                        </button>
                        <button
                          onClick={() => handleDeleteFeeRecord(fee.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-2.5 py-1 rounded-lg text-xs font-semibold shadow-sm"
                        >
                          ❌ Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md space-y-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <h2 className="text-lg font-bold text-[#011F4B]">📑 Test Copies & Subject Marks Management</h2>
            
            <div className="w-full sm:w-80">
              <input
                type="text"
                placeholder="🔍 Type Roll No to view student records..."
                value={markSearchQuery}
                onChange={(e) => setMarkSearchQuery(e.target.value)}
                className="w-full p-3 border border-sky-300 rounded-xl bg-sky-50 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#011F4B]"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b text-xs uppercase text-gray-600">
                  <th className="py-3 px-4">Student</th>
                  <th className="py-3 px-4">Subject / Skill</th>
                  <th className="py-3 px-4">Marks</th>
                  <th className="py-3 px-4">Test Copy Status</th>
                  <th className="py-3 px-4 text-right">Control Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {!markSearchQuery.trim() ? (
                  <tr>
                    <td colSpan="5" className="py-8 text-center text-xs text-gray-400 font-medium">
                      🔍 Entries show karne ke liye upar search box me <span className="font-bold text-[#011F4B]">Student Roll Number</span> type karein.
                    </td>
                  </tr>
                ) : filteredMarks.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="py-8 text-center text-xs text-red-400 font-bold">
                      ❌ Roll Number "{markSearchQuery}" ke liye koi record nahi mila.
                    </td>
                  </tr>
                ) : (
                  filteredMarks.map(mark => (
                    <tr key={mark.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold">{mark.studentObj.name} ({mark.studentObj.roll_number})</td>
                      <td className="py-3 px-4">{mark.subject_name}</td>
                      <td className="py-3 px-4 font-semibold">{mark.obtained_marks} / {mark.max_marks}</td>
                      <td className="py-3 px-4">
                        {mark.test_copy ? (
                          <a 
                            href={`${API_BASE_URL}${mark.test_copy}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs font-bold text-sky-600 hover:underline bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200"
                          >
                            📄 View PDF ({mark.test_copy_name || 'File'})
                          </a>
                        ) : (
                          <span className="text-xs text-gray-400 italic">No Copy Uploaded</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-right space-x-2">
                        <button
                          onClick={() => handleEditMarkClick(mark)}
                          className="bg-amber-500 hover:bg-amber-600 text-white px-2.5 py-1 rounded-lg text-xs font-semibold shadow-sm"
                        >
                          ✏️ Edit / Replace
                        </button>
                        {mark.test_copy && (
                          <button
                            onClick={() => handleDeleteTestCopy(mark.id)}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-2.5 py-1 rounded-lg text-xs font-semibold shadow-sm"
                          >
                            🗑️ File Delete
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteMarkRecord(mark.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-2.5 py-1 rounded-lg text-xs font-semibold shadow-sm"
                        >
                          ❌ Delete Mark
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

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
                      <td className="py-3 px-4 text-right space-x-2">
                        <button
                          onClick={() => handleEditClick(student)}
                          className="bg-sky-600 hover:bg-sky-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition shadow-sm"
                        >
                          Edit Profile
                        </button>
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition shadow-sm"
                        >
                          Delete Student
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