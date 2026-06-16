import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminSidebar from './AdminSidebar';

export default function AdminLayout() {
  const { admin, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        background: '#070709',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        color: 'var(--color-gold)',
        fontFamily: 'var(--font-serif)',
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '2px solid rgba(197, 168, 128, 0.1)',
          borderTopColor: 'var(--color-gold)',
          borderRadius: '50%',
          animation: 'portalSpin 1s linear infinite',
        }} />
        <span style={{ letterSpacing: '0.2em', fontSize: '0.9rem' }}>LOADING ADMINISTRATION</span>
      </div>
    );
  }

  const [theme, setTheme] = React.useState(() => localStorage.getItem('theme') || 'dark');

  React.useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
      document.body.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
      document.body.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: theme }));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Redirect to login if not authenticated
  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--bg-dark)',
      color: 'var(--text-primary)',
      width: '100%',
      position: 'relative',
    }}>
      <AdminSidebar theme={theme} toggleTheme={toggleTheme} />
      <div style={{
        flex: 1,
        padding: '40px',
        height: '100vh',
        overflowY: 'auto',
        boxSizing: 'border-box',
      }}>
        <Outlet />
      </div>
    </div>
  );
}
