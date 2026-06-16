import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AdminLayout from './components/AdminLayout';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminBookings from './pages/AdminBookings';
import AdminContacts from './pages/AdminContacts';
import AdminPayments from './pages/AdminPayments';
import AdminServices from './pages/cms/AdminServices';
import AdminBlogs from './pages/cms/AdminBlogs';
import AdminTestimonials from './pages/cms/AdminTestimonials';
import AdminVastuTips from './pages/cms/AdminVastuTips';
import AdminHome from './pages/cms/AdminHome';

export default function AdminApp() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={<AdminLogin />} />
        <Route element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="payments" element={<AdminPayments />} />
          <Route path="cms/services" element={<AdminServices />} />
          <Route path="cms/blogs" element={<AdminBlogs />} />
          <Route path="cms/testimonials" element={<AdminTestimonials />} />
          <Route path="cms/vastu-tips" element={<AdminVastuTips />} />
          <Route path="cms/home" element={<AdminHome />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
