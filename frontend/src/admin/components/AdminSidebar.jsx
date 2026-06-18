import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, Calendar, Mail, Landmark, Sparkles, BookOpen, MessageSquare, Compass, LogOut, Moon, Sun, Home, GraduationCap, Info, Phone 
} from 'lucide-react';

export default function AdminSidebar({ theme, toggleTheme }) {
  const { logout, admin } = useAuth();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={18} /> },
    { name: 'Bookings', path: '/admin/bookings', icon: <Calendar size={18} /> },
    { name: 'Yogdan Bookings', path: '/admin/yogdan-bookings', icon: <Calendar size={18} /> },
    { name: 'Contacts', path: '/admin/contacts', icon: <Mail size={18} /> },
    { name: 'Teaching Applicants', path: '/admin/teaching', icon: <GraduationCap size={18} /> },
    { name: 'Payments', path: '/admin/payments', icon: <Landmark size={18} /> },
  ];

  const cmsItems = [
    { name: 'Home Page', path: '/admin/cms/home', icon: <Home size={18} /> },
    { name: 'About Us', path: '/admin/cms/about', icon: <Info size={18} /> },
    { name: 'Services', path: '/admin/cms/services', icon: <Sparkles size={18} /> },
    { name: 'Yogadhan', path: '/admin/cms/yogadhan', icon: <Compass size={18} /> },
    { name: 'Blogs', path: '/admin/cms/blogs', icon: <BookOpen size={18} /> },
    { name: 'Testimonials', path: '/admin/cms/testimonials', icon: <MessageSquare size={18} /> },
    { name: 'Vastu Tips', path: '/admin/cms/vastu-tips', icon: <Compass size={18} /> },
    { name: 'Contact Info', path: '/admin/cms/contact-info', icon: <Phone size={18} /> },
  ];

  const isActive = (path) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };

  const linkStyle = (path) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '8px',
    color: isActive(path) ? 'var(--color-gold)' : 'var(--text-muted)',
    background: isActive(path) ? 'rgba(197, 168, 128, 0.08)' : 'transparent',
    border: `1px solid ${isActive(path) ? 'rgba(197, 168, 128, 0.2)' : 'transparent'}`,
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
    transition: 'all 0.25s',
  });

  return (
    <div style={{
      width: '260px',
      background: theme === 'light' ? '#f3ebd9' : '#0d0d0f',
      borderRight: '1px solid var(--border-glass)',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      position: 'sticky',
      top: 0,
      padding: '24px 16px',
      boxSizing: 'border-box',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '0 8px' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '1.5px solid var(--color-gold)',
          background: 'rgba(255, 51, 51, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-gold)',
        }}>
          <Moon size={18} style={{ animation: 'pulse 2s infinite alternate' }} />
        </div>
        <div>
          <h2 style={{ fontSize: '1rem', fontWeight: 'bold', letterSpacing: '0.05em', color: 'var(--text-heading)', margin: 0 }}>
            ACHYUTAM
          </h2>
          <span style={{ fontSize: '0.7rem', color: 'var(--color-gold)', fontWeight: '700', letterSpacing: '0.1em' }}>
            ADMIN PORTAL
          </span>
        </div>
      </div>

      {/* Admin details */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid var(--border-glass)',
        borderRadius: '8px',
        padding: '12px',
        marginBottom: '24px',
        fontSize: '0.8rem',
      }}>
        <div style={{ color: 'var(--text-muted)' }}>Logged in as:</div>
        <div style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '0.85rem', marginTop: '2px' }}>
          {admin?.username || 'Administrator'}
        </div>
      </div>

      {/* Scrollable Menus Container */}
      <div 
        style={{ 
          flex: 1, 
          minHeight: 0,
          overflowY: 'auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '24px', 
          marginBottom: '20px', 
          paddingRight: '4px',
          scrollbarWidth: 'thin'
        }} 
        className="sidebar-scrollable-menu"
      >
        {/* Main menu */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--text-muted)', paddingLeft: '8px', textTransform: 'uppercase' }}>
            Main Operations
          </span>
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} style={linkStyle(item.path)}>
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>

        {/* CMS menu */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--text-muted)', paddingLeft: '8px', textTransform: 'uppercase' }}>
            Content Management (CMS)
          </span>
          {cmsItems.map((item) => (
            <Link key={item.name} to={item.path} style={linkStyle(item.path)}>
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .sidebar-scrollable-menu::-webkit-scrollbar {
          width: 4px;
        }
        .sidebar-scrollable-menu::-webkit-scrollbar-track {
          background: transparent;
        }
        .sidebar-scrollable-menu::-webkit-scrollbar-thumb {
          background: rgba(197, 168, 128, 0.2);
          border-radius: 4px;
        }
        .sidebar-scrollable-menu::-webkit-scrollbar-thumb:hover {
          background: rgba(197, 168, 128, 0.4);
        }
      `}</style>

      {/* Footer */}
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          onClick={toggleTheme}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            borderRadius: '8px',
            background: theme === 'light' ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-glass)',
            color: 'var(--text-primary)',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = theme === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = theme === 'light' ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.02)';
          }}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>

        <button
          onClick={logout}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            borderRadius: '8px',
            background: 'rgba(255, 51, 51, 0.05)',
            border: '1px solid rgba(255, 51, 51, 0.15)',
            color: '#ff4d4d',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 51, 51, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 51, 51, 0.05)';
          }}
        >
          <LogOut size={18} />
          Logout Session
        </button>
      </div>
    </div>
  );
}
